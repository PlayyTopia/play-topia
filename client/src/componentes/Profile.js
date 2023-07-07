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
const [userData, setUserData]=useState(null)

  const dispatch = useDispatch();

  useEffect(() => {
      const token = localStorage.getItem("auth");
      dispatch(fetchUserNew(token))
      fetchDataFav(data[0]?._id)
      setUserId(data[0]?._id)
      setUserData(data[0])
      console.log(data[0]?._id)
  }, [dispatch]);

console.log(userData)
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


//-------------ali--------------//

const [editMode, setEditMode] = useState(false);
const [userName, setUserName] = useState("ali");
const [email, setEmail] = useState("aa@gmail.com");


const toggleEditMode = () => {
 setEditMode(!editMode);
};
const handleSubmit = (e) => {
 e.preventDefault();
 setEditMode(false);
 Swal.fire({
   title: 'Do you want to save the changes?',
   showDenyButton: true,
   showCancelButton: true,
   confirmButtonText: 'Save',
   customClass: {
     container: 'my-swal-container',
     title: 'my-swal-title',
     confirmButton: 'my-swal-button',
     denyButton: 'my-swal-button',
     cancelButton: 'my-swal-button',
   },
   buttonsStyling: false,
 }).then((result) => {
   if (result.isConfirmed) {
     Swal.fire('Saved!', '', 'success');
   } else if (result.isDenied) {
     Swal.fire('Changes are not saved', '', 'info');
   }
 });
 
};

  return (
    <>

<div className="max-w-screen-xl mx-auto px-4 md:px-8 text-white">
      <div className="flex justify-between mt-4">
        <div>
          <div className="w-44 rounded-full" >
            <img className="rounded-full" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="a"/>
          </div>
          {editMode ? (
            <div>
            <lable className="me-5">update your name:</lable>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your user name"
              style={{ color: 'black' }}
            /></div>
            
          ) : (
            <h2 className="text-4xl">
              Welcome, <span>{userName}</span>
            </h2>
          )}
          <br/>
          {editMode ? (
            <div>
            <lable className="me-5">update your email:</lable>
            <input
            placeholder="Enter your email"
            className="mt-3"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ color: 'black' }}
            />
            </div>
            
          ) : (
            <h3>Email: {email}</h3>
          )}
          {editMode ? (
            <input type="file" />
            ):("")}
        </div>
        <div>
          {editMode ? (
            <>
                    
              <Button className="p-1 me-2 h-10  border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]" onClick={handleSubmit}>Save</Button>
              <Button className="p-1 h-10  border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]" onClick={toggleEditMode}>Cancel</Button>
            </>
          ) : (
            <Button className="p-1 h-10 border-solid border-[#E8AA42] border-2 text-[#E8AA42] hover:bg-[#E8AA42] hover:text-[#ffffff]" onClick={toggleEditMode}>Edit</Button>
          )}
        </div>        </div>
        <div>
          <h3 className="text-2xl mt-7">Blogs:</h3>
          <article className="flex w-full flex-col items-center text-center bg-gradient-small rounded-lg px-4 py-[4.75rem] border  svelte-1wk3997">
            <h3 className="mb-2 font-semibold text-ondark-primary">Good job!</h3>{" "}
            <p className="max-w-[19.5rem] text-sm">
              there is no blogs here, you can add your own blog here
            </p>{" "}
          </article>
        </div>
        <div>
          <h3 className="text-2xl mt-7">favorite games: </h3>
          <article className="flex w-full flex-col items-center text-center bg-gradient-small rounded-lg px-4 py-[4.75rem] border  svelte-1wk3997">
            {/* <h3 className="mb-2 font-semibold text-ondark-primary">Good job!</h3>{" "} */}
           
            {/* <p className="max-w-[19.5rem] text-sm">
              there is no games here, you can add your favorite game here
            </p>{" "} */}
         
            <div className="flex w-full justify-around flex-wrap">
        {favGames?.map((e) => {
          return (
            <div
              key={e._id}
              className="mb-5 relative w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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







          </article>




          
        </div>
      </div>


      
    </>
  );
};

export default Profile;
