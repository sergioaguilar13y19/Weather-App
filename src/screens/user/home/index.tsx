import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { RootState } from "../../../app/store";
import { CardHeader, CardBody } from "../../../components";

const Home = () => {
  const { name } = useSelector((state: RootState) => state.auth);
  //const name = 'Sergio Aguilar'
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>{name}</Text>
      <View style={styles.contentBody}>
        <View style={styles.cardContainer}>
          <CardHeader
            temp_c={26.0}
            temp_f={78.8}
            name="Tuxtla Gutierrez"
            region="Chiapas"
            icon="https://cdn.weatherapi.com/weather/64x64/night/116.png"
            isLoading={false}
          />
        </View>
        <View style={styles.cardBody}>
          <CardBody
            humidity={80}
            precip_mm={0}
            air_quality={{
              co: 217.0,
              no2: 3.1,
              o3: 25.4,
              so2: 1.1,
              pm2_5: 1.4,
              pm10: 1.7,
              "us-epa-index": 1,
              "gb-defra-index": 1,
            }}
            wind_kph={10}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
