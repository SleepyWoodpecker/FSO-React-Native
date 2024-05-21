import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useSignInStatus = (includeReviews = false) => {
  const signInStatus = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: {
      includeReviews,
    },
  });

  return signInStatus;
};

export default useSignInStatus;
