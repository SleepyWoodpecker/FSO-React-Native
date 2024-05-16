import { Text } from "react-native";
import useAuthenticationStorage from "../hooks/useAuthenticationStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";

const SignOut = () => {
  const authStore = useAuthenticationStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  useEffect(() => {
    const signOut = async () => {
      await authStore.removeAccessToken();
      await apolloClient.resetStore();
      navigate("/sign-in");
    };
    signOut();
  }, []);

  return <Text>This is the Sign Out Page</Text>;
};

export default SignOut;
