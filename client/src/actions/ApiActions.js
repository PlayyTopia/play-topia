import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchGames = createAsyncThunk("gamesP/fetchGames", async () => {
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/filter",
    params: {
      tag: "3d.mmorpg.fantasy.pvp",
      platform: "pc",
    },
    headers: {
      "X-RapidAPI-Key": "2c4c9bc1b1msh2cf3cd5a435ecc1p1abbfcjsn49d0887922d5",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});

export const fetchgamesS = createAsyncThunk("gamesS/fetchgamesS", async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/games");
    return response.data;
  } catch (error) {}
});


export const updategames = createAsyncThunk(
  "uGame/updategames",
  async (updatedCard) => {
    try {
      const NCard = {
        UsersIdRate: updatedCard.UsersIdRate,
        rate: updatedCard.rate,
        rating: updatedCard.rating,
      };

      let cardId = updatedCard.cardId;

      const response = await axios.put(
        `http://localhost:5000/api/games/${cardId}`,
        NCard
      );
      return response.data;
    } catch (error) {}
  }
);

export const updategamesFav = createAsyncThunk(
  "uGameFav/updategamesFav",
  async (userId) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/games/${userId}`
      );
      return response.data;
    } catch (error) {}
  }
);
