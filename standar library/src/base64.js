// Base64 merupakan binary to text encoding, representasi binary data dalam format string
// Base64 merupakan format text data yang aman untuk dikirimkan di web
// Base64 merupakan encoding yang biasanya digunakan ketika perlu mengirim data dari client ke server
// Karena encoding Base64 merupakan text, oleh karena itu sangat aman digunakan pada query param URL atau text body dalam form
// https://developer.mozilla.org/en-US/docs/Glossary/Base64

const original = "Reza&Ramdan=Permana";
console.info(original);

const encoded = btoa(original);
console.info(encoded);

const decoded = atob(encoded);
console.info(decoded);
