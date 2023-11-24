import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { AuthStack } from "./auth";
import { BottomNavigator } from "./user";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";

const Stack = createStackNavigator();

export const Root = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};
