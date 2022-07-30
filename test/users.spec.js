import configureStore from "../store/configureStore";
import MockAdapter from "axios-mock-adapter"
import axios from "axios";
import {loadUsers, userAdded} from "../store/users"
describe("UserSlice", ()=>{
    
    let store;
    let fakeAxios;
    beforeEach(()=>{
        fakeAxios= new MockAdapter(axios)
        store=configureStore();
    })
    const userSlice = ()=> store.getState();
    const lastIndex = ()=> userSlice().list.length-1;
    describe("UserSlice",()=>{
        describe("loadUser() functionality",()=>{
            it("should fetch data",async()=>{
                fakeAxios.onGet("/users").reply(200,{"users":[{id:1}]})
                await  store.dispatch(loadUsers());
                expect(userSlice().list).toHaveLength(1)
            })
            describe("loading indicator",()=>{
                it("should be false if data could not be fetched!",async()=>{
                    fakeAxios.onGet("/users").reply(500);
                    
                    await store.dispatch(loadUsers());
        
                    expect(userSlice().loading).toBe(false)
                })
                it("should be true while fetching the bugs", () => {
                    fakeAxios.onGet("/users").reply(() => {
                      return [200, [{ id: 1 }]];
                    });
                    store.dispatch(loadUsers());
                    expect(userSlice().loading).toBe(true);
                });
                it("should be false after fetching the bugs", async() => {
                    fakeAxios.onGet("/users").reply(() => {
                      return [200, [{ id: 1 }]];
                    });
                    await store.dispatch(loadUsers());
                    expect(userSlice().loading).toBe(false);
                });
            })
        })
        describe("addUser() functionality",()=>{
            it("user should be added",()=>{
    
                store.dispatch(userAdded({ id: 1,firstName:"john" }))
                
                expect(userSlice().list[lastIndex()].id).toBe(1)
            })
        })
    })
   
})
