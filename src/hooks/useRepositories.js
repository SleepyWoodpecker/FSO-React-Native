import { useQuery } from "@apollo/client";
import { MY_QUERY } from "../graphql/queries";

const useRepositories = (order, searchKeyword) => {
  let dropDownSearch;
  if (order == "LOWEST_RATED") {
    dropDownSearch = { orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
  } else if (order == "HIGHEST RATED") {
    dropDownSearch = { orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
  } else if (order == "LATEST") {
    dropDownSearch = { orderBy: "CREATED_AT" };
  }
  const { data } = useQuery(MY_QUERY, {
    fetchPolicy: "cache-and-network",
    variables: {
      ...dropDownSearch,
      searchKeyword,
    },
  });

  return { repositories: data ? data.repositories : null };
};

export default useRepositories;
