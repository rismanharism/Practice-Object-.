/*
Untuk soal nomor 2, dilarang menjalankan kode di code editor. Kalian hanya boleh membaca dan menganalisa apa output dari sintaks berikut

function groupingAnimals(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i][0]] === undefined) {
            result[arr[i][0]] = [];
        }
        result[arr[i][0]].push(arr[i]);
    }
}

let animals = ['kambing', 'ayam', 'badak', 'kucing', 'angsa', 'kuda', 'bebek'];
console.log(groupingAnimals(animals));
*/

// Jawaban :
 // undefined