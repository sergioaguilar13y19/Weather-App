import React from "react";
import { Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./style";

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Register</Text>
      <TextInput style={{ borderWidth: 1, height: 40, marginTop: 40 }} />
      <TextInput style={{ borderWidth: 1, height: 40, marginTop: 40 }} />
      <TextInput style={{ borderWidth: 1, height: 40, marginTop: 40 }} />
    </SafeAreaView>
  );
};

export default Register;
