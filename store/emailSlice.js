import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.API_URL;

export const sendWelcomeEmail = createAsyncThunk(
  'email/sendWelcomeEmail',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/send-email`, {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error('Error sending email:', error);
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// Define slice
const emailSlice = createSlice({
  name: 'email',
  initialState: {
    status: 'idle',
    message: '',
    isSent: false,
    isSending: false,
    isNotSent: false,
  },
  reducers: {
    // Optional: Add a reset state action if needed
    resetEmailState: (state) => {
      state.status = 'idle';
      state.message = '';
      state.isSent = false;
      state.isSending = false;
      state.isNotSent = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendWelcomeEmail.pending, (state) => {
        state.status = 'loading';
        state.isSending = true;
        state.isSent = false;
        state.isNotSent = false;
        state.message = '';
      })
      .addCase(sendWelcomeEmail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload.message;
        state.isSending = false;
        state.isSent = true;
        state.isNotSent = false;
      })
      .addCase(sendWelcomeEmail.rejected, (state, action) => {
        state.status = 'failed';
        state.message = action.payload || 'Failed to send email';
        state.isSending = false;
        state.isSent = false;
        state.isNotSent = true;
      });
  },
});

export const { resetEmailState } = emailSlice.actions;

export default emailSlice.reducer;
