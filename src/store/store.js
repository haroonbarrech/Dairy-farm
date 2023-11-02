import {configureStore} from '@reduxjs/toolkit';
import loginReducers from './reducers/loginReducers';
import HomeReducers from './reducers/HomeReducers';






export const store = configureStore({
    reducer: {
   
      loginTab:loginReducers,
      homeTab:HomeReducers,
    },
  })