import { Tabs } from "expo-router";
import { Home, Map, User } from "lucide-react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        }}
        initialRouteName="Rooms"
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Home color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="Rooms"
          options={{
            title: "Rooms",
            tabBarIcon: ({ color, focused }) => (
              <Map color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <User color={color} size={24} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}