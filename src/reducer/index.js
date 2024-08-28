import {combineReducers} from "@reduxjs/toolkit"
import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice"
import moduleReducer from "../slices/ModuleSlice"

const rootReducer = combineReducers({
    auth :  authReducer,
    profile:profileReducer,
    module:moduleReducer
})

export default rootReducer