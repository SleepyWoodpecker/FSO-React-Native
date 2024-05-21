import { FlatList, Text } from "react-native";
import useSignInStatus from "../hooks/useSignInStatus";
import ReviewDisplayItem from "./ReviewDisplayItem";

const UserReviewsList = () => {
  const userReviews = useSignInStatus(true);

  if (!userReviews.data) {
    return <Text>LOADING...</Text>;
  }

  console.log(userReviews.data.me.reviews.edges[0]);

  return (
    <FlatList
      data={userReviews.data.me.reviews.edges}
      keyExtractor={(item) => {
        return item.node.id;
      }}
      renderItem={(item) => {
        console.log("ITEMMMM", item);
        return <ReviewDisplayItem reviewItem={item.item} />;
      }}
    ></FlatList>
  );
};

export default UserReviewsList;
