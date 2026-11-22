import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { editorialArticles, editorialCategories } from "../editorial.js";

test("six fiches documentées, des ébauches, des identifiants uniques",()=>{
  assert.equal(editorialArticles.filter(a=>a.status==="demo").length,6);
  assert.ok(editorialArticles.filter(a=>a.status==="redige").length>=20);
  for(const a of editorialArticles) assert.ok(["demo","redige"].includes(a.status),a.id);
  for(const a of editorialArticles) assert.ok(Number.isFinite(a.readingMinutes),a.id);
  assert.equal(new Set(editorialArticles.map(a=>a.id)).size,editorialArticles.length);
});
test("toutes les familles DYS et les principales neurodivergences ont une fiche",()=>{
  const ids=new Set(editorialArticles.map(a=>a.id));
  for(const id of ["tdah-reperes","autisme-sensorialite","dyslexie","dysorthographie","dysgraphie","dyscalculie","dyspraxie","dysphasie","hpi","tourette-tics","tdi"]) assert.ok(ids.has(id),id);
});
test("chaque contenu rédigé a au moins trois sections",()=>{
  for(const a of editorialArticles.filter(a=>a.status==="redige")) assert.ok(a.sections.length>=3,a.id);
});
test("bibliothèque : métadonnées et sources exploitables",()=>{
  const allowed=new Set(editorialCategories.map(c=>c.id));
  for(const article of editorialArticles) {
    assert.ok(article.id && article.title && article.format && article.abstract && article.prompt,article.id);
    assert.ok(allowed.has(article.category),article.category);
    assert.ok(Array.isArray(article.sections)&&article.sections.length>=2,article.id);
    for(const section of article.sections) assert.ok(section.title&&section.text,article.id);
    assert.ok(Array.isArray(article.sources),article.id);
    for(const source of article.sources) {
      assert.ok(source.name&&source.date&&source.limitation,article.id);
      assert.match(source.url,/^https:\/\/[^ ]+$/,article.id);
    }
  }
});
test("GitHub Pages embarque l'index éditorial",()=>{
  const workflow=readFileSync(new URL("../.github/workflows/deploy-pages.yml",import.meta.url),"utf8");
  assert.match(workflow,/cp index\.html styles\.css app\.js editorial\.js intro\.css intro\.js public\//);
  const html=readFileSync(new URL("../index.html",import.meta.url),"utf8");
  assert.match(html,/data-page="bibliotheque"/);
  assert.match(html,/id="library-grid"/);
  assert.match(html,/id="editorial-dialog"/);
  const js=readFileSync(new URL("../app.js",import.meta.url),"utf8");
  assert.match(js,/from "\.\/editorial\.js"/);
  assert.match(js,/renderLibrary\(\)/);
});
test("la démo distingue Claude et les réponses simulées",()=>{
  const js=readFileSync(new URL("../app.js",import.meta.url),"utf8");
  assert.match(js,/onlineButton\.disabled = true/);
  assert.match(js,/Cette démonstration utilise des réponses scénarisées/);
});
test("démo : un message de détresse reçoit une orientation d'urgence",()=>{
  const js=readFileSync(new URL("../app.js",import.meta.url),"utf8");
  assert.match(js,/me faire du mal/);
  assert.match(js,/3114/);
});
test("API : le mode est une liste fermée, pas une chaîne libre",()=>{
  const js=readFileSync(new URL("../api/chat.js",import.meta.url),"utf8");
  assert.match(js,/MODES\.includes\(body\.mode\)/);
  assert.doesNotMatch(js,/body\.mode\.slice/);
});
test("navigation : une destination par entrée, pas de doublon",()=>{
  const html=readFileSync(new URL("../index.html",import.meta.url),"utf8");
  const views=[...html.matchAll(/class="nav-button[^"]*" data-view="([a-z]+)"/g)].map(m=>m[1]);
  assert.deepEqual(views,["accueil","bibliotheque","parcours","bob","apropos"]);
  for(const v of views) assert.match(html,new RegExp('data-page="'+v+'"'));
  assert.equal((html.match(/id="open-settings/g)||[]).length,1);
  assert.doesNotMatch(html,/[Mm]aquette|[Pp]rototype/);
});
test("intro : passable, une fois par session, jamais en mouvement réduit",()=>{
  const js=readFileSync(new URL("../intro.js",import.meta.url),"utf8");
  assert.match(js,/sessionStorage/);
  assert.match(js,/prefers-reduced-motion/);
  assert.match(js,/keydown/);
});
test("les liens internes vers des fiches pointent vers des fiches existantes",()=>{
  const html=readFileSync(new URL("../index.html",import.meta.url),"utf8");
  const ids=new Set(editorialArticles.map(a=>a.id));
  for(const m of html.matchAll(/data-article="([^"]+)"/g)) assert.ok(ids.has(m[1]),m[1]);
  const cats=new Set(editorialCategories.map(c=>c.id));
  for(const m of html.matchAll(/data-library="([^"]+)"/g)) assert.ok(cats.has(m[1]),m[1]);
});
