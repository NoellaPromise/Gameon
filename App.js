import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppStack from "./navigation/AppStack";
import AuthStack from "./navigation/AuthStack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppStack />
        {/* <AuthStack/> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
