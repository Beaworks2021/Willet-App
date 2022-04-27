import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import PayWithFlutterwave from "flutterwave-react-native";
import { syncPackageData } from "../Redux/actions/userActions";
import { useState, useEffect } from "react";
import axios from "axios";

const PackageConfirm = () => {
  const [redirectData, setRedirectData] = useState(null);
  const [verifyData, setVerifyData] = useState(null);
  const [verified, setVerified] = useState(false);
  const [retryVerify, setRetryVerify] = useState(false);
  const { origin, destination, userData } = useSelector(
    (state) => state.userReducers
  );
  const {
    senderFullName,
    courier,
    senderPhoneNumber,
    itemContent,
    recieverFullName,
    recieverPhoneNumber,
  } = useRoute().params;

  // used in flutterwave button
  const paymentOptions = {
    tx_ref: `MC-${Date.now()}`,
    authorization: "FLWPUBK_TEST-b4c8610ef2e104ed877166c2a55f51f5-X",
    customer: {
      email: "ekowworks@gmail.com",
    },
    amount: +courier?.PRICE,
    currency: "GHS",
    payment_options: "card",
  };

  // when transaction is made
  const handleOnRedirect = (data) => {
    setRedirectData(data);
    if (data.status === "successful") {
      axios({
        method: "get",
        url: `https://api.flutterwave.com/v3/transactions/${data.transaction_id}/verify`,
        headers: {
          Authorization: "FLWPUBK_TEST-b4c8610ef2e104ed877166c2a55f51f5-X",
        },
      })
        .then((res) => {
          let data = res.data;
          let packageData = {
            senderFullName,
            senderPhoneNumber,
            recieverFullName,
            recieverPhoneNumber,
            itemContent,
            price: courier?.price,
            courierType: courier?.item?.title,
            origin: origin?.description,
            destination: destination?.description,
          };
          if (
            data ===
            "upstream connect error or disconnect/reset before headers. reset reason: connection failure"
          ) {
            setVerified(false);
          }
          if (data.status === "success") {
            setVerifyData(packageData);
            setVerified(true);
          } else {
            setVerified(false);
          }
        })
        .catch((err) => {
          setTimeout(() => {
            setRetryVerify(true);
          }, 3000);
        });
    }
  };

  //retry verify
  useEffect(() => {
    if (retryVerify) {
      handleOnRedirect(redirectData);
    }
  }, [retryVerify]);

  // Sync data to firebase
  useEffect(() => {
    if (verified) {
      const dBdata = {
        paymentData: verifyData,
        transaction: transData,
      };
      dispatch(syncPackageData(dBdata));
      navigate("TrackScreen");
    }
  }, [verified]);

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

      <View style={{ alignItems: "center", marginTop: 40 }}>
        <PayWithFlutterwave
          onRedirect={(data) => handleOnRedirect(data)}
          options={paymentOptions}
          customButton={(props) => (
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                height: 70,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 35,
                width: 350,
              }}
              onPress={props.onPress}
              isBusy={props.isInitializing}
              disabled={props.disabled}
            >
              <Text style={{ color: "#fff" }}>Pay</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default PackageConfirm;
