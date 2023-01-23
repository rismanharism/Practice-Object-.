/**
 * Buatlah sebuah object dari hewan, yang memiliki beberapa properti
 * - Nama hewan
 * - Habitat hewan
 * - Jumlah kaki hewan
 * - Jenis kelamin dari hewan
 *
 * Setelah membuat object seperti diatas jawablah pertanyaan dibawah ini
 * - Bagaimana cara mendapatkan nama hewan (console.log nama hewan yang dibuat
 * - Bagaimana cara jika saya ingin menambahkan properi baru ke hewan. contoh: menambahkan tipe hewan ( unggas, burung, dll)
 * - Dapatkah saya membuat properti yang berupa sebuah array ke dalam object? Jika iya berikan contoh satu
 * - Dapatkah saya menghapus sebuah properti yang sudah ada di dalam sebuah objek? Jika iya berikan contoh satu
 * - Dapatkah saya membuat properti yang berupa sebuah object ke dalam object? Jika iya berikan contoh satu
 *  - Dapatkah saya melakukan looping di dalam object? Jika iya berikan contoh satu
 *  - Tuliskanlah built in function yang bisa kita gunakan di dalam object?
 */

let zoo = {
    nama: "kelinci",
    habitat: "darat",
    "jumlah kaki": 4,
    "jenis kelamin": "betina"
}

console.log(zoo["nama"]);

zoo["tipe"] = "bulu","mamalia"

console.log(zoo);

zoo["makanan"] = ["rumput","sayuran","buah - buahan"]

console.log(zoo);

delete zoo["makanan"]

console.log(zoo);

zoo["anak"] = {
    "kelinci 1" : "besar",
    "kelinci 2" : "kecil",
    "kelinci 3" : "sedang",
    "kelinci 4" : "besar"
}

console.log(zoo);

for (let x in zoo) {
console.log(x);
}

console.log(zoo.hasOwnProperty("habitat"));
console.log(zoo.hasOwnProperty("habixtat"));