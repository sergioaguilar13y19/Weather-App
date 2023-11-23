import { Alert } from "react-native";

export const words = {
  es: {
    auth: {
      login: {
        title: "Iniciar sesión",
        actionShowPassword: "Mostrar contraseña",
        placeHolder: {
          email: "example@example.com",
          password: "*********",
        },
        inputName: {
          email: "Correo electrónico",
          password: "Contraseña",
        },
        btn: {
          login: "Iniciar sesión",
          register: "Registrarse",
        },
      },
      register: {
        title: "Registrarse",
        action: "Guardar",
        placeHolder: {
          email: "example@example.com",
          name: "Nombre",
          password: "**********",
          confirmPassword: "**********",
        },
      },
    },
    warns: {
      empty: "Rellene todos los campos",
      email: "El email no es valido",
      password: `La contraseña no es valida`,
    },
  },
};

export const alerts = {
  empty: (message: string) =>
    Alert.alert("Error", message, [{ text: "Aceptar" }]),
};
