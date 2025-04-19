import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Update with your local IP address
const BASE_URL = process.env.BACKEND_SCRAPE_DATA;

// Fetch events
export const fetchEvents = createAsyncThunk("announcements/fetchEvents", async () => {
  const response = await axios.get(`${BASE_URL}/events`);
  return response.data;
});

// Fetch notices
export const fetchNotices = createAsyncThunk("announcements/fetchNotices", async () => {
  const response = await axios.get(`${BASE_URL}/notices`);
  return response.data;
});

// Fetch achievements
export const fetchAchievements = createAsyncThunk("announcements/fetchAchievements", async () => {
  const response = await axios.get(`${BASE_URL}/achievements`);
  return response.data;
});

const announcementDataSlice = createSlice({
  name: "announcements",
  initialState: {
    events: [],
    notices: [],
    achievements: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // EVENTS
      .addCase(fetchEvents.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // NOTICES
      .addCase(fetchNotices.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.notices = action.payload;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // ACHIEVEMENTS
      .addCase(fetchAchievements.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchAchievements.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.achievements = action.payload;
      })
      .addCase(fetchAchievements.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default announcementDataSlice.reducer;
