import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  Splash: { name: string };
  Onboarding: { name: string };
  Home: undefined;
};

type SplashProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen = ({ navigation }: SplashProps) => {
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');

        if (token) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Onboarding', params: { name: 'Onboarding' } }],
          });
        }
      } catch (error) {
        console.error('Erro ao verificar login:', error);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Onboarding', params: { name: 'Onboarding' } }],
        });
      }
    };

    setTimeout(checkLogin, 1500); // Pequeno delay para exibir splash
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../Assets/Logo.png')} style={styles.logo} />
      <Text style={styles.title}>
        <Text style={styles.med}>Med</Text>
        <Text style={styles.agenda}>Agenda</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 250,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    fontSize: 46,
    fontWeight: 'bold',
    marginTop: 20,
  },

  med: {
    color: '#E53935',
  },

  agenda: {
    color: '#777572',
  }
});

export default SplashScreen;
