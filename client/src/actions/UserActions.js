import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {
    const token = localStorage.getItem("auth");
    const response = await axios.get("http://localhost:5000/api/users",
    {
    headers: {
      Authorization: token,
    },
  }
    );

    return response.data;
  }
);
export const fetchOneUser = createAsyncThunk(
  "user/fetchOneUser",
  async (id) => {
    const token = localStorage.getItem("auth");
    const response = await axios.get(`http://localhost:5000/api/users/${id}`,
    {
    headers: {
      Authorization: token,
    },
  }
    );
    return response.data;
  }
);

export const addUser = createAsyncThunk(
  "user/addUser",
  async (userData) => {
    // Perform the necessary logic to add the new user to the API or database
    const response = await axios.post(
      "http://localhost:5000/api/users",
      userData
    );
    return response.data;
  }
);
export const usersLogin = createAsyncThunk(
  "user/usersLogin",
  async (userData) => {
    // Perform the necessary logic to add the new user to the API or database
    const response = await axios.post(
      "http://localhost:5000/api/usersLogin",
      userData
    );
    console.log(response.data)
    return response.data;
  }
);

export const protectedData  = createAsyncThunk(
  "user/protectedData",
  async (token) => {
   let  response;
    try {
      if (token) {
         response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
    return response.data;
  }
);

export const fetchUserNew = createAsyncThunk(
  "userNew/fetchUserNew",
  async (token) => {
    const response = await axios.get(`http://localhost:5000/api/userNew`,
    {
    headers: {
      Authorization: token,
    },
  }
    );
    return response.data;
  }
);
const userNewSlice = createSlice({
  name: "userNew",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserNew.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserNew.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserNew.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

  },
});

export default userNewSlice.reducer;


// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     loading: false,
//     data: [],
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(addUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(addUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data.push(action.payload); // Add the new user to the data array
//       })
//       .addCase(addUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default userSlice.reducer;
