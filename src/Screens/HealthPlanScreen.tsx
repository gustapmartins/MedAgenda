import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthPlanScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Convênio</Text>
      <Text>Plano: Saúde+ Vida</Text>
      <Text>Número: 123456789</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});

export default HealthPlanScreen;