import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react'; //ini buat ngambil data di db
import { useNavigate } from 'react-router-dom'; //import useNavigate dari react-router-dom, ini buat ngambil history dari router, jadi kita bisa redirect ke halaman lain
 

  
  
  
  function Home() {
    let navigate = useNavigate(); //ini buat redirect ke halaman lain, misalnya ke halaman post


    //listOfPosts is an array of objects, masih kosong 
    //Ada setListOfPosts untuk mengupdate listOfPosts
      const [listPostingan, setListOfPosts] = useState([]);
    

      useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response)=> {   ////ngambil data dari server, di localhost:3001/posts dan dijadikan variabel response
          setListOfPosts(response.data);              //disini response.data adalah data yang diambil dari server, 
        });                                            //lalu setListofPosts(response.data) ini akan mengupdate listPostingan dengan data yang diambil dari server
      }, []);



  return (
    <div>
      {listPostingan.map((value,key)=> {      //nah karna diatas udah setListOfPosts, jadi disini kita bisa ngambil data dari listPostingan yang udh ada datanya
      return (  
        <div className="post" onClick={() => {   //dari sini dia lari ke App.js yang ada route path="/post/:id" element={<Post/>} />  ,terus langsung lari ke Post.js 
          navigate(`/post/${value.id}`)}}> 

          <div className="title"> {value.title} </div>
          <div className="body"> {value.postText} </div>
          <div className="footer"> {value.username} </div>
        </div>
      )

    })}
    </div>
  )
}

export default Home;
