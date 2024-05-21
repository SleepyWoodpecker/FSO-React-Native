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
  const { repositories } = useRepositories(selectedOrder, searchFilter);

  return (
    <RepositoryList
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilterDB}
    />
  );
};

export default RepositoryListContainer;
