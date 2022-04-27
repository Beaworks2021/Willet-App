import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "moto-bite",
    title: "Moto Bike",
    multiplier: 1,
    image: require("../../assets/bike.png"),
  },
  {
    id: "tricycle",
    title: "Aboboyaa",
    multiplier: 2,
    image: require("../../assets/tricycle.png"),
  },
  {
    id: "truck",
    title: "Truck",
    multiplier: 3,
    image: require("../../assets/truck.png"),
  },
];

const SURGE_CHARGE_RATE = 1.5;

const CourierType = () => {
  const { navigate, goBack } = useNavigation();
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const travel = useSelector(
    (state) => state.userReducers.travelTimeInformation
  );

  const handleCourierType = (item) => {
    const PRICE = new Intl.NumberFormat("en-gh", {
      style: "currency",
      currency: "GHS",
    }).format(
      (travel?.duration?.value * SURGE_CHARGE_RATE * item.multiplier) / 100
    );
    const courier = { item, PRICE };
    navigate("MapScreen", courier);
  };
  console.log("hi", travel);
  return (
    <SafeAreaView style={{ flex: 100 }}>
      <View style={{ flex: 100 }}>
        <View
          style={{
            flex: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 16,
          }}
        >
          <TouchableOpacity
            onPress={() => navigate("NavigateCard")}
            style={{
              flex: 20,
              //   justifyContent: "center",
              marginTop: 25,
            }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              flex: 80,
              textAlign: "center",
              marginTop: 25,
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            Select A Courier, Distance - {travel?.distance?.text}
          </Text>
          <View
            style={{
              flex: 10,
            }}
          ></View>
        </View>
        <View style={{ flex: 80 }}>
          <View style={{ flex: 100, marginTop: 5 }}>
            <FlatList
              style={{ flex: 4 }}
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({
                item: { id, title, multiplier, image },
                item,
              }) => (
                <TouchableOpacity
                  onPress={() => handleCourierType(item)}
                  style={tw`flex-row justify-between items-center px-12 mt-2 pt-4 pb-4 ${
                    id === selected?.id && "bg-gray-200"
                  }`}
                >
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      resizeMode: "contain",
                    }}
                    source={item.image}
                  />

                  <View style={tw`-ml-6`}>
                    <Text style={tw`text-xl font-semibold`}>{title}</Text>
                    <Text>Time: {travel?.duration?.text}</Text>
                  </View>
                  <Text style={tw`text-xl`}>
                    {new Intl.NumberFormat("en-gh", {
                      style: "currency",
                      currency: "GHS",
                    }).format(
                      (travel?.duration?.value *
                        SURGE_CHARGE_RATE *
                        multiplier) /
                        100
                    )}
                  </Text>
                </TouchableOpacity>
              )}
            />

            <View
              style={{
                flex: 0.5,
                alignItems: "center",
              }}
            >
              {/* <TouchableOpacity
                disabled={!selected}
                style={
                  selected
                    ? {
                        backgroundColor: "#3c5ea9",
                        width: 350,
                        height: 50,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 5,
                      }
                    : {
                        backgroundColor: "lightgray",
                        width: 350,
                        height: 50,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 5,
                      }
                }
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "600",
                  }}
                >
                  Proceed With {selected?.title}
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CourierType;

const styles = StyleSheet.create({});
