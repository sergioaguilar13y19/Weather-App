import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import { WeatherForecast } from "../../api/types";
import ForecastHour from "../forecastHour";
const ForeCastDay = ({ forecast, current }: WeatherForecast) => {
  const { forecastday } = forecast || {};
  return (
    <View style={styles.container}>
      {forecastday?.map(({ hour, date }, index) => (
        <ForecastHour key={index} hour={hour} date={date} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ForeCastDay;
