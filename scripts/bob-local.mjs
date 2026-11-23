#!/usr/bin/env node
/*
 * Neuro Bob+ — mode local personnel.
 *
 * Sert le site sur http://127.0.0.1:8787 et fait répondre Bob (bouton « IA en ligne »)
 * via la commande `claude` de Claude Code, connectée à VOTRE abonnement Claude.
 *
 * Usage strictement personnel : le serveur n'écoute que sur 127.0.0.1 (votre machine).
 * Ne l'exposez pas sur un réseau, ne le déployez pas : un abonnement personnel ne doit
 * pas servir de moteur à un service utilisé par d'autres personnes.
 *
 * Prérequis : Node.js 18+, Claude Code installé et connecté (`claude` puis /login).
 * Lancement : npm run bob   (variables facultatives : BOB_PORT, BOB_MODEL, BOB_CLAUDE_BIN)
 */
import http from "node:http";
import { spawn } from "node:child_process";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SYSTEM, MODES } from "../api/chat.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "127.0.0.1";
const PORT = Number(process.env.BOB_PORT) || 8787;
const CLAUDE_BIN = process.env.BOB_CLAUDE_BIN || "claude";
const MODEL = process.env.BOB_MODEL || "";
const TIMEOUT_MS = 120000;
const TYPES = {
  ".html":"text/html; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".mjs":"text/javascript; charset=utf-8",
  ".css":"text/css; charset=utf-8", ".json":"application/json; charset=utf-8", ".svg":"image/svg+xml",
  ".png":"image/png", ".jpg":"image/jpeg", ".gif":"image/gif", ".ico":"image/x-icon", ".woff2":"font/woff2"
};
// Seuls les fichiers du site sont servis (pas les docs, scripts, .env, .git…).
const PUBLIC = /^\/(index\.html|styles\.css|app\.js|editorial\.js|intro\.css|intro\.js|assets\/.+|design\/.+)$/;

function json(res, status, data) {
  res.writeHead(status, { "Content-Type":"application/json; charset=utf-8", "Cache-Control":"no-store" });
  res.end(JSON.stringify(data));
}

async function serveStatic(req, res) {
  let urlPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  if (urlPath === "/") urlPath = "/index.html";
  const file = path.resolve(ROOT, "." + urlPath);
  if (!PUBLIC.test(urlPath) || !file.startsWith(ROOT + path.sep)) { res.writeHead(404); res.end("Introuvable"); return; }
  try {
    if (!(await stat(file)).isFile()) throw new Error("not a file");
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream", "Cache-Control":"no-store" });
    res.end(await readFile(file));
  } catch { res.writeHead(404); res.end("Introuvable"); }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on("data", c => { size += c.length; if (size > 64000) { reject(new Error("too large")); req.destroy(); } else chunks.push(c); });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

// Mêmes règles de validation que api/chat.js.
function validate(body) {
  if (!body || !Array.isArray(body.messages) || body.messages.length < 1 || body.messages.length > 12) return "Historique de conversation invalide.";
  for (const m of body.messages) {
    if (!m || !["user","assistant"].includes(m.role) || typeof m.content !== "string") return "Format de message invalide.";
    const c = m.content.trim();
    if (!c || c.length > 2500) return "Message trop long ou vide.";
  }
  if (body.messages[body.messages.length - 1].role !== "user") return "La dernière entrée doit être une question.";
  return null;
}

// Claude Code reçoit un seul texte : l'historique est transcrit, le dernier message est la question.
function buildPrompt(messages) {
  const history = messages.slice(0, -1).map(m => (m.role === "user" ? "Utilisateur" : "Bob") + " :\n" + m.content.trim()).join("\n\n");
  const last = messages[messages.length - 1].content.trim();
  return (history ? "Échanges précédents de la conversation :\n\n" + history + "\n\n---\n\n" : "") +
    "Message de l'utilisateur, auquel tu réponds maintenant :\n" + last;
}

function askClaude(prompt, mode) {
  const args = [
    "-p",
    "--output-format", "json",
    "--tools", "",                      // aucun outil : Bob ne fait que répondre
    "--strict-mcp-config",              // aucun serveur MCP
    "--no-session-persistence",         // rien n'est enregistré sur disque
    "--system-prompt", SYSTEM + "\nOrientation contextuelle demandée : " + mode +
      "\nTu réponds dans une interface de discussion : texte simple, sans titres Markdown ni tableaux."
  ];
  if (MODEL) args.push("--model", MODEL);
  return new Promise((resolve, reject) => {
    const child = spawn(CLAUDE_BIN, args, { cwd: ROOT, stdio: ["pipe","pipe","pipe"] });
    let out = "", err = "";
    const timer = setTimeout(() => { child.kill("SIGTERM"); reject(new Error("Délai dépassé.")); }, TIMEOUT_MS);
    child.stdout.on("data", d => { out += d; });
    child.stderr.on("data", d => { err += d; });
    child.on("error", e => { clearTimeout(timer); reject(new Error(e.code === "ENOENT" ? "Commande « claude » introuvable : installez Claude Code." : e.message)); });
    child.on("close", code => {
      clearTimeout(timer);
      try {
        const data = JSON.parse(out);
        if (data.is_error || typeof data.result !== "string") throw new Error(data.result || "Réponse vide.");
        resolve(data.result.trim());
      } catch (e) {
        reject(new Error(code !== 0 ? (err.trim().split("\n").pop() || "Claude Code a échoué (code " + code + ").") : e.message));
      }
    });
    child.stdin.end(prompt);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.url.startsWith("/api/chat")) {
    if (req.method !== "POST") { res.setHeader("Allow","POST"); return json(res, 405, { error:"Méthode non autorisée." }); }
    let body;
    try { body = JSON.parse(await readBody(req)); } catch { return json(res, 400, { error:"JSON invalide." }); }
    const problem = validate(body);
    if (problem) return json(res, 400, { error:problem });
    const mode = MODES.includes(body.mode) ? body.mode : "general";
    try {
      const reply = await askClaude(buildPrompt(body.messages), mode);
      return json(res, 200, { reply });
    } catch (e) {
      console.error("[bob-local]", e.message);
      return json(res, 502, { error: e.message });
    }
  }
  if (req.method !== "GET" && req.method !== "HEAD") { res.writeHead(405); res.end(); return; }
  return serveStatic(req, res);
});

server.listen(PORT, HOST, () => {
  console.log("Neuro Bob+ (mode local personnel) : http://" + HOST + ":" + PORT);
  console.log("Dans « S'entraîner avec Bob », choisissez « IA en ligne » et cochez l'accord.");
  console.log("Réponses générées par Claude Code avec votre abonnement" + (MODEL ? " (modèle " + MODEL + ")" : "") + ". Ctrl+C pour arrêter.");
});
