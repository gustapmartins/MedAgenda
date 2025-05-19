import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GoBackHeader from '../../Components/GoBackHeader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '../../Hooks/ThemeContext';


type RootStackParamList = {
  Home: { name: string };
  Profile: { name: string };
  Consultation: { name: string };
  Settings: { name: string };
  Notifications: { name: string };
  History: { name: string };
  Terms: { name: string };
};

type TermScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;


const TermsScreen = ({navigation}: TermScreenProps) => {
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <GoBackHeader title="Política de privacidade" onPress={() => navigation.goBack()} />
      
      <View style={styles.dateContainer}>
        <Text style={styles.date}>Última atualização - 20 julho 2024</Text>
      </View>

      <View style={styles.content}>
        <Text style={[styles.text, {color: colors.text}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
        <Text style={[styles.text, {color: colors.text}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
        <Text style={[styles.text, {color: colors.text}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
        <Text style={[styles.text, {color: colors.text}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  dateContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  content: {
    padding: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
});

export default TermsScreen;
