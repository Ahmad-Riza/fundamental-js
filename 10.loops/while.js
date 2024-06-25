// LOOPING -> kondisinya False (dari iterasi/pertama kali masuk looping, dia sudah ngecek kondisi) )

let i = 0;

while (i < 5) {
  if (i === 3) {
    i++;
    break;
    // continue;
  }

  console.log("Masuk while");
  console.log("i = " + i);

  i++;
}
