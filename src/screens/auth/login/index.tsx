import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";
import { Checkbox, Input } from "../../../components";
import { words } from "../../../constants";
import { PropsAuthStack } from "../../../navigation/auth/types";

const { title, placeHolder, actionShowPassword, btn } = words.es.auth.login;

const Login = ({ navigation }: PropsAuthStack) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const seePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = () => {
    console.log("login");
  };
  const handleRegister = () => {
    console.log("register");
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
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder={placeHolder.password}
          secureTextEntry={!showPassword}
          autoComplete="off"
        />
        <Checkbox
          checked={showPassword}
          onChange={seePassword}
          text={actionShowPassword}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>{btn.login}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
        <Text style={styles.buttonText}>{btn.register}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
