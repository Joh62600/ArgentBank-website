import { createSlice } from "@reduxjs/toolkit"

//* Création slice 'user'
const profileSlice = createSlice({
   name: "user",

   //* État initial slice avec champs user
   initialState: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
   },

   //* définition actions reducers
   reducers: {
      // Action => màj valeurs dans champs profil user
      setProfile: (state, action) => {
         state.firstName = action.payload.body.firstName
         state.lastName = action.payload.body.lastName
         state.userName = action.payload.body.userName
         state.email = action.payload.body.email
      },
      // Action => màj valeur champ 'userName'
      updateUserName: (state, action) => {
         state.userName = action.payload
      },
   },
})

export const { setProfile, updateUserName } = profileSlice.actions
export default profileSlice.reducer
