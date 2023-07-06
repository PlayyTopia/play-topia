import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import gamesReducer from './reducers/apiReducer';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer
  },
  middleware: [thunkMiddleware],
});

export default store;
