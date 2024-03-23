import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView, Image,ScrollView,TextInput  } from "react-native";
import { EvilIcons } from '@expo/vector-icons';


const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 14 }}>Hello Noella Promise</Text>
          <Image
            source={require("../assets/images/user-profile.jpg")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        </View>
<View style={{flexDirection:"row", paddingHorizontal:10, paddingVertical:8, borderColor:'#C6C6C6',borderWidth:2,borderRadius:8,marginHorizontal:20}}>
<EvilIcons name="search" size={25} color="#c6c6c6" style={{marginTop:5}}/>
<TextInput placeholder="Search" />
</View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
