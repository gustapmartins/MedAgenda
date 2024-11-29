import { NavigationContainer } from "@react-navigation/native";
import ProfileStackScreen from "./Stacks/ProfileStackScreen";
import React from "react";

export function AppRoutes() {
  return (
    <NavigationContainer>
      <ProfileStackScreen/>
    </NavigationContainer >
  );
}