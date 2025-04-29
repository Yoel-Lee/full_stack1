import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
//css nya udah di import lewat dari App.js yang import app.css
import * as Yup from "yup";
import axios from "axios";

function CreatePost() {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      //ini buat ngirim data ke server, di localhost:3001/posts, dengan data yang ada di variabel data yang udah diambil dari form
      //ini berhubung dengan client/routes/Posts.js, jadi ini bakal masuk ke router.post("/", async (req, res) => { di server
    });
  };

    const validationSchema = Yup.object().shape({
      title: Yup.string().required("Title is required"), //title bentuk string dan gaboleh null/ kosong
      postText: Yup.string().required("Post is required"), //ini juga sama
      username: Yup.string().min(3).max(15).required("Username is required "), //username bentuk string, minimal 3 karakter, maksimal 15 karakter, dan gaboleh null/ kosong
    });

    return (
      <div className="createPostPage">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

          <Form className="formContainer">
            <label> Title : </label>
            <ErrorMessage name="title" component="span" />
            <Field
              id="inputCreatePost"
              name="title"
              placeholder="(Title .... )"
            />

            <label> Post : </label>
            <ErrorMessage name="postText" component="span" />
            <Field
              id="inputCreatePost"
              name="postText"
              placeholder="(Post .... )"
            />

            <label> Username : </label>
            <ErrorMessage name="username" component="span" />
            <Field
              id="inputCreatePost"
              name="username"
              placeholder="(Name .... )"
            />
            <button type="submit"> Create Post </button>
          </Form>
        </Formik>
      </div>
    );
  };


export default CreatePost;
