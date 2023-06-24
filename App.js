import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./Components/RegistrationScreen";
import LoginScreen from "./Components/LoginScreen";
import Home from "./Screens/Home";
import PostsScreen from "./Screens/PostsScreen";
import MapScreen from "./Screens/MapScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const useRoute = (isLogin) => {
  if (!isLogin) {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default function App() {
  const routing = useRoute(false);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
