import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../actions/UserActions";
import { addUser } from "../actions/UserActions";
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: [], // Initialize as an empty array instead of null
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.error.message;
      })

      
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload); // Add the new user to the data array
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

  },
});

export default userSlice.reducer;
