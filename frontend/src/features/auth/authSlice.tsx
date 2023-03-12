import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import authService from './authService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

interface AuthCounterState {
    user:unknown,
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: string
}

const initialState: AuthCounterState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Register user
export const register = createAsyncThunk(
    'auth/register',
    async (user:any, thunkAPI:any):Promise<any> => {
        try {
            return await authService.register(user)
        } catch (error:any) {
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

// Login user
export const login = createAsyncThunk('auth/login', async (user:any, thunkAPI:any):Promise<any> => {
    try {
        return await authService.login(user)
    } catch (error:any) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('auth/logout', async ():Promise<any> => {
    await authService.logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder:any):void => {
        builder
            .addCase(register.pending, (state:any):void => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state:any, action:PayloadAction<boolean|unknown>):void => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state:any, action:PayloadAction<boolean|unknown>):void => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(login.pending, (state:any):void => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state:any, action:PayloadAction<boolean|unknown>):void => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state:any, action:PayloadAction<boolean|unknown>):void => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state:any):void => {
                state.user = null
            })
    },
})

export const { reset } = authSlice.actions
export default authSlice.reducer