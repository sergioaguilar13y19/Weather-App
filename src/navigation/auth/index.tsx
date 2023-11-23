import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { AuthStackParamList } from "./types";
import { words } from "../../constants";
import { Login, Register } from "../../screens";
const Stack = createNativeStackNavigator<AuthStackParamList>();
const { title } = words.es.auth.login;
export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title, headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTransparent: true,
          headerBackTitleVisible: true,
          headerBackTitle: title,
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};
