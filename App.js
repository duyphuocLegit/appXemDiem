/** @format */

import { StyleSheet, Text, View, Image, } from "react-native";
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
      <Stack.Navigator>
        <Stack.Screen name='Môn Học' component={Monhoc} />
        <Stack.Screen name='Điểm Tổng Kết' component={Diem} />
      </Stack.Navigator>
    );
  }
  function UserStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Thông Tin Sinh Viên' component={User} />
      </Stack.Navigator>
    );
  }

  function AfterLogin() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name='MonhocTab'
          component={MonhocStack}
          options={{
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
            tabBarLabel: ({ focused, color}) => (
              <Text style={{ color: focused ? "#2490F8" : color }}>
                Môn Học
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name='UserTab'
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
  // function AfterLogin(){
  //   return(
  //     <Drawer.Navigator>
  //       <Drawer.Screen name="Monhoc" component={MonhocStack}/>
  //       <Drawer.Screen name="User" component={UserStack}/>
  //     </Drawer.Navigator>
  //   )
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='AfterLogin' component={AfterLogin} options={{gestureEnabled:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
