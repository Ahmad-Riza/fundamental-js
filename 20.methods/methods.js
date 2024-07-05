// methods adalah sebuah function yg di simpan / ditaruh di dalam sebuah properti objek
class User {
  firstName = "";
  lastName = "";
  username = "";
  age = 0;

  // function constructor akan terexecut setiap kali new user / sebuah objek itu di buat menggunakan cetakan class
  constructor(inputFirstName, inputLastName, inputUsername, inputAge) {
    this.firstName = inputFirstName;
    this.lastName = inputLastName;
    this.username = inputUsername;
    this.age = inputAge;
  }

  // method private
  #getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // untuk membuat methods = greeting () {} / method public
  greeting() {
    return `Hello, I'm ${this.#getFullName()}`;
  }

  introduct() {
    return `My Name is ${this.#getFullName()}, I am ${this.age} years old`;
  }

}

const user1 = new User("Ahmad", "Javascript", "doraemon", 20);
const user2 = new User("Naruto", "Uzumaki", "naruto", 18);

console.log(user1.greeting());
console.log(user1.introduct());
