import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { createContext, useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css"
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

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

  const statusBarStyle = theme === "light" ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SafeAreaView className={`flex-1 ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-white'}`}>
        <StatusBar style={statusBarStyle} barStyle={theme==='light'?"dark-content":"light-content"}/>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}
