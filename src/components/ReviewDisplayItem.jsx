import { StyleSheet, Text, View } from "react-native";

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

const ReviewDisplayItem = ({ reviewItem }) => {
  const reviewData = reviewItem.node;

  const dateObj = new Date(reviewData.createdAt);

  return (
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
  );
};

export default ReviewDisplayItem;
