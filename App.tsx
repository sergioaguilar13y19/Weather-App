import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { colorScheme } from "./src/constants/colors";
import { Root } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style={colorScheme} />
      <Root />
    </NavigationContainer>
  );
}
