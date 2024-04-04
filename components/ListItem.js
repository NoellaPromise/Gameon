import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ListItem = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        marginRight: 20,
        marginTop:8
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Image
          source={require("../assets/images/FarCry6 (1).png")}
          style={{
            width: 55,
            height: 55,
            borderRadius: 10,
            marginLeft: 30,
            marginRight: 8,
          }}
        />
        <View>
          <Text>Marvel</Text>
          <Text>SPIDER-MAN</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#0aada8",
          padding: 18,
          width: 100,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 14 }}>
          Play
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
