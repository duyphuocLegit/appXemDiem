import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Monhoc({ navigation }) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchDatas()
  }, []);

  const fetchDatas = () => {
    fetch('http://192.168.1.8:8081/ChuyenDe4/api/Monhoc.php')
      .then(response => response.json())
      .then(jsonResponse => setDatas(jsonResponse))
      .catch(error => console.log(error))
  };

  const renderDatas = (data) => (
      <View style={{ marginTop: 40, marginLeft: 10 }}>
        <TouchableOpacity onPress={() => { navigation.navigate("StackDiem", data.item) }}>
          <Text>{data.item.MaMon}</Text>
          <Text>{data.item.TenMon}</Text>
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