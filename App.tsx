import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Home } from "./screens/Home";
import { Inventory } from "./screens/Inventory";
import { Settings } from "./screens/Settings";
import { Stops } from "./screens/Stops";

export default function App() {
  const Tab = React.useMemo(() => createBottomTabNavigator(), []);

  // testing

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Stops"
            component={Stops}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="hammer" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Inventory"
            component={Inventory}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons
                  name="stats-chart-outline"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="cog" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
