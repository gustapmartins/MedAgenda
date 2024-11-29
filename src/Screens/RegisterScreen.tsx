import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type LoginScreenProps = {
  Register: { name: String }; // Troque `any` pelo tipo específico do seu navegador, se possível
  Login: { name: String }; // Troque `any` pelo tipo específico do seu navegador, se possível
};

type ProfileScreenProps = NativeStackScreenProps<LoginScreenProps, "Register">;

export default function RegisterScreen({ navigation }: ProfileScreenProps) {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criação de conta</Text>
      <Text style={styles.subtitle}>
        Crie sua conta e preencha o formulário abaixo para começar
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Cpf"
        value={cpf}
        onChangeText={setCpf}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Criar</Text>
      </TouchableOpacity>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={24} color="#FF4747" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="#FF4747" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="linkedin" size={24} color="#FF4747" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login", { name: "Login" });
        }}
      >
        <Text style={styles.registerText}>
          <Text style={styles.haveAccountTittle}>
            Já possui conta no MedAgenda??
          </Text>{" "}
          <Text style={styles.RegisterTitle}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  Med: {
    color: "#CC3939",
  },

  subtitle: {
    fontSize: 14,
    marginBottom: 20,
  },

  input: {
    padding: 18,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#F9F6F6",
    fontSize: 14,
    // Adicionar box shadow
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 15, // Necessário para Android
  },

  inputContainer: {
    marginBottom: 15,
  },

  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    marginTop: 10,
  },

  forgotPasswordText: {},

  loginButton: {
    backgroundColor: "#FF4747",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 30,
    marginTop: 40,
  },

  loginButtonText: {
    color: "white",
    fontSize: 16,
  },

  socialButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 30,
    marginTop: 30,
  },

  socialButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F6F6",
    width: 60,
    height: 60,
    borderRadius: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 2, 
    elevation: 5, // Necessário para Android
  },

  registerText: {
    color: "blue",
    textAlign: "center",
    fontSize: 14,
    marginTop: 20,
  },

  RegisterTitle: {
    color: "#FF4747",
  },

  haveAccountTittle: {
    color: "#000",
  },
});
