import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import useAuthentication from "../hooks/useAuthentication";
import useAuthenticationStorage from "../hooks/useAuthenticationStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";

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
  const authStorage = useAuthenticationStorage();
  const [authenticateUser] = useAuthentication();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const authenticationResult = await authenticateUser(values);

    if (authenticationResult.data) {
      await authStorage.setAccessToken(
        authenticationResult.data.authenticate.accessToken
      );
      navigate("/");
      apolloClient.resetStore();
    } else {
      console.log(
        "there was a problem logging in...",
        authenticationResult.error
      );
    }
  };

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
