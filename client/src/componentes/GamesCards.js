import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGames } from "../actions/ApiActions";
import { fetchgamesS } from "../actions/ApiActions";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import Rating from "./Rating";
import TotalRating from "./TotalRating";

const GamesCards = () => {

  const [userId, setUserId] = useState(null);


  const {
    loading: userLoading,
    data: userData,
    error: userError,
  } = useSelector((state) => state.user);



  useEffect(() => {
    setUserId(userData?.id);
  }, [userData,fetchgamesS]);


  const [apiData, setApiData] = useState(null);
  const dispatch = useDispatch();

  const {
    loading: gamesLoading,
    data: gamesData,
    error: gamesError,
  } = useSelector((state) => state.games);


  useEffect(() => {
    dispatch(fetchgamesS());
  }, [dispatch]);

  useEffect(() => {
    setApiData(gamesData);
  }, [gamesData]);


//   const handleAdd = async () => {
//     apiData.map( async(e,index)=>{
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/games",
//         apiData[index]
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
// })
// };

  return (
    <>
      {/* <Button
        className="p-1 h-10 border border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
        variant="text"
        onClick={handleAdd}
      ></Button> */}
      <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 place-items-center p-5">
        {apiData?.map((e) => {
          return (
            <div
            key={e._id}
            
            className="w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className=" rounded-t-lg w-full"
                  src={e.thumbnail}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white h-32">
                    {e.short_description}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                {/* <TotalRating rating={e.rating} />
                <Rating cardId={e._id} UserIdA={userId} card={e} rating={e.rating} /> */}


       {e?.UsersIdRate?.includes(userId) ?
   <TotalRating rating={e.rating} />
   : 
   <Rating cardId={e._id} UserIdA={userId} card={e} rating={e.rating} />
       }

                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    {e.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className=" font-bold text-gray-900 dark:text-white">
                    {e.title}
                  </span>

                  <Button
                    className="p-1 h-10 border border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]"
                    variant="text"
                  >
                    <a target="_blank" href={e.game_url}>
                      play game
                    </a>
                  </Button>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GamesCards;
