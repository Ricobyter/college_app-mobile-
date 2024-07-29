import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH, FIREBASE_DB } from '../FirebaseConfig';
import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { sendPasswordResetEmail } from 'firebase/auth';

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

export const getUser = createAsyncThunk(
  'user/getUser',
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
        return rejectWithValue('User not found');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'user/deleteProfessor',
  async (professorId, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(FIREBASE_DB, 'users', professorId));
      return professorId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async ({ uid, userData }, thunkAPI) => {
    try {
      const userRef = doc(FIREBASE_DB, 'users', uid);
      await setDoc(userRef, userData, { merge: true });
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProfessors = createAsyncThunk(
  'user/getProfessors',
  async (_, { rejectWithValue }) => {
    try {
      const professorsQuery = query(
        collection(FIREBASE_DB, 'users'),
        where('designation', '==', 'Professor')
      );
      const querySnapshot = await getDocs(professorsQuery);

      const professors = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const { createdAt, ...rest } = data;
        professors.push({ id: doc.id, ...rest });
      });

      return professors;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getStudents = createAsyncThunk(
  'user/getStudents',
  async (_, { rejectWithValue }) => {
    try {
      const studentQuery = query(
        collection(FIREBASE_DB, 'users'),
        where('designation', '==', 'Student')
      );
      const querySnapshot = await getDocs(studentQuery);

      const students = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const { createdAt, ...rest } = data;
        students.push({ id: doc.id, ...rest });
      });

      return students;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getVFaculties = createAsyncThunk(
  'user/getVFaculties',
  async (_, { rejectWithValue }) => {
    try {
      const vFacultyQuery = query(
        collection(FIREBASE_DB, 'users'),
        where('designation', '==', 'V. Faculty')
      );
      const querySnapshot = await getDocs(vFacultyQuery);

      const vFaculties = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const { createdAt, ...rest } = data;
        vFaculties.push({ id: doc.id, ...rest });
      });

      return vFaculties;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllUsers = createAsyncThunk(
  'user/getAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const usersQuery = query(collection(FIREBASE_DB, 'users'));
      const querySnapshot = await getDocs(usersQuery);

      const users = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const { createdAt, ...rest } = data;
        users.push({ id: doc.id, ...rest });
      });

      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendResetEmail = createAsyncThunk(
  'user/sendResetEmail',
  async (email, { rejectWithValue }) => {
    try {
      const auth = FIREBASE_AUTH;
      await sendPasswordResetEmail(auth, email);
      return 'Password reset email sent successfully';
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'user/addUser',
  async ({ userData }, { rejectWithValue }) => {
    try {
      const defaultProfilePic = 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1721141254~exp=1721141854~hmac=16b7be7a26efb621a8073b1e8204f34be34595f0d723d5c8ae9279435c66a468';

      // Check if profilePic is provided, otherwise use default
      const profilePic = userData.photoURL || defaultProfilePic;

      const userRef = doc(FIREBASE_DB, 'users', userData.uid);
      await setDoc(userRef, {
        ...userData,
        photoURL: profilePic
      });
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addDegreeToUser = createAsyncThunk(
  'user/addDegreeToUser',
  async (degree, { rejectWithValue }) => {
    try {
      const degreesRef = collection(FIREBASE_DB, 'degrees');
      const docRef = await addDoc(degreesRef, degree);
      return { id: docRef.id, ...degree };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserDegrees = createAsyncThunk(
  'user/fetchUserDegrees',
  async (userId, { rejectWithValue }) => {
    try {
      const q = query(collection(FIREBASE_DB, 'degrees'), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      const degrees = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt.toDate().toISOString(), 
          startYear: data.startYear.toDate().getFullYear(), 
          endYear: data.endYear.toDate().getFullYear(), 
        };
      });
      return degrees;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchOnlyUserDegrees = createAsyncThunk(
//   'user/fetchUserDegrees',
//   async (uid, { rejectWithValue }) => {
//     try {
//       const querySnapshot = await getDocs(collection(FIREBASE_DB, 'degrees'));
//       const degrees = querySnapshot.docs
//         .filter(doc => doc.data().userId === uid)
//         .map(doc => ({ id: doc.id, ...doc.data() }));
//       return degrees;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const initialState = {
  userEmail: '',
  uid: '',
  username: '',
  photoURL: '',
  educationQualifications: [],
  birthPlace: '',
  designation: '',
  bio: '',
  loading: false,
  error: '',
  isLoading: false,
  phone: '',
  professors: [],
  students : [],
  degrees : [],
  vFaculties: [],
  allUsers: []  // Add allUsers to the state
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
      state.bio = '';
      state.phone = '';
      degrees =[];
      state.professors = [];
      state.students=[];
      state.vFaculties = [];
      state.allUsers = []; // Clear allUsers
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
        state.bio = action.payload.bio;
        state.phone = action.payload.phone;
        state.userEmail = action.payload.userEmail;
        state.isLoading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.professors = state.professors.filter(professor => professor.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        Object.assign(state, action.payload);
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getProfessors.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.isLoading = true;
      })
      .addCase(getProfessors.fulfilled, (state, action) => {
        state.loading = false;
        state.professors = action.payload;
        state.isLoading = false;
      })
      .addCase(getProfessors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getStudents.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.isLoading = true;
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
        state.isLoading = false;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getVFaculties.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.isLoading = true;
      })
      .addCase(getVFaculties.fulfilled, (state, action) => {
        state.loading = false;
        state.vFaculties = action.payload;
        state.isLoading = false;
      })
      .addCase(getVFaculties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.allUsers = action.payload; // Update state with all users
        state.isLoading = false;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.allUsers = action.payload; // Update state with all users
        state.isLoading = false;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addDegreeToUser.fulfilled, (state, action) => {
        // Optionally handle the new degree in the state if necessary
      })
      .addCase(addDegreeToUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchUserDegrees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserDegrees.fulfilled, (state, action) => {
        state.loading = false;
        state.degrees = action.payload;
      })
      .addCase(fetchUserDegrees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { clearUser, setUser } = userSlice.actions;
export default userSlice.reducer;
