import { StyleSheet, View } from "react-native";
import RepositoryListContainer from "./RepositoryListContainer";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import { Route, Routes, Navigate } from "react-router-native";

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
        <Route path="/" element={<RepositoryListContainer />}></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-out" element={<SignOut />}></Route>
      </Routes>
    </View>
  );
};

export default Main;
