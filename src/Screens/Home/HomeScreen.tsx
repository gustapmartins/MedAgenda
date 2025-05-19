import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CardButton } from "../../Components/Card";
import ProfileCard from "../../Components/ProfileCard";
import Header from "../../Components/Header";
import { useTheme } from "../../Hooks/ThemeContext";

type RootStackParamList = {
  Home: { name: string };
  Profile: { name: string };
  Consultation: { name: string };
  Settings: { name: string };
  Notifications: { name: string };
  History: { name: string };
  Terms: { name: string };
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { colors } = useTheme();
  const [user, setUser] = useState(null);

  // Função para buscar dados do usuário
  const fetchUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem("userData");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Erro ao buscar dados do usuário", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* <Text style={styles.title}>Bem-vindo(a), {user?.name || "usuário"}</Text> */}

      <Header onPress={() => navigation.navigate("Notifications")} />

      <ProfileCard onPress={() => navigation.navigate("Profile")} />

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          rowGap: 42,
        }}
      >
        <CardButton
          icon="calendar-month"
          label="Fazer agendamento"
          onPress={() => navigation.navigate("Consultation")}
        />
        <CardButton
          icon="calendar-check-outline"
          label="Historico de agendamentos"
          onPress={() => navigation.navigate("History")}
        />
        <CardButton
          icon="cog-outline"
          label="Configurações"
          onPress={() => navigation.navigate("Settings")}
        />
        <CardButton
          icon="help-circle-outline"
          label="Mais informações"
          onPress={() => navigation.navigate("Terms")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 16,
    padding: 20,
    justifyContent: "space-evenly", // <--- de "center" para "flex-start"
  },
});

export default HomeScreen;
