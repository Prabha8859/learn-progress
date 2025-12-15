import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const handleApiError = (error) => {
  // Return a consistent error message format
  return error.response?.data?.message || error.message || "An unknown error occurred";
};

// REGISTER
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

// LOGIN
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", data);
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    message: "",
    error: null,
  },
  reducers: {
    clearState: (state) => {
      state.message = "";
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.message = "";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.message = "";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      });
  },
});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;
