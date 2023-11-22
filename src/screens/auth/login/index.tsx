import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { words } from "../../../constants";
import { Checkbox, Input } from "../../../components";
import { styles } from "./style";
const { title, placeHolder, actionShowPassword } = words.es.auth.login;
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  function seePassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.formContainer}>
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder={placeHolder.email}
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder={placeHolder.password}
        secureTextEntry={!showPassword}
      />
      <Checkbox
        checked={showPassword}
        onChange={seePassword}
        text={actionShowPassword}
      />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
