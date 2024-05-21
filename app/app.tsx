import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { RootState } from './redux/reducers';

export default function App(){
    const theme = useSelector((state: RootState) => state.theme);

    return (
        <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    )

}

