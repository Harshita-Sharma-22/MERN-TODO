import {createSlice, configureStore } from "@redux.js/toolkit"
const authSlice = createSlice({
    name: "",
    initialState: {user: "", isLoggedIn: false},
    reducers: {
        login(state){
            state.isLoggedIn = true
        },
        login(state){
            state.isLoggedIn = false
        }
    }
})

export const authAxtions = authSlice.actions

export const Store = configureStore({
    reducer: authSlice.reducer,
})