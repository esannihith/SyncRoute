import { Tabs } from "expo-router";
import { Home, Map, User } from "lucide-react-native";
import React from "react";
import { useTheme } from "../_layout";

export default function TabLayout() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const tabBarStyle = {
    backgroundColor: isDark ? "#0b1220" : "#ffffff",
    borderTopColor: isDark ? "#111827" : "#e5e7eb",
    height: 64,
  };

  const tabBarActiveTintColor = isDark ? "#60a5fa" : "#2563eb";
  const tabBarInactiveTintColor = isDark ? "#9ca3af" : "#6b7280";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle,
        tabBarActiveTintColor,
        tabBarInactiveTintColor,
      }}
      initialRouteName="Rooms"
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="Rooms"
        options={{
          title: "Rooms",
          tabBarIcon: ({ color }) => <Map color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <User color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}