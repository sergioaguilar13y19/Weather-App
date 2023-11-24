import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Forecast, Astronomy } from "../../screens";
import { BottomNavigatorProps } from "./types";

const Tab = createBottomTabNavigator<BottomNavigatorProps>();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Forecast" component={Forecast} />
      <Tab.Screen name="Astronomy" component={Astronomy} />
    </Tab.Navigator>
  );
};
