import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Components/Screens/Home";
import MapScreen from "../Components/Screens/MapScreen";
import TrackScreen from "../Components/Screens/TrackScreen";
import InitialScreen from "../Components/Screens/InitialScreen";
import LoginScreen from "../Components/Screens/LoginScreen";
import RegisterScreen from "../Components/Screens/RegisterScreen";
import { useEffect, useState } from "react";
import { auth } from "../Components/firebase/firebase";
import PackageConfirm from "../Components/Screens/PackageConfirm";
import MapPriceScreen from "../Components/Screens/MapPriceScreen";

const Stack = createNativeStackNavigator();

const Screens = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.uid) {
        setCurrentUser(true);
      } else {
        setCurrentUser(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {false ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="InitialScreen" component={InitialScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="MapPriceScreen" component={MapPriceScreen} />
          <Stack.Screen name="TrackScreen" component={TrackScreen} />
          <Stack.Screen name="Confirm" component={PackageConfirm} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Screens;
