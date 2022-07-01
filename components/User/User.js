import React from 'react'
import { View,Image,Text ,StyleSheet,TouchableOpacity } from 'react-native'
import {useNavigation } from '@react-navigation/core'

const User = (props) => {

    const navigation = useNavigation();
    const goToDetail= (a)=>{
        navigation.navigate('Details',{ user: a })
    }

    return (
        <TouchableOpacity onPress={()=>goToDetail(props.user)}>
        <View style={styles.userCard} >
             <Image source={{uri: props.url}} style={styles.image}/>
            <View style={styles.buttomInfo}>
            <Text>{props.name}</Text>
            <Text>{props.age} </Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default User

const styles = StyleSheet.create({
    buttomInfo:{
       flexDirection:"row",
       width:175,
       justifyContent:"space-evenly",
       paddingTop:10
    },
    userCard:{
        width:175,
        height:175,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:100,
        height:100,
    }
})