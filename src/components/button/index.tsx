import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { colors } from "../../constants/colors";
type Props = TouchableOpacityProps & { name: string };

const Button = ({ name, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    width: "90%",
    padding: 10,
    marginTop: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Button;
