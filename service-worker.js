const CACHE_NAME = 'tv2-pwa-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './favicon.svg',
  './assets/js/app.js',
  './assets/data/kho_hoc_tieng_viet_2_part1.json',
  './assets/data/kho_hoc_tieng_viet_2_part2.json',
  './assets/data/de_thi_tieng_viet_2.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.allSettled(APP_SHELL.map((url) => cache.add(url)));
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )),
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Không can thiệp Google TTS / Apps Script / CDN để tránh cache giọng đọc hoặc API cũ.
  if (url.origin !== self.location.origin) return;

  // HTML, JS, JSON: network-first để bản mới được cập nhật ngay, cache chỉ làm fallback offline.
  const isFreshContent = request.mode === 'navigate' ||
    /\.(?:html|js|json)$/i.test(url.pathname) ||
    url.pathname.endsWith('/');

  if (isFreshContent) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          if (request.mode === 'navigate') return caches.match('./index.html');
          throw new Error('Offline and resource not cached');
        })
    );
    return;
  }

  // Tài nguyên tĩnh cùng domain: cache-first.
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
