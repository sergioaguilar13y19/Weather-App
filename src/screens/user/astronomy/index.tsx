import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesGlobal } from "../../../styles";
import { colors } from "../../../constants/colors";
import { useSelector } from "react-redux";
import {
  PREFIX_URL_ASTRONOMY,
  API_KEY,
  LOCATION_OPTIONS,
  DAY_OPTIONS,
} from "../../../api";
import { Astro } from "../../../api/types";
import { RootState } from "../../../app/store";

function getDate() {
  const fecha = new Date();
  const año = fecha.getFullYear();
  const mes = ("0" + (fecha.getMonth() + 1)).slice(-2); // Añade un cero al inicio si el mes es menor a 10
  const dia = ("0" + fecha.getDate()).slice(-2); // Añade un cero al inicio si el día es menor a 10
  const fechaFormateada = `${año}-${mes}-${dia}`;
  return fechaFormateada;
}

const Astronomy = () => {
  const { isLoading, ubication } = useSelector(
    (state: RootState) => state.location
  );
  const [astronomy, setAstronomy] = React.useState<Astro>();

  React.useEffect(() => {
    const fechaFormateada = getDate();
    if (isLoading) {
      return;
    }
    fetch(
      `${PREFIX_URL_ASTRONOMY}${API_KEY}${LOCATION_OPTIONS}${ubication.latitude},${ubication.longitude}${DAY_OPTIONS}${fechaFormateada}`
    )
      .then((response) => response.json())
      .then((data) => setAstronomy(data.astronomy.astro))
      .catch((error) => console.log(error));
  }, [ubication]);

  return (
    <SafeAreaView style={stylesGlobal.container}>
      {astronomy ? (
        <View style={style.container}>
          <Text style={style.text}>Amanecer : {astronomy?.sunrise}</Text>
          <Text style={style.text}>Atardecer : {astronomy?.sunset}</Text>
          <Text style={style.text}>
            Iluminación lunar : {astronomy?.moon_illumination}
          </Text>
          <Text style={style.text}>Fase lunar : {astronomy?.moon_phase}</Text>
        </View>
      ) : (
        <View style={style.activity}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  activity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 0.5,
    width: "72%",
    backgroundColor: "#87CEEB",
    margin: 10,
    padding: 30,
    borderRadius: 15,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default Astronomy;
