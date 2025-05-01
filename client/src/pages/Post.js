import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' //ambil parameter dari url, misalnya id
import axios from 'axios'; //import axios buat ngambil data dari server


function Post() {
    let{id} = useParams()
    const [postObject, setPostObject] = useState({}) //ini buat ngambil data dari server, di localhost:3001/posts/byId/${id} dan dijadikan variabel response


    useEffect(() => {
       axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {   //harus ada route get di server, di localhost:3001/posts/byId/${id} dan dijadikan variabel response
        setPostObject(response.data);  //postObject ini adalah data yang diambil dari server
       })
    }, [])


  return (
    <div className='postPage'>

      <div className='leftSide'>
        <div className='post' id='individual'>
          <div className='title'> {postObject.title} </div>
          <div className='body'> {postObject.postText} </div>
          <div className='footer'> {postObject.username} </div>
        </div>
      </div>

      <div className='rightSide'> Comment section</div>
    </div>
  );
}

export default Post
