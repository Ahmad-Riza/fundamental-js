// loop -> if condition yang berulang selama condition masih true (sebuah kumpulan kode yang akan berulang selama condition masih true)

// segment 1 -> dieksekusi sebelum loop jalan
// segment 2 -> CONDITION (true|false)
// segment 3 -> dieksekusi di akhir setiap iterasi/pengulangan
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    // break; // untuk BERHENTIIN KESELURUHAN LOOP
    continue; // UNTUK BERHENTIIN ITERASI/PENGULANGAN SAAT INI SAJA
  }

  console.log("Masuk loop");
  console.log("i = " + i);
}

// LOOPING DI DALAM LOOPING
for (let i = 0; i < 5; i++) {
  console.log("i = " + i);

  for (let z = 0; z < 3; z++) {
    console.log("z = " + z);
  }

  // ....
}
