import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";
export const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: colors.secondary,
    color: colors.secondary,
    marginVertical: 10,
    width: '90%',
  },
  text: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: "bold",
  },
});
