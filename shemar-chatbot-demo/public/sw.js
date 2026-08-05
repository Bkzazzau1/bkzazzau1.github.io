// Cleanup worker: replaces and removes the previous LodgeCheck PWA worker.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
      await self.clients.claim();

      const clients = await self.clients.matchAll({ type: "window" });
      await self.registration.unregister();

      await Promise.all(
        clients.map((client) =>
          client.navigate(`${new URL(client.url).origin}/?site=shemar`),
        ),
      );
    })(),
  );
});
