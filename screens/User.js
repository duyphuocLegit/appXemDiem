import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
export default function User({ navigation }) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchDatas()
  }, []);

  const fetchDatas = () => {
    fetch('http://192.168.1.89/ChuyenDe4/api/User.php')
      .then(response => response.json())
      .then(jsonResponse => setDatas(jsonResponse))
      .catch(error => console.log(error))
  };

  const renderDatas = (data) => (
      <View style={{ marginTop: 40, marginLeft: 10 }}>
        <Text>User: {data.item.TenTK}</Text>
        <Text>Họ tên: {data.item.TenSV}</Text>
        <Text>Lớp: {data.item.MaLop}</Text>
        <Text>Ngày sinh: {data.item.NgaySinhFM}</Text>
        <Text>Giới tính: {data.item.GioiTinh}</Text>
        <TouchableOpacity onPress={()=>
              Alert.alert(
                'Log out',
                'Do you want to logout?',
                [
                  {text: 'Cancel', onPress: () => {return null}},
                  {text: 'Confirm', onPress: () => {
                    AsyncStorage.clear();
                    navigation.navigate('Login')
                  }},
                ],
                { cancelable: false }
              )  
            }>
              <Text style={{margin: 16,fontWeight: 'bold'}}>Log out</Text>
            </TouchableOpacity>
      </View>
    )

  return (
    <View>
      <FlatList
        data={datas}
        renderItem={renderDatas}
      />
    </View>
  )
}