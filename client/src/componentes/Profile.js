import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchFavGames} from "../actions/FavGames"
import { fetchUserNew } from '../actions/UserActions';
import Rating from "./Rating";
import TotalRating from "./TotalRating";
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
import Swal from "sweetalert2";
import { Button } from "@material-tailwind/react";
import { fetchgamesS } from "../actions/ApiActions";
import axios from "axios";
const Profile = () => {

const { loading, data, error } = useSelector((state) => state.userNew);
const [favGames, setFavGames]=useState(null)
const [userId, setUserId]=useState(null)

  const dispatch = useDispatch();

  useEffect(() => {
      const token = localStorage.getItem("auth");
      dispatch(fetchUserNew(token))
      fetchDataFav(data[0]?._id)
      setUserId(data[0]?._id)
  }, [dispatch]);


const fetchDataFav = async(id) =>{

  try {
    const response = await dispatch(fetchFavGames(id)); 
    setFavGames(response.payload)
  } catch (error) {
    console.error('Failed to add Pokemon:', error);
  }

  }



  const {
    loading: gamesLoading,
    data: gamesData,
    error: gamesError,
  } = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(fetchgamesS());
  }, [dispatch]);


  const handleFAv = async (card) => {
    console.log(card)
    let UsersIdFavorite = [...(card.UsersIdFavorite || [])];
  
    const indexToRemove = UsersIdFavorite.indexOf(userId);
    if (indexToRemove !== -1) {
      UsersIdFavorite.splice(indexToRemove, 1);
      showSuccessAlert("removed from favorites")
  
    } else {
      UsersIdFavorite.push(userId);
      showSuccessAlert("added to favorites")
  
    }
  
    try {
      const response = await axios.put(
        `http://localhost:5000/api/updateGameFav/${card._id}`,
        { UsersIdFavorite }
      );
      // dispatch(fetchgamesS());
      fetchDataFav(userId)
    } catch (error) {
    console.log(error);
    }
  };
  
  const showSuccessAlert = (message) => {
    Swal.fire({
      title: message,
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {});
  };






  return (
    <>
      <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 place-items-center p-5">
        {favGames?.map((e) => {
          return (
            <div
              key={e._id}
              className="relative w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              {e.UsersIdFavorite.indexOf(userId) === -1 ? (
                <Icon
                  onClick={() => handleFAv(e)}
                  className="absolute right-2 top-2 "
                  color="red"
                  path={mdiHeartOutline}
                  size={1.5}
                />
              ) : (
                <Icon
                  onClick={() => handleFAv(e)}
                  className="absolute right-2 top-2 "
                  color="red"
                  path={mdiHeart}
                  size={1.5}
                />
              )}

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

                  {e?.UsersIdRate?.includes(userId) ? (
                    <TotalRating rating={e.rating} />
                  ) : (
                    <Rating
                      cardId={e._id}
                      UserIdA={userId}
                      card={e}
                      rating={e.rating}
                    />
                  )}

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

export default Profile;
