/** @format */

import { StyleSheet, Text, View, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import Monhoc from "./screens/Monhoc";
import Diem from "./screens/Diem";
import User from "./screens/User";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function MonhocStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Monhoc' component={Monhoc} />
        <Stack.Screen name='Diem' component={Diem} />
      </Stack.Navigator>
    );
  }

  function UserStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='User' component={User} />
      </Stack.Navigator>
    );
  }

  function AfterLoginTab() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name='Monhoc'
          component={MonhocStack}
          options={{
            title: "Monhoc",
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/icon/Book.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#2490F8" : "black",
                }}
              />
            ),
            tabBarLabel: ({ focused, color, size }) => (
              <Text style={{ color: focused ? "#2490F8" : color }}>
                Môn Học
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name='User'
          component={UserStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/icon/User.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#2490F8" : "black",
                }}
              />
            ),
            tabBarLabel: ({ focused, color, size }) => (
              <Text style={{ color: focused ? "#2490F8" : color }}>
                Thông Tin
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='AfterLogin' component={AfterLoginTab} options={{gestureEnabled:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
