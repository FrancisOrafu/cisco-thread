import { Tabs, useRouter } from "expo-router";
import { Heart, Home, Plus, Search, User } from "lucide-react-native";

import React from "react";

export default function TabLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0a7ea4",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => <Home color={color} size={24} />,
        }}
      />

      <Tabs.Screen
        name="empty"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => <Plus color={color} size={24} />,
        }}
        listeners={{
          tabPress: (e) => {
            router.push("/post");
          },
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => <Heart color={color} size={24} />,
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Search color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => <User color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
