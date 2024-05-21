import { StyleSheet, TextInput, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#f0f0f5",
    paddingHorizontal: 20,
    paddingVertical: 5,
    paddingTop: 20,
  },
});

const SearchBar = ({ setSearchFilter }) => {
  return (
    <View style={styles.textInput}>
      <View
        style={{
          backgroundColor: "white",

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{ margin: 5, paddingVertical: 10, width: "90%" }}
          onChangeText={(e) => setSearchFilter(e)}
        ></TextInput>
        <EvilIcons name="search" size={24} color="black" />
      </View>
    </View>
  );
};

export default SearchBar;
