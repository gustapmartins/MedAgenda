// src/Routes/app.routes.tsx

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStackScreen from './Stacks/AuthStackScreen';
import MainStackScreen from './Stacks/MainStackScreen';
import LoadingScreen from '../Components/Loading';


export function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(true);

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem('userToken');
  //       setIsLoggedIn(!!token);
  //     } catch (error) {
  //       console.error('Erro ao verificar token:', error);
  //       setIsLoggedIn(false);
  //     }
  //   };
  //   checkLoginStatus();
  // }, []);

  if (isLoggedIn === null) {
    return <LoadingScreen />; // Exibe uma tela temporária de loading
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}
