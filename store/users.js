import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./apiActions";

export const users = createSlice({
    name:"users",
    initialState:{
        loading:false,
        list:[],
    },
    reducers:{
        usersRequested:(users)=>{
            users.loading=true;
           // console.log(users.loading)
        },
        usersReceived:(users,action)=>{
            users.list=action.payload;
            users.loading=false
            //console.log(users.loading)
        },
        usersRequestFailed:(users,action)=>{
            users.loading=false
        },
        userAdded:(users,action)=>{
            users.list.push(action.payload)
        }
    }
})

export const loadUsers=()=>(dispatch, getState)=>{
    return dispatch(apiCallBegan({
        url:"/users",
        onStart: usersRequested.type,
        onSuccess: usersReceived.type,
        onError: usersRequestFailed.type
    }))
}
export const {usersReceived,usersRequested,usersRequestFailed, userAdded} = users.actions
export default users.reducer;
//usersReceived({payload is here})