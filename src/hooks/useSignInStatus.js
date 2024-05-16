import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useSignInStatus = () => {
  const signInStatus = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

  return signInStatus;
};

export default useSignInStatus;
