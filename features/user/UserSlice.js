import { createSlice,current } from '@reduxjs/toolkit'
import axios from 'axios';

const api= "https://dummyjson.com/users"


export const userSlice = createSlice({
  name: 'users',
  initialState: {
    value: [],
  },
  reducers: {
    setUserList:(state) => {
          axios.get(api).then((resp)=>{
            state.value=resp.data.users
          })
          
          .catch((error)=>{
            console.log("Api call error");
            alert(error.message);
         });
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserList} = userSlice.actions

export default userSlice.reducer