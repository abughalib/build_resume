// Service Worker for Resume Builder PWA
// Strategy: Cache-first for app shell, Network-first for API calls
// All resume data lives in localStorage — no network needed for data.

const CACHE_NAME = 'resume-builder-v1';
const BASE = '/build_resume/';

// App shell assets to pre-cache on install
const SHELL_ASSETS = [
  BASE,
  BASE + 'index.html',
  BASE + 'favicon.ico',
];

// ── Install: pre-cache the shell ─────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_ASSETS))
  );
  self.skipWaiting();
});

// ── Activate: clean up old caches ────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// ── Fetch: stale-while-revalidate for JS/CSS, cache-first for images ─────────
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip cross-origin requests (Google Fonts, CDNs, API calls)
  if (url.origin !== self.location.origin) return;

  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // LaTeX WASM assets are large — skip caching them (they have their own storage)
  if (url.pathname.includes('/core/')) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached); // Offline fallback: use cache

      // Return cached immediately, revalidate in background
      return cached || networkFetch;
    })
  );
});
