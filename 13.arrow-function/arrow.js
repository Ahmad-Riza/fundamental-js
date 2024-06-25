// Function -> adalah kumpulan kodingan yg bisa dikasih nama dan kita bisa panggil berulang-ulang.

// menggunakan function biasa
function sum(x, y) {
  return x + y;
}

// menggunakan arrow function
const jumlah = (a, b) => {
  return a + b;
};

// inidiet returns pakai ini supaya lebih simple
// const jumlah = (a, b) => a + b;

console.log(sum(1, 2));
console.log(jumlah(1, 2));
