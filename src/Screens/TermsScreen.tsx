import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TermsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Termos de Uso & LGPD</Text>
      <Text style={styles.text}>
        Este app respeita a Lei Geral de Proteção de Dados. Nenhuma informação é compartilhada com terceiros sem consentimento.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  text: { fontSize: 16, lineHeight: 22 },
});

export default TermsScreen;
