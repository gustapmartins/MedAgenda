import { TouchableOpacity, View, Text } from "react-native";
import { styles, stylesIconBoolean } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../../Hooks/ThemeContext";

type TypeProps = {
  onPress: () => void;
  title: string;
  onPressIcon?: () => void;
  icon?: boolean;
};

const GoBackHeader = ({ onPress, onPressIcon, title, icon }: TypeProps) => {
  const { colors } = useTheme();

  return (
    <View style={icon ? styles.header : stylesIconBoolean.header}>
      <TouchableOpacity
        style={icon ? styles.backButton : stylesIconBoolean.backButton}
        onPress={onPress}
      >
        <Icon name="arrow-left" size={28} color={colors.text} />
      </TouchableOpacity>
      <Text style={[styles.headerTitle, { color: colors.text }]}>{title}</Text>

      {icon && (
        <TouchableOpacity
          style={icon ? styles.backButton : stylesIconBoolean.backButton}
          onPress={onPressIcon}
        >
          <Icon name="bell-outline" size={28} color={colors.text} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GoBackHeader;
