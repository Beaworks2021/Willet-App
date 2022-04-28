import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";

const TrackScreen = () => {
  const { userData } = useSelector((state) => state.userReducers);
  const { navigate, goBack } = useNavigation();

  const handlePackagePress = (item) => {
    navigate("StatusPage", item);
  };

  return (
    <SafeAreaView Style={{ flex: 100 }}>
      <TouchableOpacity
        onPress={() => navigate("HomeDetails")}
        style={tw`absolute rounded-full shadow-lg left-5 z-40 p-3 bg-gray-100 mt-4`}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View Style={{ flex: 30 }}>
        <Text
          style={{
            fontSize: 50,
            textAlign: "center",
            marginBottom: 30,
            marginTop: 100,
          }}
        >
          Track Packages
        </Text>
      </View>
      <View Style={{ flex: 70 }}>
        <View>
          {userData[0]?.packages?.length < 1 ? (
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  display: "flex",
                  fontSize: 20,
                  marginTop: 100,
                }}
              >
                No Packages Yes
              </Text>
              <Image
                style={{ width: 350, height: 250, marginTop: 40 }}
                source={require("../../assets/emptytrack.png")}
              />
            </View>
          ) : (
            <FlatList
              data={userData[0]?.packages}
              keyExtractor={(item, index) => `package-${index}`}
              renderItem={({ item }) => (
                <PackageList
                  item={item}
                  handlePackagePress={handlePackagePress}
                />
              )}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const PackageList = ({ item, handlePackagePress }) => {
  console.log("Packages=======", item);
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => handlePackagePress(item)}
        style={{
          flexDirection: "row",
          flex: 100,
          justifyContent: "center",
          height: 120,
          width: 380,
          backgroundColor: "lightgray",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flex: 80,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 23,
              fontWeight: "700",
              paddingVertical: 10,
            }}
          >
            Delivering: {item?.paymentData?.itemContent}
          </Text>
          <Text
            style={{
              fontWeight: "700",
              paddingVertical: 2,
            }}
          >
            Rate {item?.paymentData?.price}
          </Text>
          <Text
            style={{
              fontSize: 10,
              paddingVertical: 10,
            }}
          >
            {item?.paymentData?.origin} to {item?.paymentData?.destination}{" "}
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 5,
            alignItems: "flex-end",
            flex: 20,
            justifyContent: "center",
          }}
        >
          <AntDesign name="rightcircle" size={30} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TrackScreen;

const styles = StyleSheet.create({});
