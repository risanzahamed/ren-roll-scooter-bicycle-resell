import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import auth from "../../firebase/firebase.config"

const initialState = {
    user: {email: "", role: ""},
    isLoading: true,
    isError: false,
    error: "",
}

export const createUser = createAsyncThunk("auth/createUser", async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    return data.user.email
})

export const getUser = createAsyncThunk("auth/getUser", async (email) => {
    const res = await fetch(`https://ren-roll-scooter-bicycle-resell-server.vercel.app/user/${email}`)
    const data = await res.json()
    if (data.status) {
        return data
    }
    return email
})

export const signInUser = createAsyncThunk("auth/signInUser", async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password)
    return data.user.email
})

export const signGoogle = createAsyncThunk("auth/signGoogle", async () => {
    const googleProvider = new GoogleAuthProvider(auth)
    const data = await signInWithPopup(auth, googleProvider)
    return data.user.email
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SignOut: (state) => {
            state.user.email = ""
        },
        setUser: (state, action) => {
            state.user.email = action.payload
            state.isLoading = false
        },
        toogleLoading: (state) => {
            state.isLoading = false
        }

    },

    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true
            state.isError = false
            state.error = ""
        }).addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user.email = action.payload
            state.isError = false
            state.error = ""
        }).addCase(createUser.rejected, (state, action) => {
            state.isLoading = false
            state.user.email = ""
            state.isError = true
            state.error = action.error.message
        }).addCase(signInUser.pending, (state) => {
            state.isLoading = true
            state.isError = false
            state.error = ""
        }).addCase(signInUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user.email = action.payload
            state.isError = false
            state.error = ""
        }).addCase(signInUser.rejected, (state, action) => {
            state.isLoading = false
            state.user.email = ""
            state.isError = true
            state.error = action.error.message
        }).addCase(signGoogle.pending, (state) => {
            state.isLoading = true
            state.isError = false
            state.error = ""
        }).addCase(signGoogle.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.user.email = payload
            state.isError = false
            state.error = ""
        }).addCase(signGoogle.rejected, (state, action) => {
            state.isLoading = false
            state.user.email = ""
            state.isError = true
            state.error = action.error.message
        }).addCase(getUser.pending, (state) => {
            state.isLoading = true
            state.isError = false
            state.error = ""
        }).addCase(getUser.fulfilled, (state, { payload }) => {
            state.isLoading = false
            if (payload.status) {
                state.user = payload.data
            } else {
                state.user.email = payload
            }
            state.isError = false
            state.error = ""
        }).addCase(getUser.rejected, (state, action) => {
            state.isLoading = false
            state.user.email = ""
            state.isError = true
            state.error = action.error.message
        })
    }

})

export const { SignOut, setUser, toogleLoading } = authSlice.actions

export default authSlice.reducer