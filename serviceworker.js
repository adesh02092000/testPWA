console.log("Hello from the service worker");
// Service worker is acts as an client-side server and hence makes the web app work offline
// Service worker runs on its own thread, apart from the main thread. Hence we are not loading it from the
// html instead created a sw-register file to that

// Also after some time of inactivity this thread gets deactivated
