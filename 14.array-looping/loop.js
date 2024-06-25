const users = ["reza", "naruto", "nobita", "doraemon", "sasuke"];

// ini adalah untuk looping array
// user.length = 6 (index maksimum dari sebuah array adalah length/panjangnya di kurang 1, jadi misal length/panjangnya 6 maka index maksimumnya adalah 5. dan kalau akses index sesuai dengan length/panjang datanya, maka datanya tidak ada dan akan menghasilkan undefined)

for (let i = 0; i < users.length; i++) {
  const currentUsername = users[i];

  //   console.log(users[i]);
  console.log(`Hello, ${currentUsername}`);
}
