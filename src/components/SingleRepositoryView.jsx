import useSinglerepository from "../hooks/getSingleRepository";
import RepositoryListItem from "./RepositoryListItem";
import { Text, View, FlatList } from "react-native";
import ReviewDisplayItem from "./ReviewDisplayItem";

const Separator = () => {
  return <View style={{ height: 20, backgroundColor: "#E2E4E9" }}></View>;
};

const SingleRepositoryView = () => {
  const data = useSinglerepository();

  return data ? (
    <View>
      <FlatList
        ListHeaderComponent={() => (
          <RepositoryListItem
            item={{ item: { ...data.repository, showUrl: true } }}
          />
        )}
        data={data.repository.reviews.edges}
        keyExtractor={(item) => item.node.id}
        renderItem={(item) => <ReviewDisplayItem reviewItem={item.item} />}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  ) : (
    <Text>LOADING...</Text>
  );
};

export default SingleRepositoryView;
