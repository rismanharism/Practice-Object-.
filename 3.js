let animals = ['kambing', 'ayam', 'ayam', 'kambing', 'ayam', 'ayam', 'kambing', 'Ayam', 'kelinci', 'kelinci'];

// buatlah sebuah fungsi dengan nama countAnimals yang akan mengembalikan sebuah objek berisikan key value yang dinamis yang tiap valuenya berisi jumlah dari tiap-tiap hewan yang berada di dalam array

/*
output:
{ kambing: 3, ayam: 4, Ayam: 1 }
*/
function countAnimals(arr) {
  const result = {};

  for (const i of arr) {
    if (!result[i]) {
      result[i] = 0;
    }
    result[i]++;
  }
  return result;
}

console.log(countAnimals(animals));
