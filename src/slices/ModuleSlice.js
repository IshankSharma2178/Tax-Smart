import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    selectedModule:null,
    content:null,
}

const ModuleSlice =createSlice({
    name:"module",
    initialState :initialState,
    reducers:{
        setSelectedModule(state,action){
            state.selectedModule = action.payload;
        },
        setContent(state,action){
            state.content = action.payload;
        }
    }
})

export const {setSelectedModule,setContent} = ModuleSlice.actions;
export default ModuleSlice.reducer;