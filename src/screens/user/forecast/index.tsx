import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

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
import { RootState } from "../../../app/store";
const Forecast = () => {
  const [forecast, setForecast] = React.useState<WeatherForecast>();
  const { isLoading, ubication } = useSelector(
    (state: RootState) => state.location
  );

  React.useEffect(() => {
    if (isLoading) {
      return;
    }

    fetch(
      `${PREFIX_URL}${API_KEY}${LOCATION_OPTIONS}${ubication.latitude}, ${ubication.longitude}${FORECAST_OPTIONS}`
    )
      .then((res) => res.json())
      .then((data) => setForecast(data))
      .catch((error) => console.log(error));
  }, [ubication]);
  //console.log(forecast);
  return (
    <SafeAreaView style={stylesGlobal.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Predicción</Text>
      </View>
      {!forecast ? (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <View style={styles.container}>
          <ForecastDay {...forecast} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  activity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 0.8,
    marginHorizontal: 10,
  },
  header: {
    flex: 0.2,
    marginTop: 10,
  },
  title: {
    fontSize: 40,
    color: colors.primary,
    marginLeft: 20,
  },
});

export default Forecast;
