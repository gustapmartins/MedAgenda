
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 2,
    alignItems: "center",
  },

  input: {
    width: "100%",
    height: 40,
    padding: 10,
  },

  placeholderError: {
    color: "#ec5353",
    fontWeight: "600",
    paddingTop: 8,
    paddingLeft: 8
  }
})

export default styles;
