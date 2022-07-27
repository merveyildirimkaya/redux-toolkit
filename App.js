
import { StyleSheet,LogBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserOverview from './components/User/UserOverview';
import UserDetail from './components/User/UserDetail';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'


const Stack = createNativeStackNavigator();

const store = configureStore();

export default function App() {

  LogBox.ignoreLogs(['Remote debugger']);

    
  return (
  
    <Provider store={store}>
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
    </Provider>

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
