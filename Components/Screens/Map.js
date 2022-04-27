import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";
import { setTravelTimeInformation } from "../Redux/actions/userActions";
// import { selectOrigin } from "../../slices/navSlice";

const Map = () => {
  //   const origin = useSelector(selectOrigin);
  const origin = useSelector((state) => state.userReducers.origin);
  const destination = useSelector((state) => state.userReducers.destination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&departure_time=now&key=AIzaSyCpOAReGS-lFwoHzbOE9qzqObYrvhb36D0`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
          console.log("matrix", data);
        });
    };
    getTravelTime();
  }, [origin, destination, "AIzaSyCpOAReGS-lFwoHzbOE9qzqObYrvhb36D0"]);

  console.log(destination);
  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {true && (
        <MapViewDirections
          origin={origin?.description}
          destination={destination?.description}
          apikey="AIzaSyCpOAReGS-lFwoHzbOE9qzqObYrvhb36D0"
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
          }}
          title="origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination?.location.lat,
            longitude: destination?.location.lng,
          }}
          title="destination"
          description={origin.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
