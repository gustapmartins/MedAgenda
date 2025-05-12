import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    marginBottom: 16,
  },
  backButton: {
    paddingHorizontal: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export const stylesIconBoolean = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 16,
  },
  backButton: {
    position: "absolute",
    left: 0,
    paddingHorizontal: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
});


