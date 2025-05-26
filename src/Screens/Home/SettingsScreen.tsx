import React from "react";
import {
  View,
  Text,
  Switch,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../../Hooks/ThemeContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import GoBackHeader from "../../Components/GoBackHeader";
import { useAuth } from "../../Hooks/AuthContext";

type RootStackParamList = {
  Settings: { name: string };
  Home: { name: string };
  Login: { name: string };
};

type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Settings"
>;

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const { toggleTheme, isDarkMode, colors } = useTheme();
  const { logout } = useAuth();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <GoBackHeader onPress={() => navigation.goBack()} title="Configurações" />

      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.label, { color: colors.text }]}>🌙 Modo Escuro</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      <TouchableOpacity
        style={[
          styles.logoutButton,
          { backgroundColor: colors.danger },
        ]}
        onPress={logout}
      >
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 32,
    alignSelf: "center",
  },
  card: {
    padding: 20,
    marginTop: 42,
    borderRadius: 12,
    marginBottom: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
  },
  logoutButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default SettingsScreen;
