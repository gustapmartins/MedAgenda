import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import styles from './styles';


type TypeProps = {
  onPress: () => void;
};


export default function Header({onPress}: TypeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.iconCircle}>
          <MaterialIcons name="calendar-today" size={24} color="white" />
        </View>
        <Text style={styles.logoText}>
          <Text style={styles.logoMed}>Med</Text>
          <Text style={styles.logoAgenda}>Agenda</Text>
        </Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Feather name="bell" size={32} color="#333" />
      </TouchableOpacity>
    </View>
  );
}