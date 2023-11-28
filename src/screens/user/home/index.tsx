import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { Card } from "../../../components";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <View style={styles.cardContainer}>
        <Card
          temp_c={26.0}
          temp_f={78.8}
          name="Tuxtla Gutierrez"
          region="Chiapas"
          icon="https://cdn.weatherapi.com/weather/64x64/night/116.png"
          isLoading={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
