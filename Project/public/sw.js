self.addEventListener("install", function(event) {
    console.log("Service Worker installing...", event);
});

self.addEventListener("activate", function(event) {
    console.log("Service Worker installing...", event);
    return self.client.claim();
})