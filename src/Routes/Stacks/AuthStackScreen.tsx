// src/Routes/Stacks/AuthStackScreen.tsx

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthParamList } from '../Types/ProfileParamList';

// Telas
import SplashScreen from "../../Screens/Auth/SplashScreen";
import OnboardingScreen from "../../Screens/Auth/OnboardingScreen";
import LoginScreen from "../../Screens/Auth/LoginScreen";
import RegisterScreen from "../../Screens/Auth/RegisterScreen";


// Corrigido aqui!
const AuthStack = createNativeStackNavigator<AuthParamList>();

export default function AuthStackScreen() {
  return (
    <AuthStack.Navigator
      id={undefined}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="Splash" component={SplashScreen} />
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}