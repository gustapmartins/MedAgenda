import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Tipos para as rotas de autenticação
export type AuthParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
};

// Tipos para as rotas principais do app
export type MainParamList = {
  Home: undefined;
  Profile: undefined;
  Consultation: undefined;
  Notifications: undefined;
  Terms: undefined;
  AppointmentDetails: undefined;
  Appointment: undefined;
  MyAppointments: undefined;
  History: undefined;
};

// Tipos para navegação (ajuste conforme necessário)
export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  MainParamList,
  'Profile'
>;

// Adicione o tipo ProfileScreenProps
export type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProp;
};
