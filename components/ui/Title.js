import { View, Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2}),
    borderColor: "#fff",
    padding: 12,
    maxWidth: '85%',
    width: 300
  },
});
