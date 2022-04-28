import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import NavOptions from "./navOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserData,
  setDestination,
  setOrigin,
} from "../Redux/actions/userActions";

const HomeDetails = ({ navigation }) => {
  const dispatch = useDispatch();
  const origin = useSelector((state) => state.userReducers.origin);
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const getAllUserData = dispatch(getUserData());
    return () => getAllUserData;
  }, []);

  // animation
  // const moveInput = useRef(
  //   new Animated.Value(Dimensions.get("window").height - 350)
  // ).current;
  // const changeBgColor = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   if (isFocused) {
  //     Animated.sequence([
  //       Animated.timing(moveInput, {
  //         toValue: 50,
  //         easing: Easing.inOut(Easing.ease),
  //         duration: 800,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(changeBgColor, {
  //         toValue: 1,
  //         duration: 500,
  //         easing: Easing.inOut(Easing.ease),
  //         useNativeDriver: true,
  //       }),
  //     ]).start();
  //   } else {
  //     Animated.sequence([
  //       Animated.timing(moveInput, {
  //         toValue: Dimensions.get("window").height - 350,
  //         easing: Easing.inOut(Easing.ease),
  //         duration: 800,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(changeBgColor, {
  //         toValue: 0,
  //         duration: 500,
  //         easing: Easing.inOut(Easing.ease),
  //         useNativeDriver: true,
  //       }),
  //     ]).start();
  //   }
  // }, [isFocused]);

  // console.log(changeBgColor);

  //   useEffect(() => {
  //     setIsFocused(inputRef?.current.isFocused);
  //   }, [inputRef.current?.isFocused]);

  // console.log(isFocused);

  return (
    <SafeAreaView style={{ flex: 100 }}>
      <View style={{ flex: 30, alignItems: "center" }}>
        <Image
          style={{ width: 430, height: 300 }}
          source={require("../../assets/upper-logo.png")}
        />
      </View>
      <View
        style={{ flex: 40, alignItems: "center", justifyContent: "center" }}
      >
        <Image
          style={{ width: 200, height: 200, marginTop: 200 }}
          source={require("../../assets/rafiki-1.jpg")}
        />
      </View>
      <View style={{ flex: 30, paddingHorizontal: 20 }}>
        <View style={{ flex: 10 }}></View>
        <View style={{ flex: 10 }}>
          <NavOptions />
        </View>
      </View>

      {/* <View
        style={{
          position: "absolute",
          height: Dimensions.get("window").height,
          width: Dimensions.get("window").width,
          backgroundColor: "red",
          //   opacity: changeBgColor,
        }}
      ></View> */}

      {/* <Animated.View
        style={{
          position: "absolute",
          transform: [{ translateY: moveInput }],
          backgroundColor: "red",
          zIndex: 999,
        }} */}

      <View
        style={{
          width: Dimensions.get("window").width,
          paddingHorizontal: 16,
        }}
      >
        <GooglePlacesAutocomplete
          ref={inputRef}
          textInputProps={{
            onBlur: () => setIsFocused(false),
            onFocus: () => setIsFocused(true),
          }}
          styles={{
            container: {
              flex: 0,
              marginBottom: 20,
            },
            textInput: {
              fontSize: 18,
              height: 80,
              borderRadius: 35,
              textAlign: "center",
              //   width: 350,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: "gray",
            },
          }}
          placeholder="Pick Up Location"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
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
      {/* </Animated.View> */}
    </SafeAreaView>
  );
};

export default HomeDetails;
