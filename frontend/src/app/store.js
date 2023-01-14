import { configureStore } from '@reduxjs/toolkit'
//Import auth slice
import authReducer from '../features/auth/authSlice'
import sightingReducer from '../features/sightings/sightingSlice'


export const store = configureStore({

    reducer: {
        sightings: sightingReducer,
        auth: authReducer,
    },


})