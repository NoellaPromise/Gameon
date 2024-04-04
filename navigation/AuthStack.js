import React from "react";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={OnboardingScreen}
        name="Onboarding"
        options={{ headerShown: false }}
      />
      <Stack.Screen component={LoginScreen} name="Login" />
    </Stack.Navigator>
  );
};

export default AuthStack;
