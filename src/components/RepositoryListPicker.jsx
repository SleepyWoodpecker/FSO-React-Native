import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
  dropDownBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f5",
    padding: 20,
  },
});

const RepositoryListPicker = ({
  selectedSortingOrder,
  setSelectedSortingOrder,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  let selectedSortingText = "";

  if (selectedSortingOrder == "CREATED_AT") {
    selectedSortingText = "Latest";
  } else if (selectedSortingOrder == "LOWEST_RATED") {
    selectedSortingText = "Lowest Rated Repositories";
  } else if (selectedSortingOrder == "HIGHEST_RATED") {
    selectedSortingText = "Highest Rated Repositories";
  }

  return (
    <View>
      <Pressable onPress={() => setShowPicker((curr) => !curr)}>
        <View style={styles.dropDownBox}>
          <Text>{selectedSortingText}</Text>
          <AntDesign name="caretdown" size={10} color="black" />
        </View>
      </Pressable>
      {showPicker && (
        <View>
          <Picker
            selectedValue={selectedSortingOrder}
            onValueChange={(itemValue) => {
              setSelectedSortingOrder(itemValue);
            }}
          >
            <Picker.Item label="Latest" value={"LATEST"} />
            <Picker.Item
              label="Highest Rated Repositories"
              value={"HIGHEST_RATED"}
            />
            <Picker.Item
              label="Lowest Rated Repositories"
              value={"LOWEST_RATED"}
            />
          </Picker>
          <Pressable onPress={() => setShowPicker(false)}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "#0366d6" }}>Confirm</Text>
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default RepositoryListPicker;
