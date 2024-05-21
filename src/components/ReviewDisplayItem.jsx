import { StyleSheet, Text, View, Alert } from "react-native";
import FormButton from "./FormButton";
import { useNavigate } from "react-router-native";
import useDeleteReviews from "../hooks/useDeleteRepositories";

const styles = StyleSheet.create({
  reviewItemContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    gap: 10,
  },
  reviewRightContainer: {
    display: "flex",
    gap: 10,
    flexDirection: "column",
    width: 300,
  },
  reviewCircle: {
    borderRadius: 100,
    borderWidth: 2,
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4884C9",
  },
});

const formatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const ReviewDisplayItem = ({
  reviewItem,
  myReviewsButtons,
  reviewRefresher,
}) => {
  const navigate = useNavigate();
  const deleteReview = useDeleteReviews();

  const reviewData = reviewItem.node;

  const dateObj = new Date(reviewData.createdAt);

  const handleViewRepository = (repositoryId) => {
    navigate(`/repositories/${repositoryId}`);
  };

  const handleReviewDelete = async (reviewId) => {
    Alert.alert("Confirm", "Are you sure you want to delete this review?", [
      {
        text: "Confirm",
        onPress: async () => {
          console.log(reviewId);
          await deleteReview(reviewId);
          await reviewRefresher();
        },
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  return (
    <View>
      <View style={styles.reviewItemContainer}>
        <View style={styles.reviewCircle}>
          <Text style={{ color: "#4884C9" }}>{reviewData.rating}</Text>
        </View>
        <View style={styles.reviewRightContainer}>
          <Text style={{ fontWeight: "bold" }}>{reviewData.user.username}</Text>
          <Text>{formatter.format(dateObj)}</Text>
          <Text>{reviewData.text}</Text>
        </View>
      </View>
      {myReviewsButtons && (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: 20,
          }}
        >
          <FormButton
            buttonText={"View Repository"}
            onPress={() => handleViewRepository(reviewData.repositoryId)}
          />
          <FormButton
            buttonText={"Delete Repository"}
            additionalStyles={{ backgroundColor: "#c22929" }}
            onPress={() => handleReviewDelete(reviewData.id)}
          />
        </View>
      )}
    </View>
  );
};

export default ReviewDisplayItem;
