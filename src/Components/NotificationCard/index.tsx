import { Text,  View } from "react-native";
import styles from "./styles";

import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../../Hooks/ThemeContext";

export default function NotificationCard({
  message,
  date,
}: {
  message: string;
  date: string;
}) {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Icon name="calendar-month-outline" size={32} color="#b71c1c" />
      <View style={styles.cardText}>
        <Text style={[styles.message, {color: colors.text}]}>{message}</Text>
        <View style={styles.dateRow}>
          <Icon name="calendar-outline" size={16} color={colors.text} />
          <Text style={[styles.date, {color: colors.text}]}>{date}</Text>
        </View>
      </View>
    </View>
  );
}
