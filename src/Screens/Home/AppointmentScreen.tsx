import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const AppointmentScreen = () => {
  const [specialty, setSpecialty] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [healthPlan, setHealthPlan] = useState('');

  const handleConfirm = () => {
    if (!specialty || !doctor || !date || !time || !healthPlan) {
      Alert.alert('Atenção', 'Preencha todos os campos antes de confirmar o agendamento.');
      return;
    }

    Alert.alert('Agendamento Confirmado', `Consulta com ${doctor} agendada para ${date} às ${time}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Agendar Consulta</Text>
      <Text style={styles.label}>Especialidade</Text>
      <TextInput style={styles.input} placeholder="Ex: Cardiologia" value={specialty} onChangeText={setSpecialty} />
      <Text style={styles.label}>Médico</Text>
      <TextInput style={styles.input} placeholder="Nome do médico" value={doctor} onChangeText={setDoctor} />
      <Text style={styles.label}>Data</Text>
      <TextInput style={styles.input} placeholder="DD/MM/AAAA" value={date} onChangeText={setDate} />
      <Text style={styles.label}>Horário</Text>
      <TextInput style={styles.input} placeholder="HH:MM" value={time} onChangeText={setTime} />
      <Text style={styles.label}>Convênio</Text>
      <TextInput style={styles.input} placeholder="Plano de saúde" value={healthPlan} onChangeText={setHealthPlan} />
      <View style={styles.buttonContainer}>
        <Button title="Confirmar Agendamento" onPress={handleConfirm} color="#007BFF" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold', textAlign: 'center' },
  label: { marginBottom: 5, fontWeight: '600', color: '#555' },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 6,
    paddingHorizontal: 10, paddingVertical: 8, marginBottom: 15
  },
  buttonContainer: { marginTop: 10 },
});

export default AppointmentScreen;
