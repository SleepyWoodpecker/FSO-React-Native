import { TextInput, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
});

const TextInputField = (props) => {
  const { errorFields, errorMessage, ...others } = props;
  return (
    <>
      <TextInput
        {...others}
        style={[
          styles.textInput,
          { borderColor: errorFields ? "red" : "black" },
        ]}
      ></TextInput>
      {errorFields && <Text style={{ color: "red" }}>{errorMessage}</Text>}
    </>
  );
};

export default TextInputField;
