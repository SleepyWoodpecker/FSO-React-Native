import { useQuery } from "@apollo/client";
import { MY_QUERY } from "../graphql/queries";

const useRepositories = (order, searchKeyword, first = 4, after) => {
  let dropDownSearch;
  if (order == "LOWEST_RATED") {
    dropDownSearch = { orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
  } else if (order == "HIGHEST RATED") {
    dropDownSearch = { orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
  } else if (order == "LATEST") {
    dropDownSearch = { orderBy: "CREATED_AT" };
  }
  const { data, fetchMore } = useQuery(MY_QUERY, {
    fetchPolicy: "cache-and-network",
    variables: {
      ...dropDownSearch,
      searchKeyword,
      first,
      after,
    },
  });

  const getNextPage = (currentPageData) => {
    if (!currentPageData.hasNextPage) {
      return;
    }

    fetchMore({
      variables: {
        ...dropDownSearch,
        searchKeyword,
        after: currentPageData.endCursor,
        first,
      },
    });
  };

  return { repositories: data ? data.repositories : null, getNextPage };
};

export default useRepositories;
