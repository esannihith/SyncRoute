import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { createContext, useContext, useState } from "react";
import "../global.css";

// Create a context for the theme
const ThemeContext = createContext<{ theme: string; toggleTheme: () => void } | undefined>(undefined);

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default function RootLayout() {
  const [theme, setTheme] = useState("light"); // Default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const statusBarStyle = theme === "light" ? "dark" : "light";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StatusBar style={statusBarStyle} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeContext.Provider>
  );
}
