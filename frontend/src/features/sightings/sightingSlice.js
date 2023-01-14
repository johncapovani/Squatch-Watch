import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import sightingService from './sightingService'

const initialState = {
  sightings: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

//Get all sightings
export const getSightings = createAsyncThunk(
  'sightings/getAll',
  async (thunkAPI) => {
    try {
      return await sightingService.getSightings()
    } catch (error) {
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

//Create new Sighting

export const createSighting = createAsyncThunk(
  'sightings/create',

  async (sightingData, thunkAPI) => {

    try {
      //Get JSON Token user must be authenticated
      const token = thunkAPI.getState().auth.user.token
      return await sightingService.createSighting(sightingData, token)
    } catch (error) {
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

export const sightingsSlice = createSlice({
  name: 'sightings',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(createSighting.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createSighting.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sightings = action.payload
      })
      .addCase(createSighting.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
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

export const { reset } = sightingsSlice.actions
export default sightingsSlice.reducer