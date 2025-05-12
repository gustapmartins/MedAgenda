import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    backgroundColor: '#a80000',
    borderRadius: 20,
    padding: 8,
    marginRight: 10,
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  logoMed: {
    color: '#a80000',
  },
  logoAgenda: {
    color: '#333',
  },
});

export default styles;
