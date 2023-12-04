import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

import { Hour } from "../../api/types";
import { colors } from "../../constants/colors";

type props = {
  hour: Hour[];
  date: string;
};

const getHour = (prop: number) => {
  const date = new Date(prop * 1000);
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const am_pm = date.getHours() >= 12 ? "pm" : "am";
  const time = hours + am_pm;
  return time;
};
const formatDate = (date: string) => {
  const fecha = new Date(date);
  fecha.setDate(fecha.getDate() + 1);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const fechaFormateada = fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return fechaFormateada; // Imprime: "domingo 3 de diciembre de 2023"
};
const ForecastHour = ({ hour, date }: props) => {
  console.log(date);
  return (
    <>
      <Text style={styles.title}>{formatDate(date)}</Text>
      <ScrollView horizontal style={styles.scroll}>
        {hour?.map(({ time_epoch, temp_c, condition }, index) => {
          const TEMP_C = Math.round(temp_c);
          return (
            <View style={styles.container} key={index}>
              <Text>{getHour(time_epoch)}</Text>
              <Image
                source={{ uri: `https:${condition.icon}` }}
                style={styles.img}
              />
              <Text>{TEMP_C} C</Text>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    marginBottom: 50,
  },
  title: {
    fontSize: 20,
    color: colors.primary,
  },
  img: {
    height: 60,
    width: 70,
    resizeMode: "contain",
  },
  container: {
    height: 100,
    width: 70,
    alignItems: "center",
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 10,
  },
});

export default ForecastHour;
