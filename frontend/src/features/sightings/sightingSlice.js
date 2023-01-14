import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import sightingService from './sightingService'

const initialState={
    sightings: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Get all sightings
export const getSightings = createAsyncThunk(
    'sightings/getAll',
    async(thunkAPI) => {
        try{
            return await sightingService.getSightings()
        }catch(error) {
            const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
            return thunkAPI.rejectWithValue(message)
          }
    }
)

export const sightingSlice = createSlice({
    name: 'sightings',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
      //JOHN doing this?
        // .addCase(createSighting.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(createGoal.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.goals.push(action.payload)
        // })
        // .addCase(createGoal.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        // })
        .addCase(getSightings.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getSightings.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.goals = action.payload
        })
        .addCase(getSightings.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        // .addCase(deleteGoal.pending, (state) => {
        //   state.isLoading = true
        // })
        // .addCase(deleteGoal.fulfilled, (state, action) => {
        //   state.isLoading = false
        //   state.isSuccess = true
        //   state.goals = state.goals.filter(
        //     (goal) => goal._id !== action.payload.id
        //   )
        // })
        // .addCase(deleteGoal.rejected, (state, action) => {
        //   state.isLoading = false
        //   state.isError = true
        //   state.message = action.payload
        // })
    },
  })
  
  export const { reset } = sightingSlice.actions
  export default sightingSlice.reducer