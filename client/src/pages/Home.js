import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react';

 

  
  
  
  function Home() {

    //listOfPosts is an array of objects, masih kosong 
  //Ada setListOfPosts untuk mengupdate listOfPosts

      const [listPostingan, setListOfPosts] = useState([]);
    

      useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response)=> {   ////ngambil data dari server, di localhost:3001/posts dan dijadikan variabel response
          setListOfPosts(response.data);              //disini response.data adalah data yang diambil dari server, 
        });                                            //lalu setListofPosts(response.data) ini akan mengupdate listOfPosts dengan data yang diambil dari server
      }, []);



  return (
    <div>
      {listPostingan.map((value,key)=> {      //nah karna diatas udah setListOfPosts, jadi disini kita bisa ngambil data dari listOfPosts yang udh ada datanya
      return (
        <div className="post">
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
