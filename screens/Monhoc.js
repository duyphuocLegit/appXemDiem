import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../style/MonhocStyles'

export default function Monhoc({ navigation }) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchDatas()
  }, []);

  const fetchDatas = () => {
    fetch('http://192.168.1.89/ChuyenDe4/api/Monhoc.php')
      .then(response => response.json())
      .then(jsonResponse => setDatas(jsonResponse))
      .catch(error => console.log(error))
  };
  const renderDatas = (data) => (
    <View>
    <TouchableOpacity onPress={() => { navigation.navigate("Diem", data.item) }}>
      <View style={styles.row}>
          <Text style={styles.mamon}>{data.item.MaMon}</Text>
          <Text style={styles.tenmon}>{data.item.TenMon}</Text>
      </View>
        </TouchableOpacity></View>
    )

  return (
    <View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.mamon}>Mã môn</Text>
      <Text style={styles.tenmon}>Tên môn</Text>
    </View>
      <FlatList
        data={datas}
        
        renderItem={renderDatas}
      />
    </View>
  )
}