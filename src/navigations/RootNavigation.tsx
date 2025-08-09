import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainNavigation from "@navigations/MainNavigation";

export type RootStackParamList = {
  Main: {};
};
export type RootNavigationProp = NavigationProp<RootStackParamList, "Main">;

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainNavigation} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
