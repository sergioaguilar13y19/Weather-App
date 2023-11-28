import { Appearance } from "react-native";

export const colorScheme = Appearance.getColorScheme() || "light";
const isDarkMode = colorScheme === "light"
export const statusBarStyle = isDarkMode ? "light" : "dark";
console.log(colorScheme);

export const colors = {
  primary:  "#fff",
  secondary: "#000",
  tertiary: "#51B8E1",
};
