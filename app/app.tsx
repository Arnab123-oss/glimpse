import { Stack } from "expo-router";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkTheme,
} from "react-native-paper";

export default function App() {
  const themeMode = useSelector((state: RootState) => state.theme);

  return (
    <PaperProvider theme={themeMode === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  );
}
