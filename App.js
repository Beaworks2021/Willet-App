import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Components/Redux/Store";
import Home from "./Components/Screens/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./Components/Screens/MapScreen";
import TrackScreen from "./Components/Screens/TrackScreen";
import InitialScreen from "./Components/Screens/InitialScreen";
import LoginScreen from "./Components/Screens/LoginScreen";
import Screens from "./router/Screens";

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
]);

window.addEventListener = (x) => x;

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Screens />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
