import { Pressable, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  formButton: {
    backgroundColor: "#0366d6",
    textAlign: "center",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
});

const FormButton = ({ onPress, buttonText }) => {
  return (
    <Pressable onPress={onPress} style={styles.formButton}>
      <Text
        style={{ color: "#FFFFFF", alignSelf: "center", fontWeight: "bold" }}
      >
        {buttonText}
      </Text>
    </Pressable>
  );
};

export default FormButton;
