import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";
import { postLogin } from "../api/memberAPI";

export const postLoginThunk = createAsyncThunk('postLoginThunk', (params) => {
    return postLogin(params)
})


const loadCookie = () => {

    const loginObj = getCookie("login")


    console.log("login..............obj..........")
    console.log(loginObj)


    if(!loginObj){
        return initState
    } 

    return loginObj
}

const initState = {
    email:'',
    nickName:'',
    admin:false,
    loading: false,
    errorMsg: null
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: loadCookie(),
    reducers: {
        requestLogin: (state, param) => {
            const payload = param.payload
            console.log("requestLogin", payload)
            const loginObj = {email: payload.email, signed: true}

            setCookie("login", JSON.stringify(loginObj), 1)

            return loginObj
        },
        logout: (state, param) => {
            removeCookie("login")

            return initState
        }

    },
    extraReducers: (builder) => {
        builder.addCase(postLoginThunk.fulfilled, (state,action) => {
            console.log("fulfilled", action.payload)
            const {email,nickName,admin,errorMsg} = action.payload

            if(errorMsg){
                state.errorMsg = errorMsg
                return
            }

            state.loading = false
            state.email = email
            state.nickName = nickName
            state.admin = admin

            setCookie("login", JSON.stringify(action.payload), 1)
        })
        .addCase(postLoginThunk.pending, (state,action) => {
            console.log("pending")
            state.loading = true
        })
        .addCase(postLoginThunk.rejected, (state,action) => {
            console.log("rejected")
        })
    }
})

export const {logout} = loginSlice.actions;

export default loginSlice.reducer