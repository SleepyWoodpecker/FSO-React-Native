import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_REPO } from "../graphql/queries";

const useSinglerepository = () => {
  const { id } = useParams();
  const { data } = useQuery(GET_SINGLE_REPO, {
    variables: {
      repositoryId: id,
    },
  });

  return data;
};

export default useSinglerepository;
