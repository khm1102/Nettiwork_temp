import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "@navigations/RootNavigation";

function NavigationController() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default NavigationController;
