import * as types from "./actiontype"
import axios from "axios"
export const getroom=()=>(dispatch)=>{
    dispatch({type:types.GET_ROOM_LOADING})
   axios.post(`https://userdatajson.herokuapp.com/Room`)
   .then((d)=>dispatch({type:types.GET_ROOM_SUCCESS,payload:d.data}))
   .catch((er)=>dispatch({type:types.GET_ROOM_ERROR(er)}))

}