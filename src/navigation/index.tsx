import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { AuthStack } from "./auth";
import { BottomNavigator } from "./user";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { setUsers } from "../features/auth/authSlice";

const Stack = createStackNavigator();

export const Root = () => {
  //const { token } = useSelector((state: RootState) => state.auth);
  const token = true;
  const dispatch = useDispatch();

  React.useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@users");
        if (jsonValue != null) {
          const users = JSON.parse(jsonValue);
          dispatch(setUsers(users));
        }
      } catch (e) {
        console.warn(e);
      }
      //setIsLoading(false);
    };
    getData();
  }, []);

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
