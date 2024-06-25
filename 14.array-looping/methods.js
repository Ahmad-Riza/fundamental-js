const users = ["reza", "naruto", "nobita", "doraemon", "sasuke"];

// contoh looping menggunakan for if
// for (let i = 0; i < users.length; i++) {
//   const currentUsername = users[i];

//   if (currentUsername.length < 5) {
//     console.log("username under 5 charecters = " + currentUsername);
//   }
// }

// forEach kegunaannya hanya untuk looping semua parameter dan harus menggunakan callback function () => {}
// users.forEach(() => {});
// di dalam forEach harus disertakan callbackfn sprti : value, index dan array
// users.forEach((username, index) => {
// pakai ini bisa
//   if (username.length < 5) {
//     console.log("username under 5 charecters = " + currentUsername);
//   }

// bisa menggunakan ini juga
//   console.log(`Index ${index} | username = ${username}`);
// });

// untuk mencari username menggunakan methods .find
// const findUsername = users.find(username => username === "nobita");

// untuk mencari username panjang karakternya
// const findUsername = users.find(username => {
//   return username.length === 8;
// });
// console.log(findUsername);

// untuk filter/mencari username menggunakan methods .length (panjang karakter user)
// const filteredUsers = users.filter(username => {
//   return username.length > 4;
// });
// console.log(filteredUsers);

// di dalam method filter diatas bentuknya seperti ini
// // const filteredUsers = [];
// // for (let i = 0; i < users.length; i++) {
// //   const currentUsername = users[i];
// //   if (currentUsername.length > 4) {
// //     filteredUsers.push(currentUsername);
// //   }
// // }
// // console.log(filteredUsers);

// method .map berguna untuk mereturn sebuah array baru /hampir sama denga method .filter
// cara kerja method .map adalah apapun yg di return dalam callback function akan masuk ked dalam array barunya mapusers
// fungsi .map bisa untuk mencari panjang karakter .filter , mengkonvert number string menjadi number

// const numbers = ["1", "50", "10", "20", "5"];
// const convertedNumbers = numbers.map(value => {
//   return Number(value);
// });
// console.log(convertedNumbers);

// awal pembuatan nya const mappedUsers = users.map();
const mappedUsers = users.map(username => {
  if (username.length > 4) {
    return username;
  }
});

console.log(mappedUsers);
