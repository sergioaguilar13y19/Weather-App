import React from "react";
import { Text, TextInput, TextInputProps } from "react-native";

import { styles } from "./style";
type customProps = { name: string };
type Props = TextInputProps & customProps;

const Input = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  keyboardType,
  autoComplete,
  name,
}: Props) => {
  return (
    <>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
      />
    </>
  );
};

export default Input;
