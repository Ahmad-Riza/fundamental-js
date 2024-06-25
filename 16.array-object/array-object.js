const user1 = {
  username: "Naruto",
  age: 17
};

const user2 = {
  username: "Sasuke",
  age: 15
};

const user3 = {
  username: "Doraemon",
  age: 300
};

const user4 = {
  username: "Nobita",
  age: 40
};

const user5 = {
  username: "Suneo",
  age: 16
};

const users = [
  user1,
  user2,
  user3,
  user4,
  user5,
  { username: "Ahmad", age: 30 }
];

// for (let i = 0; i < users.length; i++) {
//   console.log(`${i + 1}. ${users[i].username} | ${users[i].age}`);
// }

// users.forEach((user, index) => {
//   console.log(`${index + 1}. username : ${user.username} | age ${user.age}`);
// });

// untuk memfilter usia di atas 17 tahun
const filteredUsers = users.filter(user => user.age >= 17);

filteredUsers.forEach((user, index) => {
  console.log(`${index + 1}. username : ${user.username} | age ${user.age}`);
});

const findUsers = users.find(user => user.age === 17);
console.log(findUsers);
