self.addEventListener("install", event => {
    console.log("PWA Installed");
});

self.addEventListener("fetch", event => {
    event.respondWith(fetch(event.request));
});