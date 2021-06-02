import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";

import colors from "../config/colors";
import Text from "../components/Text";

function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params;

  return (
    <View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.description}>{listing.description}</Text>
        <View style={styles.userContainer}>
          <Button title="Back" onPress={() => navigation.pop()}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  description: {
    color: colors.secondary,
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
