import { StatusBar } from 'expo-status-bar';
import { StyleSheet,LogBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserOverview from './components/User/UserOverview';
import UserDetail from './components/User/UserDetail';
import StoreContext from './store';
import axios from 'axios';
import { useState,useEffect } from 'react';
const Stack = createNativeStackNavigator();

export default function App() {

  LogBox.ignoreLogs(['Remote debugger']);

  const api= "https://dummyjson.com/users"


    
  return (
  
    <StoreContext.Provider>
    <NavigationContainer>   
        <Stack.Navigator>
          <Stack.Screen
          name="Users"
          component={UserOverview}
          options={{ title: 'Users' }}
        />
        <Stack.Screen
          name="Details"
          component={UserDetail}
        />
       </Stack.Navigator>
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
