import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login,Register } from '../../screens';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

