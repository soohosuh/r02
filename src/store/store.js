import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../reducers/countSlice";
import todoSlice from "../reducers/todoSlice";
import loginSlice from "../reducers/loginSlice";
import cartSlice from "../reducers/cartSlice";

// 이 함수의 결과물이 store
export default configureStore({
    reducer : { 
        counter: countSlice,
        todo: todoSlice,
        login: loginSlice,
        cart: cartSlice
    }
})
