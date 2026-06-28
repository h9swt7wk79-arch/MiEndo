/* Service worker MiEndo
   Stratégie : réseau d'abord pour les pages (toujours la dernière version
   déployée), cache d'abord pour les ressources statiques (images, icônes). */
const CACHE = 'miendo-v1';
const STATIQUES = [
  'assets/bg.jpg', 'assets/logo.png',
  'assets/icone-192.png', 'assets/icone-512.png',
  'assets/icons/lune.svg', 'assets/icons/poids.svg', 'assets/icons/calendrier.svg',
  'assets/icons/stats.svg', 'assets/icons/feuille.svg', 'assets/icons/profil.svg',
  'assets/icons/goutte.svg', 'assets/icons/bilan.svg', 'assets/icons/alerte.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIQUES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(cles =>
      Promise.all(cles.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // Firebase, fonts… : réseau direct

  // ne jamais mettre en cache les requêtes POST ni les appels API
  if (e.request.method !== 'GET' || url.pathname.startsWith('/api/')) return;

  if (e.request.mode === 'navigate' || url.pathname.endsWith('.html')){
    // pages : réseau d'abord, cache en secours (hors-ligne)
    e.respondWith(
      fetch(e.request)
        .then(r => { const copie = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copie)); return r; })
        .catch(() => caches.match(e.request))
    );
  } else {
    // statiques : cache d'abord
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(rep => {
        const copie = rep.clone(); caches.open(CACHE).then(c => c.put(e.request, copie)); return rep;
      }))
    );
  }
});
