import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// base URL
const apiUrl = 'http://localhost:3000';

// Fetch all users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`${apiUrl}/users`);
  return response.data;
});

// Create a new user
export const createUser = createAsyncThunk('users/createUser', async (user) => {
  const response = await axios.post(`${apiUrl}/users`, user);
  return response.data;
});

// Fetch a single user by ID
export const fetchUserById = createAsyncThunk('users/fetchUserById', async (userId) => {
  const response = await axios.get(`${apiUrl}/users/${userId}`);
  return response.data;
});

// Update a user
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ userId, user }) => {
    const response = await axios.put(`${apiUrl}/users/${userId}`, user);
    return response.data;
  }
);

// Delete a user
export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userId) => {
    await axios.delete(`${apiUrl}/users/${userId}`);
    return userId;
  }
);

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.loading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const updatedUsers = state.users.map((user) =>
          user._id === updatedUser._id ? updatedUser : user
        );
        state.users = updatedUsers;
        state.loading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const userId = action.payload;
        state.users = state.users.filter((user) => user._id !== userId);
        state.loading = false;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        const fetchedUser = action.payload;
        const existingUser = state.users.find((user) => user._id === fetchedUser._id);
        if (existingUser) {
          Object.assign(existingUser, fetchedUser);
        } else {
          state.users.push(fetchedUser);
        }
        state.loading = false;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUsers = (state) => state.user.users;
export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;
export const selectUserById = (state, userId) => state.user.users.find((user) => user._id === userId);

export default userSlice.reducer;
