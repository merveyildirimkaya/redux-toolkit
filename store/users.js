import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./apiActions";

export const users = createSlice({
    name:"users",
    initialState:{
        loading:false,
        list:[]
    },
    reducers:{
        usersRequested:(users,action)=>{
            users.loading=true;
        },
        usersReceived:(users,action)=>{
            users.list=action.payload;
            users.loading=false
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
        onStart: usersRequested.type,
        onSuccess: usersReceived.type,
        onError: usersRequestFailed.type
    }))
}
export const {usersReceived,usersRequested,usersRequestFailed, userAdded} = users.actions
export default users.reducer;
//usersReceived({payload is here})