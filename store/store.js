// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import emailReducer from './emailSlice'
import professorReducer from './professorSlice'
import announcementDataReducer from "./announcementDataSlice";
 const store = configureStore({
  reducer: {
    user: userReducer,
    email: emailReducer,
    professor: professorReducer,
    announcements: announcementDataReducer,
  },
});

export default store