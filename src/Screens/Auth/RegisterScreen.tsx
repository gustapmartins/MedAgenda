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
import Input from "../../Components/Input";

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

      <View style={styles.inputContainer}>
        <Input
          placeholder="E-mail"
          onChangeValue={setEmail}
          secureTextEntry={false}
          value={email}
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Cpf"
          onChangeValue={setCpf}
          secureTextEntry={false}
          value={cpf}
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Senha"
          onChangeValue={setPassword}
          secureTextEntry={false}
          value={password}
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Confirmar senha"
          onChangeValue={setConfirmPassword}
          secureTextEntry
          value={confirmPassword}
        />
      </View>
      
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
        <View style={styles.registerText}>
          <Text style={styles.haveAccountTittle}>
            Já possui conta no MedAgenda?
          </Text>
          <Text style={styles.registerTitle}>Registrar</Text>
        </View>
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

  inputContainer: {
    marginTop: 20,
  },

  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    marginTop: 10,
  },

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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Necessário para Android
  },

  registerText: {
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 14,
    marginTop: 20,
  },

  registerTitle: {
    color: "#FF4747",
  },

  haveAccountTittle: {
    color: "#000",
    paddingRight: 5,
  },
});
