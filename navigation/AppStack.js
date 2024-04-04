import React from "react";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import Home from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        component={OnboardingScreen}
        name="Onboarding"
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  );
};

export default AppStack;
