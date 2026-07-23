const CACHE_NAME = "v1";

self.addEventListener("install", (event) => {
  console.log("Service Worker: install");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        cache.addAll([
          "/documents/blaze-union-guide.html",
          "/documents/blaze-union-translation.html",
          "/documents/ogre-battle-64.html"
        ])
      )
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: activate");
  const cacheAllowlist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheAllowlist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
          return undefined;
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  // Let the browser do its default thing
  // for non-GET requests.
  if (event.request.method !== "GET") return;

  // Prevent the default, and handle the request ourselves.
  event.respondWith(
    (async () => {
      // Try to get the response from a cache.
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);

      // update the entry in the cache in the background.
      // event.waitUntil(cache.add(event.request));
      if (cachedResponse) {
        // If we found a match in the cache, return it
        return cachedResponse;
      }

      // If we didn't find a match in the cache, use the network.
      console.log("Fetching:", event.request.url);
      return fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          if (responseClone.ok) {
            // update the entry in the cache
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        });
    })(),
  );
});
