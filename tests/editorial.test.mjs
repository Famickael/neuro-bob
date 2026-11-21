import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { editorialArticles, editorialCategories } from "../editorial.js";

test("six articles de démonstration distincts",()=>{
  assert.equal(editorialArticles.length,6);
  assert.equal(new Set(editorialArticles.map(a=>a.id)).size,editorialArticles.length);
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
  assert.match(workflow,/cp index\.html styles\.css app\.js editorial\.js public\//);
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
