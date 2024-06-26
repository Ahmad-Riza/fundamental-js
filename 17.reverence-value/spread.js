// spread operator
// const naruto = {
//   username: "naruto",
//   age: 20
// };

// const sasuke = {
//   // ini yg dinamakan spread operator
//   ...naruto
// };

// naruto.username = "doraemon";

// console.log(sasuke);

// spread Operator dibungkus dalam Array
const fruit = ["Mangga", "Jeruk", "Apel"];
const fruit2 = ["Semangka", "Salak", "Jambu"];

const buah = [
  // ini yg dinamakan spread operator di dalam Array
  ...fruit,
  ...fruit2
];

// buah[0] = "Durian";

console.log(buah);
