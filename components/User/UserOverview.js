import React,{useEffect,useContext} from 'react'
import { FlatGrid } from 'react-native-super-grid';
import User from './User';
import { StyleSheet } from 'react-native';
import {useState } from 'react';
import axios from 'axios';
import { FAB } from 'react-native-elements';
import { View } from 'react-native';
import StoreContext from '../../store';

const UserOverview = () => {
  
  const context = useContext(StoreContext)
  const [users, setUsers] = useState([]);

 const api= "https://dummyjson.com/users"

 useEffect(() => {
  
    axios.get(api).then((resp)=>{
          setUsers(resp.data.users);
        })
    }, []);



    return (
    <View style={styles.container} >
    <FlatGrid
      itemDimension={150}
      data={users}
      style={styles.gridView}
      spacing={10}
      renderItem={({ item }) => (
         <User 
         name={`${item.firstName} ${item.lastName}`} 
         age={item.age} 
         url={item.image}
         user={item}
         />
      )}
    />
     <FAB title="+" size="large" color="tomato" style={styles.fab} />
    </View>
    )
}

export default UserOverview


const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
        paddingLeft:8
      },
      container:{
        flex:1,
        paddingVertical:10
      },
      fab:{
        paddingVertical:10
      }
})