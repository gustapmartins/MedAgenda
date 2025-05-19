// src/Routes/Stacks/MainStackScreen.tsx

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MainParamList } from "../Types/ProfileParamList";

// Telas principais
import HomeScreen from "../../Screens/Home/HomeScreen";

import NotificationsScreen from "../../Screens/Home/NotificationsScreen";
import TermsScreen from "../../Screens/Home/TermsScreen";
import AppointmentScreen from "../../Screens/Home/AppointmentScreen";
import MyAppointmentsScreen from "../../Screens/Home/MyAppointmentsScreen";
import HistoryScreen from "../../Screens/Home/HistoryScreen";
import ConsultationScreen from "../../Screens/Home/ConsultationScreen";
import ProfileScreen from "../../Screens/Home/ProfileScreen";
import SettingsScreen from "../../Screens/Home/SettingsScreen";

// Corrigido aqui
const MainStack = createNativeStackNavigator<MainParamList>();

export default function MainStackScreen() {
  return (
    <MainStack.Navigator
      id={undefined}
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Settings" component={SettingsScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
      <MainStack.Screen name="History" component={HistoryScreen} />
      <MainStack.Screen name="Notifications" component={NotificationsScreen} />
      <MainStack.Screen name="Consultation" component={ConsultationScreen} />
      <MainStack.Screen name="Terms" component={TermsScreen} />
      <MainStack.Screen name="Appointment" component={AppointmentScreen} />
      <MainStack.Screen name="MyAppointments" component={MyAppointmentsScreen} />
    </MainStack.Navigator>
  );
}
