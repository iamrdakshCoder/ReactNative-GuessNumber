import { Text, StyleSheet } from "react-native";

const InstructionText = ({ children }) => {
  return <Text style={styles.innerHeading}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  innerHeading: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 25,
  },
});
