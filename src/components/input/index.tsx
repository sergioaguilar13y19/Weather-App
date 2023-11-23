import React from "react";
import {
  TextInput,
  TextInputProps,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { styles } from "./style";
const Input = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  keyboardType,
  autoComplete,
}: TextInputProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
      />
    </KeyboardAvoidingView>
  );
};

export default Input;
