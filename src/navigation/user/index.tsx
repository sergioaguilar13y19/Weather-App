import { FontAwesome, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { BottomNavigatorProps } from "./types";
import { colors } from "../../constants/colors";
import { Home, Forecast, Astronomy } from "../../screens";

const Tab = createBottomTabNavigator<BottomNavigatorProps>();

export const BottomNavigator = () => {
  const config = {
    headerShown: false,
    tabBarShowLabel: false,
  };

  return (
    <Tab.Navigator screenOptions={config}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cloud" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Forecast"
        component={Forecast}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="location-arrow" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Astronomy"
        component={Astronomy}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="sunrise" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
