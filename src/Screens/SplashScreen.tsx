import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Props do componente, incluindo a navegação
type RegisterScreenProps = {
  Splash: {name: String}; // Troque `any` pelo tipo específico do seu navegador, se possível
  Onboarding: {name: String}; // Troque `any` pelo tipo específico do seu navegador, se possível      
};

type ProfileScreenProps = NativeStackScreenProps<RegisterScreenProps, "Splash">;

const SplashScreen = ({navigation}: ProfileScreenProps) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Redireciona para a próxima tela (substitua 'Home' pelo nome da sua tela de destino)
      navigation.navigate('Onboarding', { name: 'Screen Onboarding' }); 
    }, 2000); // 1.5 segundos

    return () => clearTimeout(timeout); // Limpa o timeout ao desmontar
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../Assets/Logo.png')} style={styles.logo} />
      <Text style={styles.title}><Text style={styles.med}>Med</Text><Text style={styles.agenda}>Agenda</Text></Text>
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
