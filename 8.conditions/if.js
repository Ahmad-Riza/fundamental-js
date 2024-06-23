// kondisi untuk menghasilkan yang lebih leluasa
const price = 10000;
const payment = 20000;

// Kalau uangnya pas
if (payment === price) {
  console.log("Terima kasih sudah membayar dengan uang pas");
} else if (payment > price) {
  // Kalau uangnya lebih
  const change = payment - price;

  console.log(`Terima kasih, kembalian anda sebesar Rp. ${change}`);
} else {
  // Kalau uangnya kurang
  const moneyDeficit = price - payment;

  console.log(`Maaf uang anda kurang sebesar Rp. ${moneyDeficit}`);
}
