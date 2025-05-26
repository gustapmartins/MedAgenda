// src/Routes/app.routes.tsx

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthStackScreen from "./Stacks/AuthStackScreen";
import MainStackScreen from "./Stacks/MainStackScreen";
import LoadingScreen from "../Components/Loading";
import { useAuth } from "../Hooks/AuthContext";

export function AppRoutes() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn === null) {
    return <LoadingScreen />; // Exibe uma tela temporária de loading
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}
