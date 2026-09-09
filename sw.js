const CACHE_NAME = "mohamed-portal-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./run_lapse.html",
  "./run_poops.html",
  "./chain_lapse.js",
  "./chain_poops.js",
  "./core.js",
  "./mem.js",
  "./int64.js",
  "./ps4_offsets.js",
  "./rpc_worker.js",
  "./logo.png",
  "./payload.bin",
  "./patches/1100.bin",
  "./patches/1150.bin",
  "./patches/1200.bin",
  "./patches/1250.bin",
  "./patches/1300.bin"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.map(function(key) {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
