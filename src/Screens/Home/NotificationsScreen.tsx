import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import NotificationCard from "../../Components/NotificationCard";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import GoBackHeader from "../../Components/GoBackHeader";
import { useTheme } from "../../Hooks/ThemeContext";

const notifications = [
  {
    id: "1",
    message: "Sua consulta de dermatologista está próxima",
    date: "17 Fev 2024",
  },
  {
    id: "2",
    message: "Sua consulta de dermatologista está próxima",
    date: "17 Fev 2024",
  },
];

type RootStackParamList = {
  Home: { name: string };
  Notifications: { name: string };
};

type NotificationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Notifications"
>;

const NotificationsScreen = ({ navigation }: NotificationScreenProps) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <GoBackHeader title="Notificações" onPress={() => navigation.goBack()} />

      {notifications.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon name="bell-off-outline" size={100} color="#c44" />
          <Text style={[styles.emptyText, { color: colors.text }]}>
            Não há notificações para você
          </Text>
        </View>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NotificationCard message={item.message} date={item.date} />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },

  backButton: {
    position: "absolute",
    left: 0,
    paddingHorizontal: 8,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    marginTop: 16,
    textAlign: "center",
  },
});

export default NotificationsScreen;
