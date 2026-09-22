const CACHE_NAME = 'tv2-pwa-v8-3-2';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './assets/js/app.js',
  './assets/data/kho_hoc_tieng_viet_2_part1.json',
  './assets/data/kho_hoc_tieng_viet_2_part2.json',
  './assets/data/de_thi_tieng_viet_2.json'
];

// Cac anh nhan dien co the duoc ghi de nhieu lan nhung giu nguyen ten file.
// Luon uu tien ban tren mang de banner/footer moi duoc cap nhat ngay.
const BRANDING_IMAGE_NAMES = new Set([
  'banner-main.jpg',
  'banner-main-mobile.jpg',
  'banner-sub.jpg',
  'banner-sub-mobile.jpg',
  'footer-bg.jpg',
  'footer-bg-mobile.jpg'
]);

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

function putInCurrentCache(request, response) {
  if (!response || !response.ok) return;
  const copy = response.clone();
  caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
}

async function networkFirst(request, { navigateFallback = false } = {}) {
  try {
    const response = await fetch(request);
    putInCurrentCache(request, response);
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) return cached;
    if (navigateFallback) {
      const fallback = await caches.match('./index.html');
      if (fallback) return fallback;
    }
    throw error;
  }
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Khong can thiep Google TTS / Apps Script / CDN de tranh cache giong doc hoac API cu.
  if (url.origin !== self.location.origin) return;

  const fileName = url.pathname.split('/').pop() || '';

  // Banner/footer: network-first de khi ghi de anh cung ten tren GitHub,
  // nguoi dung nhan artwork moi thay vi bi giu ban cache cu.
  if (BRANDING_IMAGE_NAMES.has(fileName)) {
    event.respondWith(networkFirst(request));
    return;
  }

  // HTML, JS, JSON: network-first de ban moi duoc cap nhat ngay,
  // cache chi lam fallback khi offline.
  const isFreshContent = request.mode === 'navigate' ||
    /\.(?:html|js|json)$/i.test(url.pathname) ||
    url.pathname.endsWith('/');

  if (isFreshContent) {
    event.respondWith(
      networkFirst(request, { navigateFallback: request.mode === 'navigate' })
    );
    return;
  }

  // Tai nguyen tinh khac cung domain: cache-first de tai nhanh va ho tro offline.
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        putInCurrentCache(request, response);
        return response;
      });
    })
  );
});
