import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import GoBackHeader from "../../Components/GoBackHeader";
import { useTheme } from "../../Hooks/ThemeContext";
import ButtonAdd from "../../Components/ButtonAdd";

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

const ConsultationScreen = ({ navigation }: ConsultationScreenProps) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <GoBackHeader
        title="Agendamento"
        onPress={() => navigation.goBack()}
        icon={true}
        onPressIcon={() => navigation.navigate("Notifications")}
      />

      {/* Calendário */}
      <Calendar
        style={[styles.calendar, { backgroundColor: colors.card }]}
        current={"2024-11-02"}
        markedDates={{
          "2024-11-03": {
            selected: true,
            selectedColor: "red",
            selectedTextColor: "white",
          },
        }}
        theme={{
          backgroundColor: "white",
          calendarBackground: colors.card, // fundo principa
        }}
      />

      {/* Informação da consulta */}
      <View style={[styles.consultationInfo, { backgroundColor: colors.card }]}>
        <View style={styles.boxCard}></View>
        <View>
          <Text style={styles.consultationDate}>{consultationData.date}</Text>
          <Text style={[styles.consultationTitle, { color: colors.text }]}>
            {consultationData.title}
          </Text>
          <Text style={styles.consultationTime}>{consultationData.time}</Text>
        </View>
      </View>

      {/* Botão de adicionar */}
      <ButtonAdd />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

    marginBottom: 20,
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
  },

  boxCard: {
    flexDirection: "row",
    backgroundColor: "red",
    marginRight: 12,
    borderRadius: 8,
    width: 8,
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
});

export default ConsultationScreen;
