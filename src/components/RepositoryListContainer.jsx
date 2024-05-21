import RepositoryList from "./RepositoryList";
import useRepositories from "../hooks/useRepositories";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const RepositoryListContainer = () => {
  const [selectedOrder, setSelectedOrder] = useState("CREATED_AT");
  const [searchFilter, setSearchFilter] = useState("");
  const setSearchFilterDB = useDebouncedCallback(
    (value) => setSearchFilter(value),
    500
  );
  const { repositories, getNextPage } = useRepositories(
    selectedOrder,
    searchFilter
  );
  const handleGetNextPage = (pageData) => {
    getNextPage(pageData);
  };

  return (
    <RepositoryList
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilterDB}
      getNextPage={handleGetNextPage}
    />
  );
};

export default RepositoryListContainer;
