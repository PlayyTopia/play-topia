import { configureStore } from '@reduxjs/toolkit';
import userReducer from './actions/AllUsersActions';
import gamesReducer from './actions/ApiActions';
import thunkMiddleware from 'redux-thunk';
import userNewReducer from './actions/UserActions'
const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
    userNew:userNewReducer
  },
  middleware: [thunkMiddleware],
});

export default store;
