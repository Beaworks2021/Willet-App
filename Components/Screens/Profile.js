import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { signOut } from "../Redux/actions/authActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userData } = useSelector((state) => state.userReducers);
  console.log("PRO===============", userData);
  const dispatch = useDispatch();
  return (
    <View data={userData[0]} style={{ paddingHorizontal: 60 }}>
      <Text style={{ fontSize: 40, marginVertical: 50, fontWeight: "600" }}>
        Profile
      </Text>
      <Text style={{ fontSize: 25 }}>Anthony Bassaw</Text>
      <Text style={{ color: "gray" }}>0541913151</Text>
      <Text style={{ color: "gray" }}>ekowworks@gmail.com</Text>
      <Text style={{ fontSize: 20, marginVertical: 30, color: "gray" }}>
        About Us
      </Text>
      <Text style={{ fontSize: 20, marginVertical: 30, color: "gray" }}>
        Help
      </Text>
      <TouchableOpacity onPress={() => dispatch(signOut())}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
            color: "red",
            marginTop: 20,
          }}
        >
          Sign out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
