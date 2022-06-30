import React from 'react'
import { View,Image,Text ,StyleSheet } from 'react-native'

const User = (props) => {
    return (
        <View style={styles.userCard} onPress={()=> props.onPress()}>
             <Image source={{uri: props.url}} style={styles.image}/>
            <View style={styles.buttomInfo}>
            <Text>{props.name}</Text>
            <Text>{props.age} </Text>
            </View>
        </View>
    )
}

export default User

const styles = StyleSheet.create({
    buttomInfo:{
        flexDirection:"row",
       justifyContent:"space-evenly"
    },
    userCard:{
        width:150,
        height:150,
        backgroundColor:'tomato',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:100,
        height:100,
    }
})