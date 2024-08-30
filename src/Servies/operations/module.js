import { apiConnector } from "../apiconnector";
import { moduleEndpoints } from "../apis";


const {MARK_TOPIC_COMPLETED_API,Mark_Module_Completed_API,MARK_QUIZ_COMPLETED_API,SET_COMPLETED_QUEST_API,GET_COINS_API,UPDATE_COINS_API,GET_UNCOMPLETED_MODULE_API,GET_COMPLETED_MODULE_API} = moduleEndpoints;

export async function markCompletedModule({email,module}){
    try{
        
        const response = await apiConnector("POST", Mark_Module_Completed_API, {module,email});
        console.log("Mark_Module_Completed_API RESPONSE............", response)

    }catch(error){
        console.log("Mark_Module_Completed_API ERROR............", error)
    }
}

export async function markCompletedTopic({email,topic,module}){
    try{
        
        const response = await apiConnector("POST", MARK_TOPIC_COMPLETED_API, {module,topic,email});
        console.log("MARK_TOPIC_COMPLETED_API RESPONSE............", response)

    }catch(error){
        console.log("MARK_TOPIC_COMPLETED_API ERROR............", error)
    }
}

export async function markQuizCompleted({email,topic,module}){
    try{
        
        const response = await apiConnector("POST", MARK_QUIZ_COMPLETED_API, {module,topic,email});
        console.log("MARK_TOPIC_COMPLETED_API RESPONSE............", response)

    }catch(error){
        console.log("MARK_TOPIC_COMPLETED_API ERROR............", error)
    }
}

export async function setCompletedQuestions({email,topic,module,completedQuestions}){
    console.log("api  : ",email,topic,module,completedQuestions)
    try{
        
        const response = await apiConnector("POST", SET_COMPLETED_QUEST_API, {module,topic,email,completedQuestions});
        console.log("MARK_TOPIC_COMPLETED_API RESPONSE............", response)

    }catch(error){
        console.log("MARK_TOPIC_COMPLETED_API ERROR............", error)
    }
}

export async function getUncompletedModules({email}){
    try{
        
        const response = await apiConnector("POST", GET_UNCOMPLETED_MODULE_API, {email});
        console.log("MARK_TOPIC_COMPLETED_API RESPONSE............", response)

    }catch(error){
        console.log("MARK_TOPIC_COMPLETED_API ERROR............", error)
    }
}

export async function getCompletedQuestions ({email,topic,module}){
    try{
        console.log(email,topic,module)
        const response = await apiConnector("POST", GET_COMPLETED_MODULE_API, {email,topic,module});
        console.log("MARK_TOPIC_COMPLETED_API RESPONSE............", response)

        return response.data.completedQuestions;

    }catch(error){
        console.log("MARK_TOPIC_COMPLETED_API ERROR............", error)
    }
}

export async function updateCoins ({email,questions}){
    try{
        const response = await apiConnector("POST", UPDATE_COINS_API, {email,questions});
        console.log("UPDATE_COINS_API_ RESPONSE............", response)

        return response.data.completedQuestions;

    }catch(error){
        console.log("MUPDATE_COINS_API_ ERROR............", error)
    }
}


export async function getCoins (email){
    try{
        const response = await apiConnector("POST", GET_COINS_API, {email});
        console.log("GET_COINS_API_ RESPONSE............", response)

        return response.data.coins;

    }catch(error){
        console.log("GET_COINS_API_ ERROR............", error)
    }
}