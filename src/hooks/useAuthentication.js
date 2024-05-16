import { useMutation } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/mutations";

const useAuthentication = () => {
  const [authenticate, result] = useMutation(AUTHENTICATE_USER);

  const signIn = async ({ username, password }) => {
    const authResult = await authenticate({
      variables: { credentials: { username, password } },
    });
    return authResult;
  };

  return [signIn, result];
};

export default useAuthentication;
