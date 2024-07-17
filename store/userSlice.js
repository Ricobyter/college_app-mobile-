import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// Create an async thunk for user login
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const auth = FIREBASE_AUTH;
      const userData = await signInWithEmailAndPassword(auth, email, password);
      return {
        userEmail: userData.user.email,
        uid: userData.user.uid,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create an async thunk for getting user details
export const getUser = createAsyncThunk(
  'user/getUser',
  async (uid, { rejectWithValue }) => {
    try {
      const userDoc = await getDoc(doc(FIREBASE_DB, 'users', uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        return {
          ...userData,
          createdAt: userData.createdAt.toDate().toISOString(), // Convert Timestamp to ISO string
        };
      } else {
        return rejectWithValue('User not found');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk('user/updateUser', async ({ uid, userData }, thunkAPI) => {
  try {
    const userRef = doc(FIREBASE_DB, 'users', uid);
    await setDoc(userRef, userData, { merge: true });
    return userData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  userEmail: '',
  uid: '',
  username: '',
  photoURL: '',
  educationQualifications: [],
  birthPlace: '',
  designation: '',
  bio:'',
  loading: false,
  error: '',
  isLoading: false,
  phone: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser(state) {
      state.userEmail = '';
      state.uid = '';
      state.username = '';
      state.photoURL = '';
      state.educationQualifications = [];
      state.birthPlace = '';
      state.designation = '';
      state.loading = false;
      state.error = '';
      state.isLoading = false;
    },
    setUser(state, action) {
      state.userEmail = action.payload.userEmail;
      state.uid = action.payload.uid;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userEmail = action.payload.userEmail;
        state.uid = action.payload.uid;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoading = false;
      })
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
        state.isLoading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoading = false;
      })

      //Update User
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        // Merge the updated user data into the state
        Object.assign(state, action.payload);
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUser, setUser } = userSlice.actions;
export default userSlice.reducer;
