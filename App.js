/** @format */

import { Text, Image, View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

import Login from "./screens/Login";
import Monhoc from "./screens/Monhoc";
import Diem from "./screens/Diem";
import User from "./screens/User";
import styles from "./style/UserStyles";


export default function App() {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  const Drawer = createDrawerNavigator()

  function MonhocStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Môn Học' component={Monhoc} />
        <Stack.Screen name='Điểm Tổng Kết' component={Diem} />
      </Stack.Navigator>
    );
  }

  // function NavByTab() {
  //   return (
  //     <Tab.Navigator screenOptions={{ headerShown: false }}>
  //       <Tab.Screen
  //         name='MonhocTab'
  //         component={MonhocStack}
  //         options={{
  //           tabBarIcon: ({ focused }) => (
  //             <Image
  //               source={require("./assets/icon/Book.png")}
  //               style={{
  //                 width: 25,
  //                 height: 25,
  //                 tintColor: focused ? "#2490F8" : "black",
  //               }}
  //             />
  //           ),
  //           tabBarLabel: ({ focused, color}) => (
  //             <Text style={{ color: focused ? "#2490F8" : color }}>
  //               Môn Học
  //             </Text>
  //           ),
  //         }}
  //       />
  //       <Tab.Screen
  //         name='UserTab'
  //         component={UserStack}
  //         options={{
  //           tabBarIcon: ({ focused }) => (
  //             <Image
  //               source={require("./assets/icon/User.png")}
  //               style={{
  //                 width: 25,
  //                 height: 25,
  //                 tintColor: focused ? "#2490F8" : "black",
  //               }}
  //             />
  //           ),
  //           tabBarLabel: ({ focused, color, size }) => (
  //             <Text style={{ color: focused ? "#2490F8" : color }}>
  //               Thông Tin
  //             </Text>
  //           ),
  //         }}
  //       />
  //     </Tab.Navigator>
  //   );
  // }

  function NavByDrawer(){
    return(
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name='Môn học'
          component={MonhocStack}
          options={{
            drawerIcon: ({ focused }) => (
              <Image
                source={require('./assets/icon/Book.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#2490F8" : "black",
                }}
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color: focused ? "#2490F8" : color }}>
                Môn Học
              </Text>
            ),
          }}
        />
        <Drawer.Screen
          name='Thông tin'
          component={User}
          options={{
            drawerIcon: ({ focused }) => (
              <Image
                source={require("./assets/icon/User.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#2490F8" : "black",
                }}
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color: focused ? "#2490F8" : color }}>
                Thông Tin
              </Text>
            ),
          }}
        />
      </Drawer.Navigator>
    )
  }

  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen
          name='AfterLogin'
          component={NavByDrawer}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
