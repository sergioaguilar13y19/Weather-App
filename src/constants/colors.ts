import { Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();
const isDarkMode = colorScheme === "dark";
console.log(colorScheme);

export const colors = {
  primary: isDarkMode ? "#000" : "#fff",
  secondary: isDarkMode ? "#fff" : "#000",
};
