import { StyleSheet, Text, View, SafeAreaView, inputRef } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { setDestination, setOrigin } from "../Redux/actions/userActions";
import { useNavigation } from "@react-navigation/native";
import CourierType from "./CourierType";
import NavFavs from "./NavFavs";
import { TouchableOpacity } from "react-native";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const dest = useSelector((state) => state.userReducers.destination);
  const { navigate, goBack } = useNavigation();

  console.log("fhjkbkhbkl", dest);
  return (
    <SafeAreaView>
      <Text
        style={{
          textAlign: "center",
          marginTop: 25,
          fontSize: 15,
          fontWeight: "500",
        }}
      >
        Tell us where your package destination
      </Text>
      <View>
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
              height: 70,

              textAlign: "center",
              marginTop: 20,
              //   width: 350,
              // borderWidth: StyleSheet.hairlineWidth,
              borderBottomWidth: 1,
              borderBottomColor: "lightgray",
            },
          }}
          placeholder="Package Destination"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigate("CourierType");
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: "AIzaSyCpOAReGS-lFwoHzbOE9qzqObYrvhb36D0",
            language: "en",
          }}
          debounce={400}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
