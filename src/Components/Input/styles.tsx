import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F9F6F6",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,

    // Sombra iOS
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 4 }, // direita e baixo
    shadowOpacity: 0.3,
    shadowRadius: 2,

    // Sombra Android
    elevation: 8,
  },

  input: {
    width: "100%",
    padding: 18,
    paddingHorizontal: 20,
    fontSize: 14,
    borderRadius: 10,
  },

  placeholderError: {
    color: "#ec5353",
    fontWeight: "600",
    paddingTop: 8,
    paddingLeft: 8,
  },
});

export default styles;
