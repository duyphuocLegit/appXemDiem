/** @format */
import { useCallback } from "react";
import { Text, Image, Alert, View, TouchableOpacity,Button,Linking } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./style/UserStyles";

import Login from "./screens/Login";
import Monhoc from "./screens/Monhoc";
import Diem from "./screens/Diem";
import User from "./screens/User";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  // const navigation=useNavigation()
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
  const web = "http://cdktdn.edu.vn/";
  const facebook = "https://www.facebook.com/cdktdn.edu.vn";
  
  const OpenURLButton = ({ url, children}) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
    return <Button style={styles.logout__row__text} title={children} color='#000' onPress={handlePress} />;
  };

  function CustomDrawerContent(props, navigation) {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <Image
            style={{ height: 100, width: 100, borderRadius: 50, margin: 30 }}
            source={require("./assets/images/user.png")}
          />
          <DrawerItemList {...props} />

          <View style={styles.logout}>
            <View style={styles.logout__row}>
              <Image
                style={styles.logout__row__img}
                source={require("./assets/images/web.png")}
              />
              <OpenURLButton url={web}>cdktdn.edu.vn</OpenURLButton>
            </View>
            
            <View style={styles.logout__row}>
              <Image
                style={styles.logout__row__img}
                source={require("./assets/images/fb.png")}
              />
              <OpenURLButton url={facebook}>fb.com/cdktdn.edu.vn</OpenURLButton>
            </View>
            <TouchableOpacity
              style={styles.logout__button}
              onPress={() =>
                Alert.alert(
                  "Đăng Xuất",
                  "Bạn có muốn đăng xuất tài khoản hay không?",
                  [
                    {text: "Cancel",onPress: () => {return null;},},
                    {  text: "Yes", onPress: () => { AsyncStorage.clear();navigation.navigate("Login");},}
                  ],{ cancelable: false }
                )}>
              <Image
                style={styles.logout__button__img}
                source={require("./assets/images/logout.png")}
              />
              <Text style={styles.logout__button__text}>
                Đăng xuất
              </Text>
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
      </View>
    );
  }

  function NavByDrawer() {
    return (
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name='Môn học'
          component={MonhocStack}
          options={{
            drawerIcon: ({ focused }) => (
              <Image
                source={require("./assets/icon/Book.png")}
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
    );
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
