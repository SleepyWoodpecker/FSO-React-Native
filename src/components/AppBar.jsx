import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab tabName={"Rate Repository Application"} link="/"></AppBarTab>
        <AppBarTab tabName={"Sign In"} link="sign-in"></AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
