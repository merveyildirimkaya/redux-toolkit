import React,{useEffect} from 'react'
import { FlatGrid } from 'react-native-super-grid';
import User from './User';
import { StyleSheet } from 'react-native';
import { useContext,useState } from 'react';
import { useNavigation } from '@react-navigation/core'
import StoreContext from '../../store';
const UserOverview = () => {

  const context = useContext(StoreContext)
  const {users}= context;

  const [userList, setuserList] = useState(users)

    const navigation = useNavigation();
  

    const navigateToDetails = () => {
        navigation.navigate("Details")
    }

    return (
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
         onPress={()=>navigateToDetails()}
         />
      )}
    />
    )
}

export default UserOverview


const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
      },
})