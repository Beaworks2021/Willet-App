import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "./navOptions";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrackScreen from "./TrackScreen";
import Profile from "./Profile";
import HomeDetails from "./HomeDetails";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function Home({ navigation }) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeDetails"
        component={HomeDetails}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TrackScreen"
        component={TrackScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color, size }) => (
            <Feather name="package" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Home;
