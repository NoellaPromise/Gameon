import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcon from "react-native-vector-icons"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 30, color: "#20315f" }}>
        GAMEON
      </Text>
      <TouchableOpacity>
        <Text>Let's begin</Text>
        {/* <MaterialIcon name='NavigateNextIcon' /> */}

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
});
