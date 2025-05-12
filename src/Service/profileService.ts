import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      await AsyncStorage.removeItem("userData");
    //   navigation.replace("Login", { name: "Login" });
    } catch (error) {
      console.error("Erro ao sair da conta", error);
      Alert.alert("Erro", "Não foi possível sair da conta.");
    }
  };
