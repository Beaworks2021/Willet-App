import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Touchable,
} from "react-native";
import Map from "./Map";
import { useDispatch, useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "./NavigateCard";
import CourierType from "./CourierType";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";

const Stack = createNativeStackNavigator();

const MapPriceScreen = () => {
  const { navigate, goBack } = useNavigation();
  const dispatch = useDispatch();
  const origin = useSelector((state) => state.userReducers.origin);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            height: Dimensions.get("window").height,
          }}
        >
          <View style={{ flex: 100 }}>
            <TouchableOpacity
              onPress={() => navigate("HomeDetails")}
              style={tw`absolute rounded-full shadow-lg right-10 z-40 p-3 bottom-40 bg-gray-100`}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={{ flex: 40 }}>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="NavigateCard" component={NavigateCard} />
                <Stack.Screen name="CourierType" component={CourierType} />
              </Stack.Navigator>
            </View>
            <View style={{ flex: 60 }}>
              <Map />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MapPriceScreen;

const styles = StyleSheet.create({});
