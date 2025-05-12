// services/authService.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const handleRememberMe = async (check: boolean): Promise<boolean> => {
  if (check) {
    await AsyncStorage.setItem("rememberMe", "true");
  } else {
    await AsyncStorage.removeItem("rememberMe");
  }
  return check;
};

export const handleLogin = async (
  email: string,
  password: string,
  onSuccess: () => void
) => {
  try {
    const response = await fetch("API_ENDPOINT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.token) {
      await AsyncStorage.setItem("userToken", data.token);
      onSuccess();
    } else {
      Alert.alert("Erro", "Credenciais inválidas.");
    }
  } catch (error) {
    Alert.alert("Erro", "Erro na comunicação com o servidor.");
  }
};
