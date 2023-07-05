import { createSlice } from '@reduxjs/toolkit';
import { fetchGames } from '../actions/ApiActions';
import { fetchgamesS } from '../actions/ApiActions';

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    loading: false,
    data: null,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      })
      .addCase(fetchgamesS.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchgamesS.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      })
      .addCase(fetchgamesS.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});
export default gamesSlice.reducer;
