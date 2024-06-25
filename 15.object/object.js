const user = {
  username: "Ahmad Riza Hafiz",
  nickname: ["Ahmad", "Riza", "Hafiz"], // array di dalam object
  age: 30,
  address: {
    province: "Jakarta",
    city: "Jakarta Timur",
    postalCode: 13550,
    street: {
      name: "Jl. Simpang",
      number: 123
    }
  },
  // contoh penggunaan function biasa di dalam object
  introduction: function() {
    return `Hello, my name is ${this.username}`;
  }
};

console.log(user);
// console.log(user.nickname[2]); // untuk memanggil di dalam object
// console.log(user.introduction()); // untuk memanggil di function biasa di dalam object
// console.log(Object.keys(user)); // untuk memanggil properti yg ada di dalam sebuah user sprti username, nickname dll
// console.log(Object.values(user)); // untuk memanggil value yg ada di dalam sebuah user
