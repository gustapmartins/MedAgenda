import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 140,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 10,
  },
  label: {
    marginTop: 10,
    color: '#222',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default styles;