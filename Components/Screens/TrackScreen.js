import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const TrackScreen = () => {
  const { userData } = useSelector((state) => state.userReducers);

  console.log(userData);
  return (
    <View>
<<<<<<< HEAD
      {!userData?.packages ? (
=======
      {!userData?.packages === 0 ? (
>>>>>>> e6dce698a8a22fdc711413ddf8c492c5203880a9
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
