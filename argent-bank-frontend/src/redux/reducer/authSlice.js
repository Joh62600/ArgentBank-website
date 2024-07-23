import { createSlice } from "@reduxjs/toolkit";

// Vérifie si le token et le userName sont présents dans LocalStorage
const checkToken = () => localStorage.getItem("authToken") || null;
const checkUserName = () => localStorage.getItem("userName") || "";

const initialState = {
   token: checkToken(), // Init token avec valeur checkToken()
   userName: checkUserName(), // Init userName avec valeur checkUserName()
   isAuthenticated: !!checkToken(), // Init par défaut
};

// Création slice authentification avec nom + état initial + réducteurs
const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setSignIn(state, action) {
         state.token = action.payload.token;
         state.userName = action.payload.userName;
         state.isAuthenticated = true;
         localStorage.setItem("authToken", state.token);
         localStorage.setItem("userName", state.userName);
      },
      setSignOut(state) {
         state.token = null;
         state.userName = "";
         state.isAuthenticated = false;
         localStorage.removeItem("authToken");
         localStorage.removeItem("userName");
      },
   },
});

export const { setSignIn, setSignOut } = authSlice.actions;
export default authSlice.reducer;
