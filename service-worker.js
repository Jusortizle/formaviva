self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('forma-viva-cache').then(function(cache) {
      return cache.addAll([
        './',
        './FormaViva_App_PIEZAS_SLIDER.html',
        './manifest.json',
        './icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});