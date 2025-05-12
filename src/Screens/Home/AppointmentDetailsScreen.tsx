import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppointmentDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes da Consulta</Text>
      <Text>Médico: Dra. Ana</Text>
      <Text>Data: 10/05/2025</Text>
      <Text>Horário: 14:00</Text>
      <Text>Especialidade: Cardiologia</Text>
      <Text>Convênio: Saúde+ Vida</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
});

export default AppointmentDetailsScreen;