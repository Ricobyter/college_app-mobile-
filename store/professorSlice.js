import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';
import { FIREBASE_DB } from '../FirebaseConfig';

export const getUser = createAsyncThunk(
  'professor/getUser',
  async (uid, { rejectWithValue }) => {
    try {
      const userDoc = await getDoc(doc(FIREBASE_DB, 'users', uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        return {
          userEmail: userData.email,
          ...userData,
          createdAt: userData.createdAt.toDate().toISOString(),
        };
      } else {
        return rejectWithValue('User not foaund');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  userEmail: '',
  uid: '',
  username: '',
  photoURL: '',
  educationQualifications: [],
  birthPlace: '',
  designation: '',
  bio: '',
  phone: '',
  loading: false,
  error: '',
  isLoading: false,
};

const professorSlice = createSlice({
  name: 'professor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.username = action.payload.username;
        state.photoURL = action.payload.photoURL;
        state.educationQualifications = action.payload.educationQualifications;
        state.birthPlace = action.payload.birthPlace;
        state.designation = action.payload.designation;
        state.bio = action.payload.bio;
        state.phone = action.payload.phone;
        state.userEmail = action.payload.userEmail;
        state.isLoading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default professorSlice.reducer;
