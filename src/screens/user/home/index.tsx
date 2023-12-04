import * as Location from "expo-location";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import {
  API_KEY,
  PREFIX_URL,
  AQUI_OPTIONS,
  LOCATION_OPTIONS,
} from "../../../api";
import { WeatherData } from "../../../api/types";
import { RootState } from "../../../app/store";
import { CardHeader, CardBody, Button } from "../../../components";
import { setLocation } from "../../../features/location/locationSlice";
import { colors } from "../../../constants/colors";

import { singOut } from "../../../features/auth/authSlice";

const Home = () => {
  const { name } = useSelector((state: RootState) => state.auth);
  const { ubication, isLoading } = useSelector(
    (state: RootState) => state.location
  );
  const [weather, setWeather] = React.useState<WeatherData>();
  const dispatch = useDispatch();
  console.log(ubication);
  //const name = 'Sergio Aguilar'
  React.useEffect(() => {
    if (!ubication.latitude || !ubication.longitude) {
      return;
    }
    fetch(
      `${PREFIX_URL}${API_KEY}${LOCATION_OPTIONS}${ubication.latitude}, ${ubication.longitude}${AQUI_OPTIONS}`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error));
  }, [ubication]);

  React.useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          alert("Permission to access location was denied");
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        console.log(location, "location in home");
        if (location) {
          const { longitude, latitude } = location.coords;
          console.log(latitude, longitude);
          const latitudFixed = parseFloat(latitude.toFixed(4));
          const longitudFixed = parseFloat(longitude.toFixed(4));
          dispatch(
            setLocation({
              ubication: { latitude: latitudFixed, longitude: longitudFixed },
            })
          );
        }
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  const handleSingOut = () => {
    dispatch(singOut());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnContainer}>
        <Button name="Cerrar Sesión" onPress={handleSingOut} />
      </View>
      <Text style={styles.headerTitle}>{name}</Text>
      {!weather ? (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
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
      )}
    </SafeAreaView>
  );
};

export default Home;
