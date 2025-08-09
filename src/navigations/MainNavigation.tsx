import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/Main/HomeScreen";
import GroupCallScreen from "@screens/Main/GroupCallScreen";
import LoginScreen from "@screens/Main/LoginScreen";

export type MainStackParamList = {
  Login: {};

  Home: {};
  GroupCall: {};
};
export type MainNavigationProp = NavigationProp<MainStackParamList>;

const Stack = createNativeStackNavigator<MainStackParamList>();

function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Home"}
    >
      <Stack.Group>
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GroupCall" component={GroupCallScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default MainNavigation;
