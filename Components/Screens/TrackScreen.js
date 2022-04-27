import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const TrackScreen = () => {
  const { userData } = useSelector((state) => state.userReducers);

  console.log(userData);
  return (
    <View>
      {userData?.packages.length === 0 ? (
        <Text>No Package</Text>
      ) : (
        <FlatList
          data={userData?.packages}
          keyExtractor={(item, index) => `package-${index}`}
          renderItem={({ item }) => {}}
        />
      )}
    </View>
  );
};

export default TrackScreen;

const styles = StyleSheet.create({});
