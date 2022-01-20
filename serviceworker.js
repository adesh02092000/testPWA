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

// Service workers has a local cache, which is use to store some or all of the resources
// You can prefetch these resources in the cache or just like web apps cache them on request
