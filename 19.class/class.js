// class adalah sebuah constructor untuk sebuah objek yg akan di gunakan untuk berulang kali
class User {
  username = "";
  age = 0;
  // untuk menyembunyikan properti yg hanya bisa di akses oleh objek itu sendiri kita bisa menggunakan tanda # supaya tidak bisa di akses ke publik
  #nik = "1234123412341234"; 

  // function constructor akan terexecut setiap kali new user / sebuah objek itu di buat menggunakan cetakan class
  constructor(inputUsername, inputAge) {
    this.username = inputUsername;
    this.age = inputAge;
  }
}

const user1 = new User("doraemon", 20);
const user2 = new User("naruto", 18);

console.log(user1);
console.log(user2);
