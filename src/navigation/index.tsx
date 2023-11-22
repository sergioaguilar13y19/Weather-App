import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStack } from "./auth";
const Stack = createStackNavigator();
export const Root = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
};
