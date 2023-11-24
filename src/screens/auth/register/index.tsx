import React from "react";
import { Text, SafeAreaView, View } from "react-native";
//import { SafeAreaView } from "react-native-safe-area-context";
import { RootState } from "../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../../../features/auth/authSlice";
import { PropsAuthStack } from "../../../navigation/auth/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./style";
import { Input, Button } from "../../../components";
import { words, alerts } from "../../../constants";
const { action, title, placeHolder, inputName } = words.es.auth.register;
const { warns } = words.es;

const Register = ({ navigation }: PropsAuthStack) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.auth);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [passwordValidate, setPasswordValidate] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isEmpty = (value: string) => !value.trim().length;
  const validateInputs = () => {
    return isEmpty(name) || isEmpty(email) || isEmpty(password);
  };
  const diferentPassword = () => password !== passwordValidate;

  const saveUsers = async (users: any) => {
    try {
      const jsonValue = JSON.stringify(users);
      await AsyncStorage.setItem("@users", jsonValue);
    } catch (e) {
      console.warn(e);
    }
  };
  const handleSave = () => {
    if (validateInputs()) {
      alerts.empty(warns.empty);
      return;
    }
    if (diferentPassword()) {
      alerts.empty(warns.password);
      return;
    }
    const myUser = users.find((user) => user.email === email.toLowerCase());
    if (myUser) {
      alerts.empty(warns.userExist);
      return;
    }
    const newUser = { name, email: email.toLowerCase(), password };
    saveUsers([...users, newUser]);
    dispatch(setUsers([...users, newUser]));
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Input
          name={inputName.name}
          onChangeText={setName}
          placeholder={placeHolder.name}
        />
        <Input
          name={inputName.email}
          onChangeText={setEmail}
          placeholder={placeHolder.email}
        />
        <Input
          name={inputName.password}
          onChangeText={setPassword}
          placeholder={placeHolder.password}
        />
        <Input
          name={inputName.passwordValidate}
          onChangeText={setPasswordValidate}
          placeholder={placeHolder.confirmPassword}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button name={action} onPress={handleSave} />
      </View>
    </SafeAreaView>
  );
};

export default Register;
