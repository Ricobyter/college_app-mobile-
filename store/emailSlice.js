import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Ensure you have set the API_URL environment variable correctly
const API_URL = process.env.API_URL;

// Define async thunk
export const sendWelcomeEmail = createAsyncThunk(
  'email/sendWelcomeEmail',
  async ({ name, email, password }, thunkAPI) => {
    try {
      // Use API_URL for the full backend URL
      const response = await axios.post(`${API_URL}/send-email`, {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      // Log error details for debugging
      console.error('Error sending email:', error);
      return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Define slice
const emailSlice = createSlice({
  name: 'email',
  initialState: {
    status: 'idle',
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendWelcomeEmail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendWelcomeEmail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload.message;
      })
      .addCase(sendWelcomeEmail.rejected, (state, action) => {
        state.status = 'failed';
        state.message = action.payload || 'Failed to send email';
      });
  },
});

export default emailSlice.reducer;
