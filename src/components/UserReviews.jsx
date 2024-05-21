import { FlatList, Text } from "react-native";
import useSignInStatus from "../hooks/useSignInStatus";
import ReviewDisplayItem from "./ReviewDisplayItem";

const UserReviewsList = () => {
  const userReviews = useSignInStatus(true);

  if (!userReviews.data) {
    return <Text>LOADING...</Text>;
  }

  return (
    <FlatList
      data={userReviews.data.me.reviews.edges}
      keyExtractor={(item) => {
        return item.node.id;
      }}
      renderItem={(item) => {
        return (
          <ReviewDisplayItem
            reviewItem={item.item}
            myReviewsButtons
            reviewRefresher={userReviews.refetch}
          />
        );
      }}
    ></FlatList>
  );
};

export default UserReviewsList;
