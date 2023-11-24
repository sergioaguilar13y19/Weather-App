import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../constants/colors";

const isAndroid = Platform.OS === "android";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  formContainer: {
    marginLeft: 20,
    marginTop: isAndroid ? 80 : 0,
  },
  buttonContainer: {
    width: "90%",
    alignSelf: "center",
    alignItems : "center",
    justifyContent: "flex-start",
  },

});
