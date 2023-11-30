import React from "react";
import { Text } from "react-native";
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
const Forecast = () => {
  const [forecast, setForecast] = React.useState<WeatherForecast>();

  React.useEffect(() => {
    fetch(`${PREFIX_URL}${API_KEY}${LOCATION_OPTIONS}London${FORECAST_OPTIONS}`)
      .then((res) => res.json())
      .then((data) => setForecast(data))
      .catch((error) => console.log(error));
  }, []);
  //console.log(forecast);
  return (
    <SafeAreaView style={stylesGlobal.container}>
      <Text>Predicción</Text>
      <ForecastDay {...forecast} />
    </SafeAreaView>
  );
};

export default Forecast;
