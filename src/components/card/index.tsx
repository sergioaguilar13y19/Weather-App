import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

type Props = {
  temp_c: number;
  temp_f: number;
  name: string;
  region: string;
  icon: string;
  isLoading?: boolean;
};

const Card = ({
  temp_c,
  temp_f,
  name,
  region,
  icon,
  isLoading = false,
}: Props) => {
  const TEMP_C = Math.round(temp_c);
  const TEMP_F = Math.round(temp_f);
  const TIME_TXT = `Temperatura: ${TEMP_C}C / ${TEMP_F}F`;
  return (
    <View style={styles.container}>
      <Image source={{ uri: icon }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{TIME_TXT}</Text>
        <Text style={styles.text}>
          {name}, {region}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "72%",
    backgroundColor: "#87CEEB",
    alignItems: "center",
    margin: 10,
    padding: 30,
    borderRadius: 15,
  },
  textContainer: {
    justifyContent: "flex-end",
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default Card;
