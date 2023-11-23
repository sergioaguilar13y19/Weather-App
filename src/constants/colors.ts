import { Appearance } from "react-native";

export const colorScheme = Appearance.getColorScheme() || "light";
const isDarkMode = colorScheme === "dark"
export const statusBarStyle = isDarkMode ? "light" : "dark";
console.log(colorScheme);

export const colors = {
  primary: isDarkMode ? "#000" : "#fff",
  secondary: isDarkMode ? "#fff" : "#000",
};
