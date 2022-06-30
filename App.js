import { StatusBar } from 'expo-status-bar';
import { StyleSheet,LogBox} from 'react-native';
import UserPage from './views/UserPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserDetail from './components/User/UserDetail';
import StoreContext from './store';
import axios from 'axios';
import { useState,useEffect } from 'react';
const Stack = createNativeStackNavigator();

export default function App() {

  LogBox.ignoreLogs(['Remote debugger']);

  const api= "https://dummyjson.com/users"
  const [users, setUsers] = useState([]);


  useEffect(() => {

  axios.get(api).then((resp)=>{
        setUsers(resp.data.users);
      })
  }, []);

  return (
    <StoreContext.Provider value={users}> 
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Users"
          component={UserPage}
          options={{ title: 'Users' }}
        />
      </Stack.Navigator>
      <Stack.Screen name="Details" 
      component={UserDetail} />
      <StatusBar style="auto" />
    </NavigationContainer>
    </StoreContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
