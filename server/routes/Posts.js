const express = require('express'); //sama ini jg ngambil library dari express, ini keknya emg harus ada
const router = express.Router(); //ini kaya dari warung yang besar, ada sekat untuk bagian gorengan nya gitu laa, di pecah" gitu

const { Posts } = require('../models'); //ngambil dari models, dengan instance Posts dari models, jadi kita bisa akses ke Posts

router.get('/',async (req, res) => {
    const listOfAllPosts = await Posts.findAll(); //ini buat ngambil semua data dari database, di simpan ke listOfAllPosts
    res.json(listOfAllPosts); 
});

router.post('/', async (req, res) => {
    const post = req.body; //apa yang ditulis di body, bakal masuk ke variabel post
    await Posts.create(post) //ini buat nambahin data ke database, sesuai dengan yang ada di body
    res.json(post); //ini buat ngasih tau ke client, kalau data yang udah ditambahin itu, ya ini
    //async dan await itu buat nungguin prosesnya selesai, baru lanjut ke yang lain, jadi ga ada yang nungguin lama" gitu
});






module.exports = router;