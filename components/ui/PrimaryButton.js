import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton(props) {

  function pressHandler() {
    props.onPress();
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressedd, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

/** Using Object Destructuring **/
// function PrimaryButton({children}){
//     return(
//         <View>
//             <Text>{children}</Text>
//         </View>
//     )
// }

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressedd: {
    opacity: 0.5,
  },
});

export default PrimaryButton;
