import { configureStore } from '@reduxjs/toolkit'
//Import auth slice
import authReducer from '../features/auth/authSlice'


export const store = configureStore({

    reducer: {

        auth: authReducer,

    },


})