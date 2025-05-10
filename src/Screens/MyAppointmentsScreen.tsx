import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: '1', doctor: 'Dra. Ana', date: '10/05/2025', time: '14:00' },
  { id: '2', doctor: 'Dr. Carlos', date: '12/05/2025', time: '09:00' },
];

const MyAppointmentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Consultas</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>{item.doctor}</Text>
            <Text>{item.date} às {item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  text: { fontWeight: '600' },
});

export default MyAppointmentsScreen;
