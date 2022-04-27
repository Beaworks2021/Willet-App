import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const TrackScreen = () => {
  const {userData} = useSelector((state) => state.userReducers)

  console.log(userData);
  return (
    <View>
      <Text>TrackScreen</Text>
    </View>
  );
};

export default TrackScreen;

const styles = StyleSheet.create({});
