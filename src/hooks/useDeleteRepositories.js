import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReviews = () => {
  const [reviewDeleter] = useMutation(DELETE_REVIEW);

  const deleteReview = async (reviewId) => {
    const response = await reviewDeleter({
      variables: {
        deleteReviewId: reviewId,
      },
    });

    return response;
  };

  return deleteReview;
};

export default useDeleteReviews;
