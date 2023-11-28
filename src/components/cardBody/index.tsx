import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { AirQuality } from "../../api/types";

type Props = {
  humidity: number;
  precip_mm: number;
  air_quality: AirQuality;
  wind_kph: number;
};
function calcularCalidadDelAire(air_quality: AirQuality) {
  const usEpaIndex = air_quality["us-epa-index"];
  const gbDefraIndex = air_quality["gb-defra-index"];

  if (usEpaIndex === 1 && gbDefraIndex === 1) {
    return "Buena";
  } else if (usEpaIndex <= 2 && gbDefraIndex <= 3) {
    return "Moderada";
  } else {
    return "Mala";
  }
}

const CardBody = ({ precip_mm, humidity, air_quality, wind_kph }: Props) => {
  const AIR_QUALITY = calcularCalidadDelAire(air_quality);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Humedad: {humidity}</Text>
      <Text style={styles.text}>Precipitación: {precip_mm}</Text>
      <Text style={styles.text}>Calidad del aire: {AIR_QUALITY}</Text>
      <Text style={styles.text}>Viento: {wind_kph} Km/H</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "72%",
    backgroundColor: "#87CEEB",
    margin: 10,
    padding: 30,
    borderRadius: 15,
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});
export default CardBody;
