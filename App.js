import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 30, color: "#20315f"}}>
        GAMEON
      </Text>
      <TouchableOpacity style={styles.touchable}>
        <Text style={{ color: "white", fontSize:17 , fontWeight:"400"}}>Let's begin</Text>
        <AntDesign name="right" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  touchable: {
    backgroundColor: "#AD40AF",
    padding: 18,
    margin: 50,
    width: "80%",
   flexDirection: "row",
    justifyContent: "space-between",
    borderRadius:7,
    height:60,
  },
});
