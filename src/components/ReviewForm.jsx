import { useFormik } from "formik";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import * as yup from "yup";
import useCreateReview from "../hooks/useCreateReview";
import { useNavigate } from "react-router-native";

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
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
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
      <TextInput
        value={formik.values.repositoryOwner}
        placeholder="Repository Owner Name"
        style={[styles.textInput]}
        onChangeText={formik.handleChange("repositoryOwner")}
        onBlur={formik.handleBlur("repositoryOwner")}
      ></TextInput>
      {formik.touched.repositoryOwner && formik.errors.repositoryOwner && (
        <Text style={{ color: "red" }}>{formik.errors.repositoryOwner}</Text>
      )}
      <TextInput
        value={formik.values.repositoryName}
        placeholder="Repository Name"
        style={styles.textInput}
        onChangeText={formik.handleChange("repositoryName")}
        onBlur={formik.handleBlur("repositoryName")}
      ></TextInput>
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={{ color: "red" }}>{formik.errors.repositoryName}</Text>
      )}
      <TextInput
        value={formik.values.rating}
        placeholder="Rating between 0 and 100"
        style={styles.textInput}
        onChangeText={formik.handleChange("rating")}
        onBlur={formik.handleBlur("rating")}
      ></TextInput>
      {formik.touched.rating && formik.errors.rating && (
        <Text style={{ color: "red" }}>{formik.errors.rating}</Text>
      )}
      <TextInput
        value={formik.values.review}
        placeholder="Review"
        style={styles.textInput}
        onChangeText={formik.handleChange("review")}
        onBlur={formik.handleBlur("review")}
      ></TextInput>
      <Pressable onPress={formik.handleSubmit} style={styles.reviewButton}>
        <Text
          style={{ color: "#FFFFFF", alignSelf: "center", fontWeight: "bold" }}
        >
          Create
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
