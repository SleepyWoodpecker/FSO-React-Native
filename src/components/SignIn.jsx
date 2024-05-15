import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import { useFormik } from "formik";

const styles = StyleSheet.create({
  container: {
    margin: 7,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  signInButton: {
    backgroundColor: "#0366d6",
    textAlign: "center",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <View style={styles.container}>
      <TextInput
        value={formik.values.username}
        placeholder="Username"
        onChangeText={formik.handleChange("username")}
        style={styles.textInput}
      ></TextInput>
      <TextInput
        value={formik.values.password}
        secureTextEntry
        placeholder="Password"
        onChangeText={formik.handleChange("password")}
        style={styles.textInput}
      ></TextInput>
      <Pressable onPress={formik.handleSubmit} style={styles.signInButton}>
        <Text style={{ color: "#FFFFFF", alignSelf: "center" }}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
