import { configureStore } from "@reduxjs/toolkit"
import { default as authReducer } from "./reducer/authSlice"
import { default as profileReducer } from "./reducer/profileSlice"

//* Config store Redux avec import reducteurs
const store = configureStore({
   reducer: {
      auth: authReducer,
      user: profileReducer,
   },
})

export default store
