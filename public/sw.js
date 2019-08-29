self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});


self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('airhorner').then(function(cache) {
        return cache.addAll([
          '/',
          '/favicon.png',
          '/mood-swings.png',
          '/manifest.json',
          '/static/js/bundle.js',
          '/static/js/0.chunk.js',
          '/static/js/main.chunk.js',
          '/images/1f34a.svg',
          '/images/1f600.svg',
          '/images/1f601.svg',
          '/images/1f606.svg',
          '/images/1f607.svg',
          '/images/1f610.svg',
          '/images/1f612.svg',
          '/images/1f621.svg',
          '/images/1f622.svg',
          '/images/1f624.svg',
        ]);
      })
    );
});

addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;     // if valid response is found in cache return it
        } else {
          return fetch(event.request)     //fetch from internet
            .then(function(res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());    //save the response for future
                  return res;   // return the fetched data
                })
            })
            .catch(function(err) {       // fallback mechanism
              return caches.open(CACHE_CONTAINING_ERROR_MESSAGES)
                .then(function(cache) {
                  return cache.match('/offline.html');
                });
            });
        }
      })
  );
});   