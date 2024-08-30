import {combineSlices, createSlice} from "@reduxjs/toolkit"

const initialState = {
    selectedModule:null,
    content:null,
    quiz:null,
    selectedTopic:null,
    answer:null,
    coins:null,
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
        },
        setSelectedTopic(state,action){
            state.selectedTopic = action.payload;
        },
        setAnswer(state,action){
            state.answer = action.payload;
        },
        setCoins(state,action){
            state.coins = action.payload;
        }
    }
})

export const {setSelectedModule,setContent,setQuiz,setSelectedTopic,setAnswer,setCoins} = ModuleSlice.actions;
export default ModuleSlice.reducer;