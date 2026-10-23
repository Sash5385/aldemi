// Подключается в сервис-воркер PWA через workbox importScripts.
// Сервер шлёт data-only сообщения FCM: {title, body, link, tag}.
self.addEventListener("push", (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch {
    return;
  }
  const d = payload.data || payload.notification || {};
  if (!d.title && !d.body) return;
  event.waitUntil(
    self.registration.showNotification(d.title || "Magentic", {
      body: d.body || "",
      tag: d.tag,
      icon: "/icon-192.png",
      badge: "/badge-96.png",
      data: { link: d.link || "/" },
    }),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const link = (event.notification.data && event.notification.data.link) || "/";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ("focus" in c) return c.focus();
      }
      return self.clients.openWindow(link);
    }),
  );
});
