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
        it("should be true while fetching the bugs", () => {
            fakeAxios.onGet("/users").reply(() => {
              return [200, [{ id: 1 }]];
            });
            store.dispatch(loadUsers());
            expect(userSlice().loading).toBe(true);
          });
        it("should fetch data",async()=>{
            fakeAxios.onGet("/users").reply(200,{"users":[{id:1}]})
            await  store.dispatch(loadUsers());
            expect(userSlice().list).toHaveLength(1)
        })
        it("loading indicator",async()=>{
            fakeAxios.onGet("/users").reply(500);
            
            await store.dispatch(loadUsers());

            expect(userSlice().loading).toBe(false)
        })
        
        
    })
})
