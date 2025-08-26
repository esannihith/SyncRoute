import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { Stack } from "expo-router";
import React, { createContext, useContext, useState } from "react";
import { StatusBar as RNStatusBar, View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "../global.css";

// Create a context for the theme
const ThemeContext = createContext<{ theme: string; setTheme: (theme: string) => void } | undefined>(undefined);

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default function RootLayout() {
  useFrameworkReady();
  const [theme, setTheme] = useState("light"); // Default theme is light

  const isDark = theme === 'dark';
  const statusBarBackground = isDark ? "#0b1220" : "#ffffff";
  const rnBarStyle = isDark ? 'light-content' as const : 'dark-content' as const;

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {/* force explicit native background so status bar area always has correct color */}
        <View style={{ flex: 1, backgroundColor: statusBarBackground }}>
          <RNStatusBar backgroundColor={statusBarBackground} barStyle={rnBarStyle} translucent={false} />
          <View className={`flex-1 ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
            </Stack>
          </View>
        </View>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}
