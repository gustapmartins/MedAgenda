import { Text,  View } from "react-native";
import styles from "./styles";

import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function NotificationCard({
  message,
  date,
}: {
  message: string;
  date: string;
}) {
  return (
    <View style={styles.card}>
      <Icon name="calendar-month-outline" size={32} color="#b71c1c" />
      <View style={styles.cardText}>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.dateRow}>
          <Icon name="calendar-outline" size={16} color="#666" />
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </View>
  );
}
