import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Today from "../screens/Today";
import Tommorow from "../screens/Tommorow";
import React from "react";
import { useColorScheme } from "nativewind";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  const { colorScheme } = useColorScheme();

  let labelBackgroundColor = colorScheme === "light" ? "#E5E5E5" : "#111827";
  let labelTextColor = colorScheme === "dark" ? "#fff" : "black";
  const config = {
    tabBarLabelStyle: { fontSize: 20, fontFamily: "OpenSans-bold" },
    tabBarStyle: {
      backgroundColor: labelBackgroundColor,
      borderBottomWidth: 0,
      elevation: 0, // Removed Bottom line in andriod
      shadowOffset: {
        width: 0,
        height: 0, // Removed Bottom line in for iOS
      },
    },
    tabBarActiveTintColor: labelTextColor,
    tabBarIndicatorStyle: { backgroundColor: "transparent" },
  };
  return (
    <Tab.Navigator screenOptions={config}>
      <Tab.Screen name="Today" component={Today} />
      <Tab.Screen
        name="Tommorow"
        component={Tommorow}
        options={{
          tabBarLabelStyle: {
            fontSize: 20,
            fontFamily: "OpenSans-bold",
            textDecorationLine: "line-through",
          },
        }}
      />
    </Tab.Navigator>
  );
}
