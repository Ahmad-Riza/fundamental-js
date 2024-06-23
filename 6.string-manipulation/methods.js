const username = "naruto";
const firstLetterUppercase = username.charAt(0).toUpperCase(); // .charAt adalah method karakter pertama dr username .toUpperCase adalah method untuk merubah ukuran huruf depan menjadi besar
const restOfUsername = username.slice(1); // .slice adalah method untuk mengembalikan sebuah section dari string

console.log(firstLetterUppercase + restOfUsername);
