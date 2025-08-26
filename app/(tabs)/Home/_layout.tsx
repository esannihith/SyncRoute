import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../_layout";

export default function HomeLayout() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bg = isDark ? "#0b1220" : "#ffffff";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bg }} edges={['top', 'bottom']}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}