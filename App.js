import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { LoginForm } from "./screens/login";
import { AccountCreateForm, CreateUser } from "./screens/createUser";
import { HomeScreen } from "./screens/home";
import {
  AccountPasswordChangeForm,
  ForgotPassword,
} from "./screens/forgotPassword";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

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
