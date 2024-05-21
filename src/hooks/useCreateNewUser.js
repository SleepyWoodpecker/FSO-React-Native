import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useCreateNewUser = () => {
  const [newUserCreator] = useMutation(CREATE_USER);

  const createNewUser = async (userData) => {
    console.log(userData);
    try {
      const response = await newUserCreator({
        variables: { user: userData },
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  return createNewUser;
};

export default useCreateNewUser;
