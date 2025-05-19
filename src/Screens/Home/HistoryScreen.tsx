import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import NotificationCard from "../../Components/NotificationCard";
import GoBackHeader from "../../Components/GoBackHeader";
import { useTheme } from "../../Hooks/ThemeContext";

const appointments = [
  {
    id: "1",
    message: "Sua consulta de dermatologista está próxima",
    date: "17 Feb 2024 às 12:30",
    icon: "calendar-month",
  },
  {
    id: "2",
    message: "Sua consulta de dermatologista está próxima",
    date: "17 Feb 2024 às 15:25",
    icon: "clock-outline",
  },
];

type RootStackParamList = {
  History: { name: string };
  Home: { name: string };
};

type HistoryScreenProps = NativeStackScreenProps<RootStackParamList, "History">;

const HistoryScreen = ({ navigation }: HistoryScreenProps) => {
  
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <GoBackHeader title="Histórico" onPress={() => navigation.goBack()} />

      {/* Filtros */}
      <View style={styles.filters}>
        <TouchableOpacity style={[styles.dropdown, { backgroundColor: colors.card }]}>
          <Text style={{ color: colors.text }}>Escolha uma especialidade</Text>
          <Icon name="chevron-down" size={20} color={colors.text} />
        </TouchableOpacity>

        <View style={styles.dateRow}>
          <TouchableOpacity style={[styles.datePicker, { backgroundColor: colors.card }]}>
            <Text style={{ color: colors.text }}>Data inicial</Text>
            <Icon name="calendar" size={20} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.datePicker, { backgroundColor: colors.card }]}>
            <Text style={{ color: colors.text }}>Data final</Text>
            <Icon name="calendar" size={20} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de agendamentos */}
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationCard message={item.message} date={item.date} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
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
    position: "relative",
    marginBottom: 16,
  },
  backButton: {
    position: "absolute",
    left: 0,
    paddingHorizontal: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  filters: {
    marginBottom: 20,
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  datePicker: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 6,
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
  },
  cardContent: {
    marginLeft: 12,
    flex: 1,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
  },
  dateText: {
    fontSize: 12,
    color: "#777",
    marginLeft: 4,
  },
});

export default HistoryScreen;
