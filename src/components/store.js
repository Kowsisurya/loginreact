import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/slice/userSlice';
import warReducer from '../components/slice/warSlice';
import accountReducer from '../components/slice/accountSlice';
import costimizeReducer from '../components/slice/costimizeSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    war: warReducer,
    account: accountReducer,
    constimize: costimizeReducer,
    devTools: true,
  }
});

export default store;