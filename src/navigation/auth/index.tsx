import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform } from "react-native";

import { AuthStackParamList } from "./types";
import { words } from "../../constants";
import { colors } from "../../constants/colors";
import { Login, Register } from "../../screens";

const Stack = createNativeStackNavigator<AuthStackParamList>();
const { title } = words.es.auth.login;
const isIos = Platform.OS === "ios";
const configRegister = {
  headerTransparent: true,
  headerBackTitle: title,
  title: "",
  headerTintColor: colors.secondary,
};

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
        options={configRegister}
      />
    </Stack.Navigator>
  );
};
