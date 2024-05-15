import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required").min(3),
});

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
    validationSchema,
  });

  console.log(formik.touched, formik.errors);

  return (
    <View style={styles.container}>
      <TextInput
        value={formik.values.username}
        placeholder="Username"
        onChangeText={formik.handleChange("username")}
        style={styles.textInput}
        onBlur={formik.handleBlur("username")}
      ></TextInput>
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "red" }}>{formik.errors.username}</Text>
      )}
      <TextInput
        value={formik.values.password}
        secureTextEntry
        placeholder="Password"
        onChangeText={formik.handleChange("password")}
        style={styles.textInput}
        onBlur={formik.handleBlur("password")}
      ></TextInput>
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "red" }}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.signInButton}>
        <Text style={{ color: "#FFFFFF", alignSelf: "center" }}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
