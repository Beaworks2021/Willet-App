import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

const PackageConfirm = () => {
  const { origin, destination, travelTimeInformation } = useSelector(
    (state) => state.userReducers
  );
  console.log(origin, destination, travelTimeInformation);
  const {
    senderFullName,
    courier,
    senderPhoneNumber,
    itemContent,

    recieverFullName,

    recieverPhoneNumber,
  } = useRoute().params;

  console.log("ekow===========", courier);

  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 16 }}>
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingBottom: 10,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            Sender Details
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Name:</Text>
          <Text style={{ fontSize: 20 }}>{senderFullName}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Location:</Text>
          <Text>{origin?.description}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Phone Number:
          </Text>
          <Text>{senderPhoneNumber}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            item / Package:
          </Text>
          <Text>{itemContent}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Courier Type:
          </Text>
          <Text>{courier?.item?.title}</Text>
        </View>
      </View>

      {/* reciever data  */}
      <View style={{ paddingHorizontal: 16, marginVertical: 40 }}>
        <View
          style={{
            borderBottomColor: "gray",
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingBottom: 10,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
            }}
          >
            Reciever Details
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Name:</Text>
          <Text style={{ fontSize: 20 }}>{recieverFullName}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Location:</Text>
          <Text style={{ fontSize: 20 }}>{destination?.description}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Phone Number:
          </Text>
          <Text style={{ fontSize: 20 }}>{recieverPhoneNumber}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total Price</Text>
          <Text style={{ fontSize: 20 }}>{courier?.PRICE}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PackageConfirm;
