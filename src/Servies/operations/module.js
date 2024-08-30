import { moduleEndpoints } from "../apis";

const {MARK_TOPIC_COMPLETED_API,Mark_Module_Completed_API} = moduleEndpoints;

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
