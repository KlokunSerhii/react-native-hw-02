import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "./Screens/PostsScreen";
import RegistrationScreen from "./Components/RegistrationScreen";
import LoginScreen from "./Components/LoginScreen";

const Stack = createStackNavigator(); 

export default function App() {
  return (
        <NavigationContainer>  
          <Stack.Navigator initialRouteName="Login">   
            <Stack.Screen name="Login" component={LoginScreen}/>  
            <Stack.Screen name="Registration" component={RegistrationScreen}/>
            <Stack.Screen name="Post" component={PostsScreen}/>     
          </Stack.Navigator>        
        </NavigationContainer>
  );
}


