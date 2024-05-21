import { StyleSheet, View } from "react-native";
import RepositoryListContainer from "./RepositoryListContainer";
import AppBar from "./AppBar";
import SignOut from "./SignOut";
import ReviewForm from "./ReviewForm";
import SingleRepositoryView from "./SingleRepositoryView";
import { Route, Routes, Navigate } from "react-router-native";
import SignInContainer from "./SignInContainer";
import SignUp from "./SignUp";
import UserReviewsList from "./UserReviews";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route
          path="/"
          // element={<Navigate to="/repositories/jaredpalmer.formik" replace />}
          element={<RepositoryListContainer />}
        ></Route>
        <Route
          path="/repositories/:id"
          element={<SingleRepositoryView />}
        ></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
        <Route path="/sign-in" element={<SignInContainer />}></Route>
        <Route path="/sign-out" element={<SignOut />}></Route>
        <Route path="/create-review" element={<ReviewForm />}></Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/my-reviews" element={<UserReviewsList />} />
      </Routes>
    </View>
  );
};

export default Main;
