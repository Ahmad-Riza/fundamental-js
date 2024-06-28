const user = {
  username: "Doraemon",
  age: 25,
  job: "Programmer",
  address: {
    city: "Jakarta",
    street: "Jl. Kenangan"
  }
};

// contoh destructuring by object harus di masukkan properti namenya
const { username, age, job, address: { city, street } } = user;

console.log(
  `username: ${username} | age: ${age} | job: ${job} | address: ${city}, ${street}`
); // destructuring
// console.log(`username: ${user.username} | age: ${user.age} | job: ${user.job}`);

// contoh destructuring dengan array harus di masukkan index nya (0,1,2,3)
const fruit = ["Mangga", "Jeruk", "Melon"];

// const secondFavoriteFruit = fruit[0];
// const favoriteFruit = fruit[1];
// const leastFavoriteFruit = Fruit[2];

const [secondFavoriteFruit, favoriteFruit, leastFavoriteFruit] = fruit; // destructuring
const [firstFruit, ...restOfFruit] = fruit; // menggunakan spread operator

console.log(restOfFruit);
