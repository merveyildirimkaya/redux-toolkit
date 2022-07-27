import React,{useEffect} from 'react'
import { FlatGrid } from 'react-native-super-grid';
import User from './User';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-elements';
import { View } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { loadUsers } from '../../store/users';

const UserOverview = () => {

const dispatch = useDispatch()
const users= useSelector(state=>state.list)

  useEffect(() => {
    dispatch(loadUsers())
  }, [])

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