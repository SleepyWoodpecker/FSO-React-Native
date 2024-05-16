import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import useSignInStatus from "../hooks/useSignInStatus";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    paddingBottom: 10,
    marginBottom: 10,
    padding: 20,
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-evenly",
    // alignItems: "center",
  },
});

const AppBar = () => {
  const signInStatus = useSignInStatus();

  console.log(signInStatus.data);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName={"Rate Repository Application"} link="/"></AppBarTab>
        {signInStatus?.data?.me ? (
          <AppBarTab tabName={"Sign Out"} link="sign-out"></AppBarTab>
        ) : (
          <AppBarTab tabName={"Sign In"} link="sign-in"></AppBarTab>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
