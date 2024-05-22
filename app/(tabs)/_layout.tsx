import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = useTheme();
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarActiveTintColor:theme.colors.onSurface,
        headerShown: false,
        tabBarStyle: {
          paddingVertical: -40, 
          height:65,
          backgroundColor:theme.colors.surfaceVariant
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel:false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="soundscape"
        options={{
          title: "SoundScape",
          tabBarShowLabel:false,
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="soundcloud" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "",
          tabBarShowLabel:false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="plus-square-o" color={color} size={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="trends"
        options={{
          title: "Trends",
          tabBarShowLabel:false,
          tabBarIcon: ({ color, focused }) => (
            <Feather name="trending-up" color={color} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarShowLabel:false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "user-alt" : "user"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
