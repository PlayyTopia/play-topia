import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function PostForm() {
  //   const [userId, setUserId] = useState(null);
  const [image, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const {
    loading: userLoading,
    data: userData,
    error: userError,
  } = useSelector((state) => state.user);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    useEffect(() => {
      setUserId(userData?.id);
    }, [userData]);
  };
  return (
    <form onS>
      <div className="heading text-center font-bold text-2xl m-5 text-white">
        New Post
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: "\n  body {background:white !important;}\n",
        }}
      />
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800  p-4  max-w-2xl shadow-2xl">
        <input
          className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-black leading-tight focus:outline-none focus:shadow-outline"
          type="file"
          placeholder="Table Image"
          name="guest_num"
          onChange={(e) => {(e)=>setImg(e.target.file)}}
          accept="image/*"
        />
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="text"
          value={title}
          onChange={onTitleChanged}
        />
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Describe everything about this post here"
          defaultValue={""}
          value={content}
          onChange={onContentChanged}
        />
        <div className="count ml-auto text-gray-400 flex text-gray-500 m-2 text-xs font-semibold">
          0/300
        </div>
        {/* buttons */}
        <div className="buttons flex">
          <div className="btn border bg-white border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
            Cancel
          </div>
          <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">
            Post
          </div>
        </div>
      </div>
    </form>
  );
}

export default PostForm;
