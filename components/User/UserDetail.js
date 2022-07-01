import React from 'react'
import { View ,StyleSheet,Text,Image} from 'react-native'

const UserDetail = ({ route } ) => {

    const user =route.params.user;
    return (
        <View style={styles.container}>
            <Image source={{uri: user.image}} style={styles.image}/>
            <Text>First Name : {user.firstName}</Text>
            <Text>Last Name : {user.lastName}</Text>
            <Text>Age: {user.firstName}</Text>
            <Text>-------------- Company Details ------------------ </Text>
            <Text>Company address: {user.company.address.address}</Text>
            <Text>Company address: {user.company.address.postalCode}</Text>
            <Text>Company address: {user.company.address.state}</Text>
            
        </View>
    )
}

export default UserDetail

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"tomato",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        width:300,
        height:300
    }
})