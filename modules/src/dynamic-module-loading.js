// Saat kita menggunakan module dengan cara import, maka semua module akan di load
// Pada kenyataannya, kadang kita tidak ingin meload semua module diawal, kita ingin meload module ketika dibutuhkan saja, ini akan menghemat bandwith jaringan juga, karena kita tidak perlu download semua module diawal
// JavaScript mendukung dynamic module loading, caranya kita bisa menggunakan function import(), dimana hasilnya berupa Promise<ModuleObject> (Promise adalah materi yang kompleks, ini akan dibahas di kelas JavaScript Async)

export function alertHello(name) {
  alert(`Hello ${name}`);
}
