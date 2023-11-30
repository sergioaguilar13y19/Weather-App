import React from "react";
import { Text, View } from "react-native";

import { WeatherForecast } from "../../api/types";
const ForeCastDay = ({ forecast }: WeatherForecast) => {
  const { forecastday } = forecast || {};
  console.log(forecastday);
  return (
    <View>
      {forecastday?.map(({ date}, index) => <Text key={index}>{date}</Text>)}
    </View>
  );
};

export default ForeCastDay;
