import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Root } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light'/>
      <Root />
    </NavigationContainer>
  );
}
