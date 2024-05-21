import { View, Text, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import TextInputField from "./TextInputField";
import FormButton from "./FormButton";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required").min(3),
});

const styles = StyleSheet.create({
  container: {
    margin: 7,
  },
});

const SignIn = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      await handleSubmit(values);
    },
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <TextInputField
        value={formik.values.username}
        placeholder="Username"
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={{ color: "red" }}>{formik.errors.username}</Text>
      )}
      <TextInputField
        value={formik.values.password}
        secureTextEntry
        placeholder="Password"
        onChangeText={formik.handleChange("password")}
        style={styles.textInput}
        onBlur={formik.handleBlur("password")}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: "red" }}>{formik.errors.password}</Text>
      )}
      <FormButton onPress={formik.handleSubmit} buttonText={"Sign In"} />
    </View>
  );
};

export default SignIn;
