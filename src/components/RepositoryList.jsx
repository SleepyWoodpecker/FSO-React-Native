import { FlatList, View, StyleSheet } from "react-native";
import RepositoryListItem from "./RepositoryListItem";
import RepositoryListPicker from "./RepositoryListPicker";
import SearchBar from "./SearchBar";

const styles = StyleSheet.create({
  separator: {
    height: 20,
    backgroundColor: "#f0f0f5",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({
  repositories,
  selectedOrder,
  setSelectedOrder,
  setSearchFilter,
  searchFilter,
}) => {
  const repositoryData = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <SearchBar
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
          />
          <RepositoryListPicker
            selectedSortingOrder={selectedOrder}
            setSelectedSortingOrder={setSelectedOrder}
          />
        </>
      }
      data={repositoryData}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(item) => <RepositoryListItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
