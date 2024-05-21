import { useFormik } from "formik";
import * as yup from "yup";
import { StyleSheet, View } from "react-native";
import TextInputField from "./TextInputField";
import FormButton from "./FormButton";
import useCreateNewUser from "../hooks/useCreateNewUser";
import useAuthentication from "../hooks/useAuthentication";
import useAuthenticationStorage from "../hooks/useAuthenticationStorage";
import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required").min(5).max(30),
  password: yup.string().required("Password is required").min(5).max(50),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Password confirmation is required"),
});

const styles = StyleSheet.create({
  container: {
    margin: 7,
  },
});

const SignUp = () => {
  const createNewUser = useCreateNewUser();
  const [authenticate] = useAuthentication();
  const authStorage = useAuthenticationStorage();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const handleSubmit = async ({ username, password }) => {
    const newUser = await createNewUser({ username, password });

    if (newUser?.data) {
      const authenticationResult = await authenticate({ username, password });
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
    } else {
      console.log("There was an issue creating the new user");
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async (values) => {
      await handleSubmit(values);
    },
    validationSchema,
  });

  return (
    <View style={styles.container}>
      <TextInputField
        onChangeText={formik.handleChange("username")}
        onBlur={formik.handleBlur("username")}
        placeholder="Username"
        errorFields={formik.touched.username && formik.errors.username}
        errorMessage={formik.errors.username}
      />
      <TextInputField
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        placeholder="Password"
        errorFields={formik.touched.password && formik.errors.password}
        errorMessage={formik.errors.password}
      />
      <TextInputField
        onChangeText={formik.handleChange("passwordConfirm")}
        onBlur={formik.handleBlur("passwordConfirm")}
        placeholder="Confirm your password"
        errorFields={
          formik.touched.passwordConfirm && formik.errors.passwordConfirm
        }
        errorMessage={formik.errors.passwordConfirm}
      />
      <FormButton onPress={formik.handleSubmit} buttonText={"Sign Up"} />
    </View>
  );
};

export default SignUp;
