import React from "react";
import { Text, View } from "react-native";

import { Hour } from "../../api/types";

const ForecastHour = ({ temp_c, condition, time_epoch}: Hour) => {
  return (
    <View>
      <Text>ForecastHour</Text>
    </View>
  );
};

export default ForecastHour;
