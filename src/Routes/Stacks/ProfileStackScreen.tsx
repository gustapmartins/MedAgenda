import React from "react";
import ProfileParamList from "./ProfileParamList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../Screens/LoginScreen";
import RegisterScreen from "../../Screens/RegisterScreen";
import OnboardingScreen from "../../Screens/OnboardingScreen";
import SplashScreen from "../../Screens/SplashScreen";

const ProfileStack = createNativeStackNavigator<ProfileParamList>();

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <>
        <ProfileStack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <ProfileStack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />

        <ProfileStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <ProfileStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </>
    </ProfileStack.Navigator>
  );
}
