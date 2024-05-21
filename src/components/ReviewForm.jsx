import { useFormik } from "formik";
import { View, StyleSheet } from "react-native";
import * as yup from "yup";
import useCreateReview from "../hooks/useCreateReview";
import { useNavigate } from "react-router-native";
import TextInputField from "./TextInputField";
import FormButton from "./FormButton";

const schema = yup.object().shape({
  repositoryOwner: yup.string().required("Repo owner's name is required"),
  repositoryName: yup.string().required("Repo's name is required"),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required("A rating between 0 and 100 is required"),
  review: yup.string(),
});

const styles = StyleSheet.create({
  container: {
    margin: 7,
  },
  reviewButton: {
    backgroundColor: "#0366d6",
    textAlign: "center",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
});

const ReviewForm = () => {
  const submitReview = useCreateReview();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const newReview = await submitReview({
      ownerName: values.repositoryOwner, //JUST THE USERNAME
      rating: Number(values.rating),
      text: values.review,
      repositoryName: values.repositoryName, //JUST THE NAME, WITHOUT THE USERNAME
    });

    if (newReview.data) {
      console.log(newReview.data);
      navigate(`/repositories/${newReview.data.createReview.repositoryId}`);
    } else {
      console.log("Error encountered when submitting new review");
    }
  };

  const formik = useFormik({
    initialValues: {
      repositoryOwner: "",
      repositoryName: "",
      rating: "",
      review: "",
    },
    onSubmit: async (values) => {
      await handleSubmit(values);
    },
    validationSchema: schema,
  });

  return (
    <View style={styles.container}>
      <TextInputField
        value={formik.values.repositoryOwner}
        placeholder="Repository Owner Name"
        style={[styles.textInput]}
        onChangeText={formik.handleChange("repositoryOwner")}
        onBlur={formik.handleBlur("repositoryOwner")}
        errorFields={
          formik.touched.repositoryOwner && formik.errors.repositoryOwner
        }
        errorMessage={formik.errors.repositoryOwner}
      />
      <TextInputField
        value={formik.values.repositoryName}
        placeholder="Repository Name"
        style={styles.textInput}
        onChangeText={formik.handleChange("repositoryName")}
        onBlur={formik.handleBlur("repositoryName")}
        errorFields={
          formik.touched.repositoryName && formik.errors.repositoryName
        }
        errorMessage={formik.errors.repositoryName}
      />
      <TextInputField
        value={formik.values.rating}
        placeholder="Rating between 0 and 100"
        style={styles.textInput}
        onChangeText={formik.handleChange("rating")}
        onBlur={formik.handleBlur("rating")}
        errorFields={formik.touched.rating && formik.errors.rating}
        errorMessage={formik.errors.rating}
      />
      <TextInputField
        value={formik.values.review}
        placeholder="Review"
        style={styles.textInput}
        onChangeText={formik.handleChange("review")}
        onBlur={formik.handleBlur("review")}
      />
      <FormButton onPress={formik.handleSubmit} buttonText={"Create"} />
    </View>
  );
};

export default ReviewForm;
