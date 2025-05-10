import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExamsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Exames</Text>
      <Text>• Hemograma - 01/04/2025</Text>
      <Text>• Raio-X - 20/03/2025</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});

export default ExamsScreen;