import React from 'react'
import { StyleSheet,View,Image,Text } from 'react-native';
const UserDetail = () => {
 
    return (
        <View>
            <Image/>
            <Text>First Name: </Text>
            <Text>Last Name: </Text>
            <View>
                Company Details
                <Text>Company Address: </Text>
                <Text>Company Postal Code: </Text>
                <Text>Company State: </Text>
            </View>
        </View>
    )
}

export default UserDetail

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"green"
    }
})