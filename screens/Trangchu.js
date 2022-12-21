import { View, Text,Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import Monhoc from './Monhoc';
import Diem from './Diem';
import User from './User';
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
export default function Trangchu() {
    const MonhocStack = () => (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='StackMonhoc' component={Monhoc}/>
          <Stack.Screen name='StackDiem' component={Diem}/>
          <Stack.Screen name='StackUser' component={User}/>
        </Stack.Navigator>
      )
    
      const UserStack = () => (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='StackUser' component={User}/>
        </Stack.Navigator>
      )
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
          name='Monhoc'
          component={MonhocStack}
          options={{
            title: 'Monhoc',
            tabBarIcon: ({focused}) => (
              <Image source={require('../assets/icon/Book.png')} style={{ width:25, height: 25, tintColor:focused ? '#2490F8' : 'black'}}/>
            ),
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? '#2490F8' : color}}>Môn Học</Text>
            )
          }}
        />
        <Tab.Screen
          name='User'
          component={UserStack}
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={require('../assets/icon/User.png')} style={{ width:25, height: 25, tintColor:focused ? '#2490F8' : 'black'}}/>
            ),
            tabBarLabel: ({focused, color, size}) => (
              <Text style={{color: focused ? '#2490F8' : color}}>Thông Tin</Text>
            )
          }}
        />
    </Tab.Navigator>
   </NavigationContainer>
  )
}