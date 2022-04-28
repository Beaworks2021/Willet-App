import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const StatusPage = () => {
  const { navigate, goBack } = useNavigation();
  return (
    <View style={{ backgroundColor: "white" }}>
      <TouchableOpacity
        onPress={() => navigate("TrackScreen")}
        style={tw`absolute rounded-full shadow-lg left-5 z-40 p-3 bg-gray-100 mt-4`}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image
        style={{
          width: 400,
          height: 700,
          marginLeft: 60,
          marginTop: 1,
        }}
        source={require("../../assets/dummystatus.png")}
      />
    </View>
  );
};

export default StatusPage;

const styles = StyleSheet.create({});
