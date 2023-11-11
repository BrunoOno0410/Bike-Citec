import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { LoginForm } from "./screens/login";
import { AccountCreateForm, CreateUser } from "./screens/createUser";
import { HomeScreen } from "./screens/home";
import { AccountPasswordChangeForm } from "./screens/forgotPassword";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="CreateUser" component={AccountCreateForm} />
        <Stack.Screen
          name="ForgotPassword"
          component={AccountPasswordChangeForm}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
