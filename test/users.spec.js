import configureStore from "../store/configureStore";
import MockAdapter from "axios-mock-adapter"
import axios from "axios";
import {loadUsers} from "../store/users"
describe("UserSlice", ()=>{
 
    let store;
    let fakeAxios;
    beforeEach(()=>{
        fakeAxios= new MockAdapter(axios)
        store=configureStore();
    })
    const userSlice = ()=> store.getState();
    describe("LoadUser",()=>{
        it("should fetch data",async()=>{
            fakeAxios.onGet("/users").reply(200,{"users":[{id:1}]})
            await  store.dispatch(loadUsers());
            expect(userSlice().list).toHaveLength(1)
        })
   
    })
})
