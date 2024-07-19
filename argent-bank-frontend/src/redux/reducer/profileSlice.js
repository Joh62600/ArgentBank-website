import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action asynchrone pour mettre à jour le nom d'utilisateur
export const updateUserNameAPI = createAsyncThunk(
  "user/updateUserNameAPI",
  async (newUserName, { getState }) => {
    const state = getState();
    const authToken = state.auth.token;
    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      { userName: newUserName },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data.body.userName;
  }
);

const profileSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    accounts: [
      { id: '1', title: 'Argent Bank Checking (x8349)', content: '$2,082.79', subtitle: 'Available Balance' },
      { id: '2', title: 'Argent Bank Savings (x6712)', content: '$10,928.42', subtitle: 'Available Balance' },
      { id: '3', title: 'Argent Bank Credit Card (x8349)', content: '$184.30', subtitle: 'Current Balance' }
    ]
  },
  reducers: {
    setProfile: (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
      state.userName = action.payload.body.userName;
      state.email = action.payload.body.email;
      state.accounts = action.payload.body.accounts || state.accounts; // mise à jour des comptes si fournis
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUserNameAPI.fulfilled, (state, action) => {
      state.userName = action.payload;
    });
  },
});

export const { setProfile, updateUserName } = profileSlice.actions;
export default profileSlice.reducer;
