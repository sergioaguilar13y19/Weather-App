import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import { store } from "./src/app/store";
import { statusBarStyle } from "./src/constants/colors";
import { Root } from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style={statusBarStyle} />
        <Root />
      </NavigationContainer>
    </Provider>
  );
}
