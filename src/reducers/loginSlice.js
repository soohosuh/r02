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
        requestLogin: (state, action) => {
            const payload = action.payload

            console.log("requestLogin", payload)

            //const loginObj = {email: payload.email, signed: true}

            setCookie("login", JSON.stringify(payload), 1)

            return payload
        },
        logout: (state) => {
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
                state.loading = false
                return
            }

            // state.loading = false
            // state.email = email
            // state.nickName = nickName
            // state.admin = admin

            state = action.payload

            setCookie("login", JSON.stringify(action.payload), 1)

            return {...action.payload, loading: false}
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

export const {requestLogin} = loginSlice.actions
export const {logout} = loginSlice.actions

export default loginSlice.reducer