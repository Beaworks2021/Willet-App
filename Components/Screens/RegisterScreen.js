import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "../Redux/actions/authActions";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const dispatch = useDispatch();

  const handleRegister = () => {
    if (fullName && email && phoneNumber && password) {
      if (password === repeatPassword) {
        let data = {
          phoneNumber,
          email,
          fullName,
          password,
        };

        dispatch(createUserWithEmailAndPassword(data));

        setEmail("");
        setFullName("");
        setPassword("");
        setRepeatPassword("");
        setPhoneNumber("");
      } else alert("Password does not match");
    } else alert("All fields are required");
  };

  return (
    <View
      style={{
        flex: 100,
        paddingHorizontal: 15,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          flex: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{ flex: 30 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flex: 40, alignItems: "center" }}>
          <Text style={{ fontSize: 30, alignItems: "center" }}>Register</Text>
        </View>
        <View style={{ flex: 30 }}></View>
      </View>
      <View
        style={{
          flex: 10,
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Text style={{ fontSize: 35 }}>Sign Up</Text>
        <Text style={{ fontSize: 40, fontWeight: "800" }}>
          For A New Account
        </Text>
      </View>
      <View
        style={{ flex: 60, alignItems: "center", justifyContent: "center" }}
      >
        <TextInput
          value={fullName}
          onChangeText={(value) => setFullName(value)}
          style={{
            height: 60,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: 360,
          }}
          placeholder="Full Name"
        />
        <TextInput
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          style={{
            height: 60,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: 360,
          }}
          placeholder="Email"
        />
        <TextInput
          value={phoneNumber}
          onChangeText={(value) => setPhoneNumber(value)}
          style={{
            height: 60,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: 360,
          }}
          placeholder="Phone Number"
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={{
            height: 60,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: 360,
          }}
          placeholder="Password"
        />
        <TextInput
          value={repeatPassword}
          onChangeText={(value) => setRepeatPassword(value)}
          style={{
            height: 60,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: 360,
          }}
          placeholder="Repeat Password"
        />
        <TouchableOpacity
          onPress={handleRegister}
          style={{
            height: 60,
            backgroundColor: "#3c5ea9",

            width: 360,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 30,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "black",
              width: 20,
            }}
          />
          <View>
            <Text style={{ width: 110, textAlign: "center" }}>
              or continue with
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>
        <TouchableOpacity
          style={{
            marginTop: 20,
            height: 60,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "grey",
            width: 360,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "grey",
              fontSize: 20,
            }}
          >
            Continue with Gmail
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={{ color: "#1BBC2B" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
