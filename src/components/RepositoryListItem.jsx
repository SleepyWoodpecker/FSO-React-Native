import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import theme from "../theme";
import * as Linking from "expo-linking";

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 25,
    padding: 20,
  },
  statsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  topContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  textContainer: {
    display: "flex",
    gap: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
  statItemContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  languageText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  languageBox: {
    backgroundColor: "#0366d6",
    borderRadius: 5,
    padding: 5,
    alignSelf: "start",
  },
  textStyle: {
    fontFamily: theme.fonts.platform,
  },
  githubLinkButton: {
    backgroundColor: "#0366d6",
    borderRadius: 5,
    padding: 5,
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const StatsItem = ({ statName, stat }) => {
  return (
    <View style={styles.statItemContainer}>
      <Text style={styles.boldText}>
        {stat > 999 ? `${(stat / 1000).toFixed(1)}k` : stat}
      </Text>
      <Text>{statName}</Text>
    </View>
  );
};

const RepositoryListItem = ({ item }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
    url,
  } = item.item;

  const handleRedirectLink = () => {
    if (Linking.canOpenURL(url)) {
      Linking.openURL(url);
    } else {
      console.log(`${url} cannot be opened.`);
    }
  };

  return (
    <View style={styles.mainContainer} testID="repositoryListItem">
      <View style={styles.topContainer}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.boldText}>{fullName}</Text>

          {/* not sure why, but I cannot get the text to wrap */}
          <Text style={{ width: 300 }}>{description}</Text>

          <View style={styles.languageBox}>
            <Text style={[styles.languageText, styles.textStyle]}>
              {language}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <StatsItem statName={"Stars"} stat={stargazersCount} />
        <StatsItem statName={"Forks"} stat={forksCount} />
        <StatsItem statName={"Reviews"} stat={reviewCount} />
        <StatsItem statName={"Rating"} stat={ratingAverage} />
      </View>

      {url && (
        <Pressable onPress={handleRedirectLink} style={styles.githubLinkButton}>
          <Text style={[styles.languageText, styles.textStyle]}>
            Open in GitHub
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryListItem;
