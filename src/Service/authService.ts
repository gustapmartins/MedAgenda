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
