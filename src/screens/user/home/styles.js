import { StyleSheet } from "react-native";

import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
    alignItems: "center",
  },
  contentBody: {
    flex: 0.8,
    width: "100%",
    justifyContent: "space-around",
  },
  cardContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  cardBody: {
    flex: 0.8,
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 27,
    marginLeft: 25,
    fontWeight: "bold",
    color: colors.primary,
    alignSelf: "flex-start",
  },
});
