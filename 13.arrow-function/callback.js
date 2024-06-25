// callback function adalah sebuah function yang dijadikan parameter untuk dijadikan proses yg sangat fleksibel/dinamis

// const processor = callback => {
//   callback();
// };

// const greeting = () => {
//   console.log("Hello world");
// };

// const goodbye = () => {
//   console.log("Goodbye");
// };

// processor(greeting);
// processor(goodbye);

// contoh 1
// const calculate = (x, y, callback) => {
//   return callback(x, y);
// };

// const sum = (a, b) => a + b;

// console.log(calculate(a, b, sum));

// contoh 2
const calculate = (x, callback) => {
  return callback(x);
};

const upperString = (text = "") => text.toUpperCase();

const getFirstLetter = (text = "") => text.charAt(0);

console.log(calculate("naruto", upperString));
console.log(calculate("naruto", getFirstLetter));
