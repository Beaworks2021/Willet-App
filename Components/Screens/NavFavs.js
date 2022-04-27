import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native-web";

const NavFavs = () => {
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "dansoman roundabout",
    },
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "dansoman roundabout",
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtrator={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>Yo</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavs;

const styles = StyleSheet.create({});
