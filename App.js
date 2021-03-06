import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import AppLoading from "./src/screens/AppLoading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";

import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginFlow = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="AppLoading" component={AppLoading} /> */}
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
    </Stack.Navigator>
  );
};

const TrackListFlow = () => {
  return (
    <Stack.Navigator initialRouteName="TrackList">
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};

const MainFlow = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="trackListFlow"
        component={TrackListFlow}
        options={{
          tabBarLabel: "Tracks",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="th-list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{
          tabBarLabel: "Add Track",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const SwitchNavigation = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return !state.token ? <LoginFlow /> : <MainFlow />;
};

const App = () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <SwitchNavigation />
            </NavigationContainer>
          </SafeAreaProvider>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};

export default App;
