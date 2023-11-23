import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./style";
import { isValidEmail, isValidPassword } from "..";
import { Checkbox, Input } from "../../../components";
import { words, alerts } from "../../../constants";
import { PropsAuthStack } from "../../../navigation/auth/types";

const { title, placeHolder, actionShowPassword, btn, inputName } =
  words.es.auth.login;
const { warns } = words.es;

const isEmpty = (value: string) => !value.trim().length;

const Login = ({ navigation }: PropsAuthStack) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const seePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = () => {
    if (isEmpty(email) && isEmpty(password)) {
      alerts.empty(warns.empty);
      return;
    }
    console.log("login");
  };
  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder={placeHolder.email}
          keyboardType="email-address"
          autoComplete="off"
          name={inputName.email}
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder={placeHolder.password}
          secureTextEntry={!showPassword}
          autoComplete="off"
          name={inputName.password}
        />
        <Checkbox
          checked={showPassword}
          onChange={seePassword}
          text={actionShowPassword}
        />
      </View>
      <View style={styles.bodyContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>{btn.login}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleRegister}>
          <Text style={styles.buttonText}>{btn.register}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
