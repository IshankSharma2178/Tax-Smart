import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    selectedModule:null,
    content:null,
    quiz:null,
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
        },
        setQuiz(state,action){
            state.quiz = action.payload;
        }
    }
})

export const {setSelectedModule,setContent,setQuiz} = ModuleSlice.actions;
export default ModuleSlice.reducer;