import React from "react";
import { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/actions/authActions";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { navigate, goBack } = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email && password) {
      dispatch(loginUser(email, password));
      setEmail("");
      setPassword("");
    } else {
      alert("All field are required");
    }
  };

  return (
    <View
      style={{
        flex: 100,
        paddingTop: 50,
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
        <TouchableOpacity style={{ flex: 30 }} onPress={() => goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flex: 40, alignItems: "center" }}>
          <Text style={{ fontSize: 30, alignItems: "center" }}>Login</Text>
        </View>
        <View style={{ flex: 30 }}></View>
      </View>
      <View
        style={{
          flex: 20,
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Text style={{ fontSize: 35 }}>Login to</Text>
        <Text style={{ fontSize: 45, fontWeight: "800" }}>Your Account </Text>
      </View>
      <View
        style={{ flex: 50, alignItems: "center", justifyContent: "center" }}
      >
        <TextInput
          value={email}
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
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: "#3c5ea9",

            width: 360,
            justifyContent: "center",
          }}
          onPress={handleLogin}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 30,
            }}
          >
            Login
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
          flex: 20,
          flexDirection: "row",
          justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        <Text>New to Willet? </Text>
        <TouchableOpacity onPress={() => navigate("RegisterScreen")}>
          <Text style={{ color: "#1BBC2B" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
