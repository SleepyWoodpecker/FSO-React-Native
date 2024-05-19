import useAuthentication from "../hooks/useAuthentication";
import useAuthenticationStorage from "../hooks/useAuthenticationStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import SignIn from "./SignIn";

const SignInContainer = () => {
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

  return <SignIn handleSubmit={handleSubmit} />;
};

export default SignInContainer;
