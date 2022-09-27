import * as types from"./actiontype"
const initstate={
    room:[],
    isLoading:false,
    isError:false
}

export const Appreducer=(state=initstate,action)=>{
    const{type,payload}=action
    switch(type){
        case types.GET_ROOM_LOADING:{
            return{
                 ...state,
                 isLoading:true,
                 isError:false
            }
        }
        case types.GET_ROOM_SUCCESS:{
            return{
                ...state,
                room:payload,
                isLoading:false,
                isError:false
            }
        }
        case types.GET_ROOM_ERROR:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default:{return{...state}}
    }
    
}