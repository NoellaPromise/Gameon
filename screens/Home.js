import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import { freeGames, paidGames, sliderData } from "../model/data";
import BannerSlider from "../components/BannerSlider";
import { windowWidth } from "../utils/Dimensions";
import CustomSwitch from "../components/CustomSwitch";
import ListItem from "../components/ListItem";

const Home = () => {
  const [gamesTab, setGamesTab] = useState(1);
  const renderBanner = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  const onSelectionSwitch = (value) => {
    setGamesTab(value);
  };
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
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderColor: "#C6C6C6",
            borderWidth: 2,
            borderRadius: 8,
            marginHorizontal: 20,
          }}
        >
          <EvilIcons
            name="search"
            size={25}
            color="#c6c6c6"
            style={{ marginTop: 5 }}
          />
          <TextInput placeholder="Search" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 17,
            paddingTop: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17, paddingBottom: 20 }}>
            Upcoming Games
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#0aada8" }}>See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
        <View>
          <CustomSwitch
            SelectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectionSwitch={onSelectionSwitch}
          />
        </View>
        {gamesTab == 1 &&
          freeGames.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              
            />
          ))}
       {gamesTab == 2 &&
          paidGames.map((item) => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price ={item.price}
              
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
