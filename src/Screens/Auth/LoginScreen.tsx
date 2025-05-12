import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { CheckBox } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Input from "../../Components/Input";
import { handleRememberMe, handleLogin } from "../../Service/authService";

// Tipagem correta da pilha de navegação
type AuthStackParamList = {
  Login: { name: string };
  Register: { name: string };
  HomeScreen: { name: string };
};

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, "Login">;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem-vindo à <Text style={styles.Med}>Med</Text>Agenda
      </Text>
      <Text style={styles.subtitle}>
        Entre com seu email e sua senha para realizar o login
      </Text>

      <Input
        placeholder="E-mail"
        onChangeValue={setEmail}
        secureTextEntry={false}
        value={email}
      />

      <Input
        placeholder="Senha"
        onChangeValue={setPassword}
        secureTextEntry
        value={password}
      />

      <View style={styles.rememberMeContainer}>
        <View>
          <CheckBox
            center
            title="Lembrar a senha"
            checked={check}
            containerStyle={{
              padding: 0,
              margin: 0,
              marginLeft: 0,
              marginRight: 0,
            }}
            onPress={() => {
              setCheck(!check);
              handleRememberMe(check);
            }}
          />
        </View>
        <TouchableOpacity>
          <Text>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={async () => {
          await handleLogin(email, password, () =>
            navigation.navigate("HomeScreen", { name: "HomeScreen" })
          );
        }}
      >
        <Text style={styles.loginButtonText}>Entrar</Text>
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
          navigation.navigate("Register", { name: "Register" });
        }}
      >
        <View style={styles.registerText}>
          <Text style={styles.haveAccountTittle}>
            Ainda não possui uma conta?
          </Text>
          <Text style={styles.RegisterTitle}>Registrar</Text>
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
    marginTop: 20,
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
    backgroundColor: "#F9F6F9",
    width: 70,
    height: 70,
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

  RegisterTitle: {
    color: "#FF4747",
  },

  haveAccountTittle: {
    color: "#000",
    paddingRight: 5,
  },
});
