// Service worker do informativo: busca sempre a versão nova (rede primeiro) e só usa a cópia guardada sem internet.
// As chamadas ao GitHub (outro domínio) passam direto, sem cache.
const CACHE = 'informativo-v1';
const BASICOS = ['./', 'index.html', 'manifest.webmanifest', 'assets/config.js', 'assets/fontes.js', 'assets/imagem-padrao.js', 'assets/icones/icone.svg', 'assets/icones/icone-192.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASICOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(chaves => Promise.all(chaves.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const pedido = e.request;
  if (pedido.method !== 'GET' || new URL(pedido.url).origin !== location.origin) return;
  e.respondWith(fetch(pedido).then(resposta => {
    if (resposta.ok) {
      const copia = resposta.clone();
      caches.open(CACHE).then(c => c.put(pedido, copia));
    }
    return resposta;
  }).catch(() => caches.match(pedido, { ignoreSearch: true }).then(guardada => guardada || caches.match('index.html'))));
});
