import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from "./screens/Home";
import OnboardingScreen from "./screens/OnboardingScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={OnboardingScreen} name="OnboardingScreen" options={{headerShown:false}} />
        <Stack.Screen component={Home} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
