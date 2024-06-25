function sayHello() {
  console.log("Hello World!");
}

// Parameter (username, age)
function greetUser(username, age) {
  console.log(`Hello ${username}`);
  console.log(`You are ${age} years old`);
}

greetUser("John", 25);

// bisa seperti ini
function repeatGreetings(numerOfTimes = 0) {
  for (let i = 0; i < numerOfTimes; i++) {
    console.log("hello");
  }
}

function greeting() {
  console.log("Hello World!");
  return "Hello World!"; // harus pakai ini
}

// greeting(); // bisa seperti ini
console.log(greeting());
