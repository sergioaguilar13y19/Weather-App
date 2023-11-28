import { StyleSheet } from "react-native";

import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.tertiary,
    alignItems: "center",
  },
  cardContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
});
