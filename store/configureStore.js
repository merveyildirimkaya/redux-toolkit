import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import usersReducer from "./users"
import api from "./api"
export default function(){
    return configureStore({
        reducer: usersReducer,
        middleware:[
            ...getDefaultMiddleware(),
            api
        ]
    })
}