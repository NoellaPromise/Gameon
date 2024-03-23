import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView, Image } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={{flexDirection:'row', justifyContent:'space-between', padding:20}}>
        <Text style={{fontSize:17}}>Hello Noella Promise</Text>
        <Image source={require("../assets/images/user-profile.jpg")} style={{width:50,height:50,borderRadius:50}} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
