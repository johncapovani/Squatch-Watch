//Doesn't need any TS
import { configureStore } from '@reduxjs/toolkit'
//Import auth slice
import authReducer from '../features/auth/authSlice'
import sightingsReducer from '../features/sightings/sightingSlice'

export const store = configureStore({

    reducer: {
        
        auth: authReducer,
        sightings: sightingsReducer

    },


})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch