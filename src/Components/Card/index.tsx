import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

interface CardButtonProps {
  icon: string;
  label: string;
  onPress: () => void;
}

export const CardButton = ({ icon, label, onPress }: CardButtonProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Icon name={icon} size={42} color="#a12828" />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};