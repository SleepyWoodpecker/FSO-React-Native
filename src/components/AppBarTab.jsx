import { Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  tabText: {
    color: "#FFFFFF",
  },
  linkTabStyle: {
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
});

const AppBarTab = ({ tabName, link }) => {
  return (
    <Link to={link} style={styles.linkTabStyle}>
      <Text style={styles.tabText}>{tabName}</Text>
    </Link>
  );
};

export default AppBarTab;
