import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const ButtonAdd = () => {
  return (
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
  );
};

export default ButtonAdd;