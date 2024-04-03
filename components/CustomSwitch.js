import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomSwitch = ({
  SelectionMode,
  option1,
  option2,
  onSelectionSwitch,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(SelectionMode);
  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectionSwitch(value);
  };
  return (
    <View
      style={{
        height: 50,
        // width:'100%',
        // backgroundColor: "#e4e4e4",
        borderRadius: 10,
        borderColor: "#AD40AF",
        flexDirection: "row",
        // backgroundColor: "#e4e4e4",
        borderRadius: 10,
        borderColor: "#AD40AF",
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 20,
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? "#AD40AF" : "#e4e4e4",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          //   margin:4,
          padding: 7,
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 1 ? "white" : "#AD40AF",

            fontSize: 14,
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? "#AD40AF" : "#e4e4e4",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          // margin:4,
          padding: 7,
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 2 ? "white" : "#AD40AF",

            fontSize: 14,
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSwitch;
