import React from 'react'
import { StyleSheet,TouchableHighlight,Text,View } from 'react-native'
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons"
const MyButton = (props) => {
    return (
        <TouchableHighlight {...props} style={{...styles.btn, ...props.styleButton}}>
            <View style={styles.container}>
            <Text>
                <MCIcons name={props.icon} 
                style={{...styles.icon, ...props.styleText}}/>
            </Text>
            <Text style={{...styles.text, ...props.styleText}}>
                {props.title}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default MyButton

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    btn:{
        backgroundColor:"blue",
        borderRadius:10,
        alignItems:"center",
        padding:10
    },
    text:{
        fontSize:18,
    },
    icon:{
        fontSize:25,
        color:"white"
    }
})