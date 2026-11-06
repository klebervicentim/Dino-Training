// Service worker do Toto Training.
// Guarda o app (html/js/manifest/ícones) para a lista abrir sem internet.
// Rede primeiro (pega edições novas), cache se estiver offline.
// Os vídeos vêm do YouTube e não passam por aqui.

const CACHE_APP = "toto-app-v6";
const ARQUIVOS_APP = ["./", "index.html", "exercicios.js", "manifest.json", "logo.png", "dados.json", "icon-180.png", "icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_APP)
      .then((c) => Promise.all(ARQUIVOS_APP.map((u) => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE_APP).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== location.origin) return;
  e.respondWith(redePrimeiro(req));
});

async function redePrimeiro(req) {
  const cache = await caches.open(CACHE_APP);
  try {
    const r = await fetch(req, { cache: "no-cache" }); // revalida com o servidor (ignora o max-age=600 do GitHub Pages)
    if (r.ok) cache.put(req, r.clone());
    return r;
  } catch (err) {
    const hit = (await cache.match(req)) || (await cache.match(req, { ignoreSearch: true }));
    if (hit) return hit;
    if (req.mode === "navigate") return (await cache.match("index.html")) || (await cache.match("./"));
    throw err;
  }
}
