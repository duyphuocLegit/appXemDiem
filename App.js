/** @format */
import { useCallback, useState, useEffect } from "react";
import {
  Text,
  Image,
  Alert,
  View,
  TouchableOpacity,
  Button,
  Linking,
  FlatList,
  ScrollView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import "react-native-gesture-handler";

import styles from "./style/UserStyles";

import Login from "./screens/Login";
import Monhoc from "./screens/Monhoc";
import Diem from "./screens/Diem";
import User from "./screens/User";

export default function App() {

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function MonhocStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Môn Học' component={Monhoc} />
        <Stack.Screen name='Điểm Tổng Kết' component={Diem} />
      </Stack.Navigator>
    );
  }

  const web = "http://cdktdn.edu.vn/";
  const facebook = "https://www.facebook.com/cdktdn.edu.vn";

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Không tìm thấy: ${url}`);
      }
    }, [url]);
    return (
      <Button
        style={styles.logout__row__text}
        title={children}
        onPress={handlePress}
      />
    );
  };

  function CustomDrawerContent(props) {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
      fetchDatas();
    }, []);

    const fetchDatas = () => {
      fetch("http://192.168.1.89/ChuyenDe4/api/User.php")
        .then((response) => response.json())
        .then((jsonResponse) => setDatas(jsonResponse));
    };
    
    return (
      <View style={{ flex: 1,height:'100%' }}>
        <DrawerContentScrollView {...props}>
          <ScrollView nestedScrollEnabled={true}>
          <ScrollView horizontal={true}>
            <FlatList
              data={datas}
              renderItem={(data) => {
                return (
                  <View style={{ marginVertical: 20,marginLeft:30 }}>
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 50 }}
                      source={{
                        uri:
                          "http://192.168.1.89/chuyende4/images/" +
                          data.item.hinh,
                      }}
                    />
                    <Text style={{opacity:0.4,fontSize:12,marginTop:5}}>#{data.item.TenTK}</Text>
                  </View>
                );
              }}
            /></ScrollView>
          </ScrollView>
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
                  "Bạn có muốn đăng xuất tài khoản này không?",
                  [
                    {
                      text: "Ở lại",
                      onPress: () => {
                        return null;
                      },
                    },
                    {
                      text: "Có",
                      onPress: () => {
                        props.navigation.navigate("Login");
                      },
                    },
                  ],
                  { cancelable: false }
                )
              }>
              <Image
                style={styles.logout__button__img}
                source={require("./assets/images/logout.png")}
              />
              <Text style={styles.logout__button__text}>Đăng xuất</Text>
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
          name='Môn học' component={MonhocStack}
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
          name='Thông tin' component={User}
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
