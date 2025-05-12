import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

type TypeProps = {
  onPress: () => void;
};


const ProfileCard = ({onPress}: TypeProps) => {
  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={styles.avatarContainer}>
          <Icon name="person-outline" size={50} color="#555" />
        </View>
        <Text style={styles.name}>William Pereira Kodriz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCard;