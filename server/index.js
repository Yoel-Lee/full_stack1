//INI ROOT NYA 


const express = require('express'); //ngambil library dari express, ini keknya emg harus ada 
const app = express();
/*
ibarat kamu mau jualan warung, nah si app ini tuh bagungan warungnya, disini dimaksud sebagai servernya 
Jadi app itu warung kamu.
Nanti kamu bisa bilang:

"Kalau ada tamu yang datang lewat pintu /posts, kasih mereka daftar postingan."
➔ Itu yang diatur pakai app.use("/posts", postRouter).*/


const cors = require('cors'); //ngambil library cors, ini buat ngatur akses dari client ke server, biar ga di blokir sama browser

app.use(cors()); //ini buat ngatur akses dari client ke server, biar ga di blokir sama browser
app.use(express.json()); //ini mah biar si server bisa nerima data dari client dalam format json


const db = require('./models');  //db ngambil semua file di models, nanti si "db" ini bakal jadi variabel ngotak ngatik ke database
 
//routers

const postRouter = require('./routes/Posts'); //postRouter ngambil dari routes/Posts.js
app.use("/posts", postRouter);  //ini artinya, kalau ada yang akses ke /posts, maka server akan menggunakan aturan sesuai kodingan di routes/Posts.js
//kaya function kalau ada yg pake /posts maka.... tapi dilariin ke file lain, jadi lebih rapi



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
 
});


