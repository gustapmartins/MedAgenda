import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
};



export default LoadingScreen;
