import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const UpdateProfile = async (
  userData: any,
  onSuccess: () => void
) => {
  try {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userData");
    onSuccess();
  } catch (error) {
    console.error("Erro ao sair da conta", error);
    Alert.alert("Erro", "Não foi possível sair da conta.");
  }
};
