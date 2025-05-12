import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { FontAwesome } from "@expo/vector-icons";
import GoBackHeader from "../../Components/GoBackHeader";

type RootStackParamList = {
  Home: { name: string };
  Consultation: { name: string };
  Notifications: { name: string };
};

type ConsultationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Consultation"
>;

const consultationData = {
  date: "2024-11-02",
  title: "Consulta com o dermatologista",
  time: "08:00",
};

const ConsultationScreen = ({ navigation }: ConsultationScreenProps) => (
  <View style={styles.container}>
    <GoBackHeader title="Agendamento" onPress={() => navigation.goBack()} icon={true} onPressIcon={() => navigation.navigate("Notifications")} />

    {/* Calendário */}
    <Calendar
      style={styles.calendar}
      current={"2024-11-02"}
      markedDates={{
        "2024-11-02": {
          selected: true,
          selectedColor: "red",
          selectedTextColor: "white",
        },
      }}
      theme={{
        selectedDayBackgroundColor: "red",
        todayTextColor: "black",
        arrowColor: "black",
      }}
    />

    {/* Informação da consulta */}
    <View style={styles.consultationInfo}>
      <Text style={styles.consultationDate}>{consultationData.date}</Text>
      <Text style={styles.consultationTitle}>{consultationData.title}</Text>
      <Text style={styles.consultationTime}>{consultationData.time}</Text>
      <TouchableOpacity style={styles.moreButton}>
        <Text style={styles.moreButtonText}></Text>
      </TouchableOpacity>
    </View>

    {/* Botão de adicionar */}
    <TouchableOpacity style={styles.addButton}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  calendar: {
    marginBottom: 20,
  },
  consultationInfo: {
    backgroundColor: "#f4f4f4",
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
  },
  consultationDate: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
  consultationTitle: {
    fontSize: 16,
    marginVertical: 5,
  },
  consultationTime: {
    fontSize: 14,
    color: "#555",
  },
  moreButton: {
    alignSelf: "flex-end",
    padding: 5,
  },
  moreButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "red",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 36,
    color: "white",
  },
});

export default ConsultationScreen;
