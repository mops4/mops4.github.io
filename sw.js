const CACHE_NAME = "mohamed-portal-v2";

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

// تثبيت الكاش وتخزين الملفات واحداً تلو الآخر لتفادي خطأ الملف الواحد
self.addEventListener("install", function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return Promise.allSettled(
        ASSETS.map(function(url) {
          return cache.add(url).catch(function(err) {
            console.warn("Failed to cache asset:", url, err);
          });
        })
      );
    })
  );
});

// تفعيل الكاش وحذف النسخ القديمة
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
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// استدعاء الملفات مع تجاهل علامات الاستفهام والباراميترات
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
