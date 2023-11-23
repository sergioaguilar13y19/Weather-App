import { FontAwesome5 } from "@expo/vector-icons";
import React, { useRef } from "react";
import {
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { colors } from "../../constants/colors";

const CustomCheckbox = ({ checked, onChange, text }: any) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  const toggleCheckbox = () => {
    const toValue = checked ? 0 : 1;
    Animated.timing(scaleValue, {
      toValue,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    onChange();
  };

  const animatedScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 1.2, 1],
  });

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 3,
        //borderWidth: 1,
      }}>
      <TouchableOpacity activeOpacity={0.6} onPress={toggleCheckbox}>
        <Animated.View
          style={[
            styles.checkbox,
            {
              transform: [{ scale: animatedScale }],
              backgroundColor: checked ? colors.primary : "transparent",
            },
          ]}>
          {checked && (
            <FontAwesome5 name="check" size={16} color={colors.secondary} />
          )}
        </Animated.View>
      </TouchableOpacity>
      <Text style={styles.label}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.secondary,
  },
});

export default CustomCheckbox;
