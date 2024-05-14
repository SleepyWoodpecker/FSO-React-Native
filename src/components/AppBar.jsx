import { View, StyleSheet, Text, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    paddingBottom: 10,
    marginBottom: 10,
    padding: 20,
  },
  text: {
    color: "#FFFFFF",
  },
});

const AppBar = () => {
  return (
    <Pressable onPress={() => console.log("HI")}>
      <View style={styles.container}>
        <Text style={styles.text}>Rate Repository Application</Text>
      </View>
    </Pressable>
  );
};

export default AppBar;
