import { createSlice } from "@reduxjs/toolkit"

//Vérifie si le token auth présent dans LocalStorage
const checkToken = () => {
   
   return localStorage.getItem("authToken") || null
}

// Etat initial slice auth
const initialState = {
   token: checkToken(), // Init token avec valeur checkToken()
   isAuthenticated: false, // Init par défaut
}

// Création slice authentification avec nom + état initial + réducteurs
const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      // màj état pour connexion réussie
      setSignIn(state, action) {
         state.token = action.payload.token // màj token
         
         state.isAuthenticated = true
         localStorage.getItem("localStorage authToken", state.token)
      },
      // màj état pour déconnexion
      setSignOut(state) {
         state.token = null // Réinit token
         state.isAuthenticated = false
         localStorage.removeItem("authToken")
      },
   },
})

export const { setSignIn, setSignOut } = authSlice.actions
export default authSlice.reducer
