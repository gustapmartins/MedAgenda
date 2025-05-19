import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import GoBackHeader from "../../Components/GoBackHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "../../Hooks/ThemeContext";
import Input from "../../Components/Input";

type RootStackParamList = {
  Profile: { name: string };
  Home: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Profile">;

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  // Estado para armazenar o nome e email do usuário
  const [name, setName] = useState("Gustavo");
  const [email, setEmail] = useState("gustavo@gmail.com");

  // Função para salvar as alterações (pode ser conectada a uma API ou base de dados)
  const handleSave = () => {
    console.log("Nome alterado para:", name);
    console.log("Email alterado para:", email);
    // Aqui você pode salvar os dados na API ou em um banco de dados
  };

  const {colors} = useTheme();
  
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <GoBackHeader onPress={() => navigation.goBack()} title="Perfil" />

      <Text style={[styles.label, { color: colors.text }]}>Nome</Text>
      <Input onChangeValue={setName} value={name} placeholder={name} secureTextEntry={false} />

      <Text style={[styles.label, { color: colors.text }]}>Email</Text>
      <Input onChangeValue={setEmail} value={email} placeholder={email} secureTextEntry={false} />

      <Button title="Salvar Alterações" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default ProfileScreen;
