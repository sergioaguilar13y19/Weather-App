import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { RootState } from "../../../app/store";
import { CardHeader, CardBody } from "../../../components";
import {
  API_KEY,
  PREFIX_URL,
  AQUI_OPTIONS,
  LOCATION_OPTIONS,
} from "../../../api";
import { WeatherData } from "../../../api/types";

const Home = () => {
  const { name } = useSelector((state: RootState) => state.auth);
  const [weather, setWeather] = React.useState<WeatherData>();
  //const name = 'Sergio Aguilar'
  React.useEffect(() => {
    fetch(
      `${PREFIX_URL}${API_KEY}${LOCATION_OPTIONS}16.752659, -93.095061${AQUI_OPTIONS}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>{name}</Text>
      <View style={styles.contentBody}>
        <View style={styles.cardContainer}>
          {weather && (
            <CardHeader
              {...weather.current}
              icon={weather?.current?.condition.icon || ""}
              {...weather.location}
            />
          )}
        </View>
        <View style={styles.cardBody}>
          {weather && (
            <CardBody
              humidity={weather?.current?.humidity || 0}
              precip_mm={weather?.current?.precip_mm || 0}
              air_quality={weather?.current?.air_quality || 0}
              wind_kph={weather?.current?.wind_kph || 0}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
