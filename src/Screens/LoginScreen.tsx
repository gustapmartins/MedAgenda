import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { CheckBox } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type LoginScreenProps = {
  Login: { name: String }; // Troque `any` pelo tipo específico do seu navegador, se possível
  Register: { name: String }; // Troque `any` pelo tipo específico do seu navegador, se possível
};

type ProfileScreenProps = NativeStackScreenProps<LoginScreenProps, "Login">;

export default function LoginScreen({ navigation }: ProfileScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem vindo a <Text style={styles.Med}>Med</Text>Agenda
      </Text>
      <Text style={styles.subtitle}>
        Entre com seu email e sua senha para realizar o login
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <View style={styles.rememberMeContainer}>
        <CheckBox
          center
          title="Lembrar a senha"
          checked={check}
          onPress={() => setCheck(!check)}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
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
        <Text style={styles.registerText}>
          <Text style={styles.haveAccountTittle}>
            Ainda não possui uma conta?
          </Text>{" "}
          <Text style={styles.RegisterTitle}>Registrar</Text>
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
