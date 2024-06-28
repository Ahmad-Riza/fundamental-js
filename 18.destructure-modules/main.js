// require adalah menerima sebuah file directory menuju ke file yg mau kita import

const { pertambahan } = require("./add");
const { perkalian } = require("./multiply");
const { outputResult } = require("./output");

let x = 5;
let y = 8;

// console.log(pertambahan(x, y));
// console.log(perkalian(x, y));
// console.log(outputResult(15));

const additionalResults = pertambahan(x, y);
const multiplyResults = perkalian(x, y);

console.log(outputResult(additionalResults));
console.log(outputResult(multiplyResults));
