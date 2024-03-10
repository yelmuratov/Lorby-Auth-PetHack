import {createSlice} from "@reduxjs/toolkit"

export const AuthService = createSlice({
    name:"AuthService",
    initialState:{
        login:false
    },
    reducers:{
        setLogin:(state) => state.login = !state.login
    }
})

export const {setLogin} = AuthService.actions;
export default AuthService.reducer;