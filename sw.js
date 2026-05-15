
const CACHE_NAME = "igbo-cache-v1";

const urlsToCashe = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./icon.png"
];

// install seervice worker
self.addEventListener("install", (event) => {
    
    event.waitUntil(

        caches.open(CACHE_NAME)
        .then((cache) => {
            return cache.addAll(urlsToCashe);
        })
    );
});

// fetch cached files
self.addEventListener("fetch", (event) => {
    event.respondWith(

        caches.match(event.request)
        .then((response) => {
            return response || fetch(event.request);
        })

    );
});