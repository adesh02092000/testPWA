// "/" == index.html
const assets = [
  "/",
  "styles.css",
  "app.js",
  "sw-register.js",
  "https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
];

// Installing the serviceWorker, and adding all the assets in the cache
this.addEventListener("install", (event) => {
  caches.open("assets").then((cache) => {
    cache.addAll(assets);
  });
});

// Serving with the service worker, not each URL is rendering this same response, even the HTML is not
// rendered. To bypass this use shift + refresh
this.addEventListener("fetch", (event) => {
  const response = new Response("Hello I'm a response");
  event.respondWith(response);
});
