import React ,{useState}from 'react'
import { Modal ,Alert, TextInput,Text,View,StyleSheet} from 'react-native'
import MyButton from '../common/MyButton'
import Spacer from '../common/Spacer'
import { useDispatch } from 'react-redux'
import { userAdded } from '../../store/users'
const AddUser = (props) => {

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        firstName: "",
        lastName:"",
        age:"",
        image:"",
    })
    const {modalVisible,setModalVisible,users}= props;

    const ekle=()=>{
        if(!user.firstName || !user.lastName || !user.age || !user.image ){
            Alert.alert("Attention", "Please fill all the blanks",[
                {text:"OK",onPress: ()=> console.log("OK Pressed ")}
            ])
            return
        }
        dispatch(userAdded(user))
        setUser("");
        setModalVisible(false);
    }
    return (
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={()=>{
            setModalVisible(false);
        }}
        >
            <View style={styles.container}>
            <Text>New User</Text>
            <Spacer/>
            <TextInput
            style={styles.input}
            onChangeText={(text)=>(setUser({...user,firstName:text}))}
            value={user.firstName}
            placeholder="Enter the firstname."
            />
            <Spacer/>
            <TextInput
            style={styles.input}
            onChangeText={(text)=>(setUser({...user,lastName:text}))}
            value={user.lastName}
            placeholder="Enter the lastname."
            />
               <Spacer/>
              <TextInput
            style={styles.input}
            onChangeText={(text)=>(setUser({...user,age:text}))}
            value={user.age}
            placeholder="Enter the age."
            />
               <Spacer/>
              <TextInput
            style={styles.input}
            onChangeText={(text)=>(setUser({...user,image:text}))}
            value={user.image}
            placeholder="Enter the image url."
            />
            <Spacer/>
            <MyButton 
            title="Ekle"
            styleText={{color:"white"}}
            icon="plus" 
            styleButton={{backgroundColor:"red"}} 
            onPress={ekle}/>
            </View>
        </Modal>
    )
}

export default AddUser

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderBottomColor:"#cecece",
        padding:5
    },
    container:{
        backgroundColor:"white",
        borderWidth:1,
        borderTopEndRadius:10,
        padding:20,
        margin:20
    }
    
})