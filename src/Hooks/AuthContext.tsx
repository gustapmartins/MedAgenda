// src/Contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextType = {
  isLoggedIn: boolean;
    login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  login: async () => false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
     // Verifica se já tem token salvo ao montar o provider
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("userToken");
      setIsLoggedIn(!!token);
    };
    checkToken();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulando chamada de API (troque pela sua real)
      // const response = await fetch("https://sua-api.com/login", { ... })

      // Para teste, vamos fingir que a resposta é sempre sucesso se email e senha não vazios
      if (email && password) {
        await AsyncStorage.setItem("userToken", "fake-token");
        setIsLoggedIn(true);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Erro no login", error);
      return false;
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userData");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
