import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  API_KEY,
  PREFIX_URL,
  FORECAST_OPTIONS,
  LOCATION_OPTIONS,
} from "../../../api";
import { stylesGlobal } from "../../../styles";
import { ForecastDay } from "../../../components";
import { WeatherForecast } from "../../../api/types";
import { colors } from "../../../constants/colors";
const Forecast = () => {
  const [forecast, setForecast] = React.useState<WeatherForecast>();

  React.useEffect(() => {
    fetch(
      `${PREFIX_URL}${API_KEY}${LOCATION_OPTIONS}16.752659, -93.095061${FORECAST_OPTIONS}`
    )
      .then((res) => res.json())
      .then((data) => setForecast(data))
      .catch((error) => console.log(error));
  }, []);
  //console.log(forecast);
  return (
    <SafeAreaView style={stylesGlobal.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Predicción</Text>
      </View>
      <View style={styles.container}>
        <ForecastDay {...forecast} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    marginHorizontal: 10,
  },
  header: {
    flex: 0.1,
  },
  title: {
    fontSize: 40,
    color: colors.primary,
    marginLeft: 20,
  },
});

export default Forecast;
