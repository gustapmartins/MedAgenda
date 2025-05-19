import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import React from "react";
import { IInput } from "../../Interface/IInput";
import { useTheme } from "../../Hooks/ThemeContext";

export default function Input(props: IInput) {

  const { colors } = useTheme();

  return (
    <>
      <View style={[styles.container, { backgroundColor: colors.card }]}>
        {/* {props.Icon != null && <Icon name={props.Icon} />} */}
        <TextInput
          style={[styles.input, { color: colors.text }]}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeValue}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
      {
      props.checkField && 
        <Text style={styles.placeholderError}>{props.placeholderError}</Text>
      }
    </>
  );
}