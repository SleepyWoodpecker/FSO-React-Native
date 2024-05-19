import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [reviewCreator] = useMutation(CREATE_REVIEW);

  const createReview = async (review) => {
    const newReview = await reviewCreator({
      variables: { review },
    });

    return newReview;
  };

  return createReview;
};

export default useCreateReview;
