import { useQuery } from "@apollo/client";
import { MY_QUERY } from "../graphql/queries";

const useRepositories = () => {
  const { data } = useQuery(MY_QUERY, {
    fetchPolicy: "cache-and-network",
  });

  return { repositories: data ? data.repositories : null };
};

export default useRepositories;
