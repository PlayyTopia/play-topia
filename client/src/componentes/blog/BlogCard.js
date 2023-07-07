import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const BlogCard = () => {
  const [postData, setPostData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const user_id = useSelector((state) => state.userNew.data[0]?._id);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getPost")
      .then((res) => {
        setPostData(res.data);
      })
      .catch((error) => {
        console.log(error, "in getpost data BolgCard");
      });
  }, [refresh]);

  const handleDelete = (id) => {
    axios
      .put(`http://localhost:5000/deletePost/${id}`)
      .then((res) => {
        setRefresh(!refresh)
      })
      .catch((error) => {
        console.log(error, "in deletpost data BolgCard");
      });
  };
  return (
    <>
      {postData?.map((ele) => {
        const date = new Date(ele.date);
        return (
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <Link to={`/BlogDetails/${ele._id}`}>
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src="https://img.freepik.com/free-vector/gradient-lo-fi-illustration_23-2149375747.jpg?w=740&t=st=1688554099~exp=1688554699~hmac=31649ad40e9b62aa6c8c31ab08b26c27bf71b1cfa7f51537e3b677a7572db8a3"
                    alt=""
                    className="w-full rounded-2xl"
                    style={{ width: "500px", height: "350px" }}
                  />
                </div>
                <div>
                  <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                    {date.toLocaleDateString()}
                    {date.toLocaleTimeString()}
                    <span className="inline-block px-16 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                      {ele.user_name}
                    </span>
                  </span>
                  <h3 className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                    {ele.title}
                  </h3>
                  <p className="text-base text-body-color">{ele.description}</p>
                </div>
              </div>
            </Link>
            {ele.user_id == user_id && (
              <button
                onClick={() => handleDelete(ele._id)}
                type="button"
                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Delete
              </button>
            )}
          </div>
        );
      })}
    </>
  );
};

export default BlogCard;
