import React from "react";
import axios from "axios";

function PostFunction() {
  const handleSubmit = ({ image, title, content, userData, e }) => {
    e.preventDefault();
    
    console.log({ image, title, content, userData });
    const formData = new FormData();
    formData.append("user_id", userData._id);
    formData.append("user_name", userData.name);
    formData.append("title", title);
    formData.append("desc", content);
    formData.append("image", image);
    console.log(formData);
    axios
      .post("http://localhost:5000/addPost", formData)
      .then((res) => {
        console.log(res, "mias");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    handleSubmit,
  };
}

export default PostFunction;
