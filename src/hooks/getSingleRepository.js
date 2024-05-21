import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_REPO } from "../graphql/queries";

const useSinglerepository = () => {
  const { id } = useParams();
  const response = useQuery(GET_SINGLE_REPO, {
    fetchPolicy: "cache-and-network",
    variables: {
      repositoryId: id,
    },
  });

  return response.data;
};

export default useSinglerepository;
