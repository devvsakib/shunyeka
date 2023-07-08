import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// base URL
const apiUrl = 'http://localhost:3000';

// Fetch all users from the backend API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(`${apiUrl}/users`);
  return response.data;
});

// Create a new user in the backend API
export const createUser = createAsyncThunk('users/createUser', async (user) => {
  const response = await axios.post(`${apiUrl}/users`, user);
  return response.data;
});

// Update a user in the backend API
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ userId, user }) => {
    const response = await axios.put(`${apiUrl}/users/${userId}`, user);
    return response.data;
  }
);

// Delete a user from the backend API
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
        const { userId, user } = action.payload;
        const index = state.users.findIndex((u) => u._id === userId);
        if (index !== -1) {
          state.users[index] = user;
        }
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
      });
  },
});

export const selectUsers = (state) => state.user.users;
export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
