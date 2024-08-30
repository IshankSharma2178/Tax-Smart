import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    loading:false,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    token : localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,          // localstorage m token save rahega agr app browser close bhi kr de toh
    paymentLoading:false
}

const authSlice =createSlice({
    name:"auth",
    initialState :initialState,
    reducers:{
        setToken(state,action){
            state.token = action.payload;
        },
        setLoading(state,action){
            state.loading = action.payload;
        },
        setUser(state,action){
            state.user = action.payload;
        },
        setPaymentLoading(state,action){
            state.paymentLoading = action.payload;
        }
    }
})

export const {setToken , setLoading , setUser,setPaymentLoading} = authSlice.actions;
export default authSlice.reducer;