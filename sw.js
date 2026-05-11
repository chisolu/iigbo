self.addEventListener("install", () => {
    console.log("service worker installed");
});

// self.addEventListener("fetch", event => {
//     event.respondwith(
//         fetch(event.request).catch(() => {
//             return new Response("offline");
//         })
//     );
// });