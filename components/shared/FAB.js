import React from 'react'
import { TouchableHighlight, Text ,StyleSheet} from 'react-native'
import MCIcons from "react-native-vector-icons/MaterialCommunityIcons"
const FAB = (props) => {
    return (
  
            <TouchableHighlight {...props} style={{...styles.button, ...props.buttonStyle}}>
                <Text >
                    <MCIcons name={props.icon} style={{...styles.text, ...props.textStyle}}/>
                </Text>

            </TouchableHighlight>
   
    )
}

export default FAB

const styles = StyleSheet.create({
    button:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
        shadowColor:"black",
        elevation:5,
        shadowOffset:{
            width:5,
            height:5,
        },
        shadowRadius:5,
        position:"absolute",
        right:10,
        bottom:10
    },
    text:{
        fontSize:30,
        color:"#ececec"
    }
})