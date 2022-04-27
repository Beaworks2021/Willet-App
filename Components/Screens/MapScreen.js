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
  ScrollView,
  Dimensions,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "../Redux/actions/authActions";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const MapScreen = ({ navigation }) => {
  const [senderPhoneNumber, setSenderPhoneNumber] = useState("");
  const [senderFullName, setSenderFullName] = useState("");
  const [itemContent, setItemContent] = useState("");

  const [recieverFullName, setRecieverFullName] = useState("");
  const [recieverPhoneNumber, setRecieverPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const courier = useRoute().params;

  const handleProceed = () => {
    let data = {
      courier,
      senderFullName,
      senderPhoneNumber,
      itemContent,
      recieverFullName,
      recieverPhoneNumber,
    };

    navigate("Confirm", data);
  };

  return (
    <ScrollView style={{}}>
      <View
        style={{
          flex: 100,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          marginBottom: 100,
        }}
      >
        <View
          style={{
            height: 70,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{ flex: 10 }}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <View style={{ flex: 40, alignItems: "center" }}>
            <Text style={{ fontSize: 24, alignItems: "center" }}>
              Send Package
            </Text>
          </View>
          <View style={{ flex: 10 }}></View>
        </View>
        <View
          style={{
            flex: 10,
            justifyContent: "center",
            paddingLeft: 20,
          }}
        >
          <Text style={{ fontSize: 24 }}>Provide details</Text>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            to send any package
          </Text>
        </View>

        {/* forms  */}
        <View
          style={{ flex: 60, alignItems: "center", justifyContent: "center" }}
        >
          <TextInput
            value={senderFullName}
            onChangeText={(value) => setSenderFullName(value)}
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
            value={senderPhoneNumber}
            onChangeText={(value) => setSenderPhoneNumber(value)}
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
            value={itemContent}
            onChangeText={(text) => setItemContent(text)}
            style={{
              height: 60,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              width: 360,
            }}
            placeholder="Description / Content / Item"
          />
        </View>

        {/* reciever forms  */}
        <View
          style={{ flex: 60, alignItems: "center", justifyContent: "center" }}
        >
          <View>
            <Text>Reciever Details</Text>
          </View>
          <TextInput
            value={recieverFullName}
            onChangeText={(value) => setRecieverFullName(value)}
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
            value={recieverPhoneNumber}
            onChangeText={(value) => setRecieverPhoneNumber(value)}
            style={{
              height: 60,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              width: 360,
            }}
            placeholder="Phone Number"
          />

          <TouchableOpacity
            onPress={handleProceed}
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
              Proceed
            </Text>
          </TouchableOpacity>
          {/* <GooglePlacesAutocomplete
            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                fontSize: 18,
              },
            }}
            placeholder="Search"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true 
              console.log(data, details);
            }}
            query={{
              key: "AIzaSyCpOAReGS-lFwoHzbOE9qzqObYrvhb36D0",
              language: "en",
            }}
          /> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default MapScreen;
