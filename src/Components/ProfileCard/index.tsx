import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { useTheme } from '../../Hooks/ThemeContext';

type TypeProps = {
  onPress: () => void;
};


const ProfileCard = ({onPress}: TypeProps) => {

   const { colors } = useTheme();

  return (
    <View style={styles.container} >
      <TouchableOpacity style={[styles.card, { backgroundColor: colors.card }]} onPress={onPress}>
        <View style={styles.avatarContainer}>
          <Icon name="person-outline" size={50} color="#a22222" />
        </View>
        <Text style={[styles.name, { color: colors.text }]}>William Pereira Kodriz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCard;