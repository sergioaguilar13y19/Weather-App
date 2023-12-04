import { StyleSheet } from "react-native";

import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
  },
  formContainer: {
    flex: 0.8,
    marginLeft: 15,
    justifyContent: "space-evenly",
  },
  bodyContainer: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.secondary,
  },
  buttonContainer: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    padding: 10,
    marginTop: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
});
