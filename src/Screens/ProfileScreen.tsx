import React from 'react';
import { View, Text, Button } from 'react-native';
import { ProfileScreenProps } from '../../Types/ProfileParamList'; // Ensure this type is correctly exported in the referenced file


const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  return (
    <View>
      <Text>Meu Perfil</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProfileScreen;
