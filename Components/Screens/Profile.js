import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { signOut } from "../Redux/actions/authActions";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(signOut())}>
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
