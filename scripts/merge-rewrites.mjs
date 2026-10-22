// Збирає firebase.deploy.json: firebase.json + rewrites підшляхів із hosting-subpath.json застосунків.
// Специфічні rewrites (api, маніфести) йдуть ПЕРЕД загальними SPA-фолбеками (**), бо Firebase бере перший збіг.
import fs from "node:fs"; import path from "node:path";
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const cfg = JSON.parse(fs.readFileSync(path.join(root, "firebase.json"), "utf8"));
const extra = [];
for (const f of process.argv.slice(2)) if (f && fs.existsSync(f)) extra.push(...JSON.parse(fs.readFileSync(f, "utf8")));
const all = [...extra, ...cfg.hosting.rewrites];
const seen = new Set(), uniq = all.filter((r) => !seen.has(r.source) && seen.add(r.source));
const spa = (r) => r.source.endsWith("/**");
cfg.hosting.rewrites = [...uniq.filter((r) => !spa(r)), ...uniq.filter(spa)];
fs.writeFileSync(path.join(root, "firebase.deploy.json"), JSON.stringify(cfg, null, 2));
console.log("firebase.deploy.json:", cfg.hosting.rewrites.length, "rewrites");
