// LOOPING -> kondisinya false (dari iterasi/pertama kali masuk looping, dia eksekusi dulu sekali jalan, baru cek kondisi loopingnya)
let i = 0;

while (false) {
  console.log("Masuk while");
}

do {
  console.log("Masuk do while");
} while (false);

// do {
//   console.log("Masuk do while");
//   console.log("i = " + i);

//   i++;
// } while (i < 5);
