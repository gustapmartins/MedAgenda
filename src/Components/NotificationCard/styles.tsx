import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    alignItems: "flex-start",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: {
    marginLeft: 12,
    flex: 1,
  },
  message: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontSize: 13,
    color: "#555",
    marginLeft: 6,
  },
});

export default styles;
