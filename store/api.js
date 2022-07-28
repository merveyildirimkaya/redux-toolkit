import axios from "axios";
import * as actions from "./apiActions"

const baseURL= "https://dummyjson.com"
// {dispatch, getState} veya state
const api = ({dispatch}) => next =>async action =>{
    if(action.type!==actions.apiCallBegan.type){
        return next(action)
    }
    const {url,onStart,onSuccess,onError}=action.payload;

    if(onStart){dispatch({type:onStart}); next(action)}
    try {
      axios.request({
            baseURL,
            url,
        }).then((resp)=>{ if(onSuccess) dispatch({type:onSuccess, payload:resp.data.users})})
    } catch (error) {
        if(onError) dispatch({type:onError, payload: error.message})
    }
}
export default api;