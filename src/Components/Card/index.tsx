import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { useTheme } from "../../Hooks/ThemeContext";

interface CardButtonProps {
  icon: string;
  label: string;
  onPress: () => void;
}

export const CardButton = ({ icon, label, onPress }: CardButtonProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={[styles.card,{ backgroundColor: colors.card }]} onPress={onPress}>
      <Icon name={icon} size={42} color="#a12828" />
      <Text style={[styles.label, {color: colors.text}] }>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
