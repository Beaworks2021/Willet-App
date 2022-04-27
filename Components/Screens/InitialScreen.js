import React from "react";
import { Text, View, Image, StatusBar, TouchableOpacity } from "react-native";

const InitialScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 100,
        backgroundColor: "#3c5ea9",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 15 }}></View>
      <View style={{ flex: 25 }}>
        <Image
          source={require("../../assets/splashlogo.png")}
          style={{
            width: 300,
            height: 300,
          }}
        />
      </View>

      <View
        style={{
          flex: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            paddingHorizontal: 150,
            paddingVertical: 25,
            borderRadius: 50,
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text
            style={{
              color: "#3c5ea9",
              fontSize: 30,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            paddingHorizontal: 135,
            paddingVertical: 25,
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text
            style={{
              color: "#3c5ea9",
              fontSize: 30,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InitialScreen;
