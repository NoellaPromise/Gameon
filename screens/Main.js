import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          color: "#20315f",
          marginBottom: 80,
        }}
      >
        GAMEON
      </Text>
      <View>
        <Image
          source={require("../assets/images/game1.png")}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <TouchableOpacity
        onPress={()=>navigation.navigate("Home")}
        style={styles.touchable}
      >
        <Text style={{ color: "white", fontSize: 17, fontWeight: "400" }}>
          Let's begin
        </Text>
        <AntDesign name="right" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Main;

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
    borderRadius: 7,
    height: 60,
    marginTop: 100,
  },
});
