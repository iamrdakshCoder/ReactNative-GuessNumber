import { View, StyleSheet, Dimensions } from "react-native";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}
export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 20 : 35,
    backgroundColor: "#4e0329",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 10, //For boxShadow in Android
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
