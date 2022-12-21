import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Diem({route}) {
  const [datas, setDatas] = useState([])
  const [tenmon, setTenmon] = useState(route.params.TenMon)

  useEffect(() => {
    fetchDatas()
  }, []);

  const fetchDatas = () => {
    fetch('http://192.168.1.89/ChuyenDe4/api/Diem.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tenmon: tenmon
      }),
    })
    .then(response => response.json())
    .then(jsonResponse => setDatas(jsonResponse))
    .catch(error => console.log(error))
  };

  const renderDatas = (data) => (
      <View style={{ marginTop: 40, marginLeft: 10 }}>
          <Text>{data.item.MaLop}</Text>
          <Text>{data.item.TenSV}</Text>
          <Text>{data.item.TenMon}</Text>
          <Text>{data.item.diem}</Text>
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