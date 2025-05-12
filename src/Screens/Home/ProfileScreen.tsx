import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import GoBackHeader from "../../Components/GoBackHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Profile: { name: string };
  Home: { name: string };
};

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Profile">;

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  // Estado para armazenar o nome e email do usuário
  const [name, setName] = useState("Gustavo Pereira Martins");
  const [email, setEmail] = useState("gustavo@email.com");

  // Função para salvar as alterações (pode ser conectada a uma API ou base de dados)
  const handleSave = () => {
    console.log("Nome alterado para:", name);
    console.log("Email alterado para:", email);
    // Aqui você pode salvar os dados na API ou em um banco de dados
  };

  return (
    <View style={styles.container}>
      <GoBackHeader onPress={() => navigation.goBack()} title="Perfil" />

      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Button title="Salvar Alterações" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
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
