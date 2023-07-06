import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, addUser } from "../actions/UserActions";
import { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import GamesCards from "./GamesCards";
import { fetchUserNew } from '../actions/UserActions';

const Profile = () => {
  const [userId, setUserId] = useState(null);

  const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchUserNew());
//   }, []);

  const {
    loading: userLoading,
    data: userData,
    error: userError,
  } = useSelector((state) => state.user);



  useEffect(() => {
    setUserId(userData?.id);
  }, [userData]);



  return (
    <>
   <GamesCards/>  
    </>
  );
};

export default Profile;
