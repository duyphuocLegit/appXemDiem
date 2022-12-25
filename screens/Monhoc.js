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
    <TouchableOpacity onPress={() => { navigation.navigate("Điểm Tổng Kết", data.item) }}>
      <View style={styles.row}>
          <View style={styles.row_item_mamon}>
            <Text>{data.item.MaMon}</Text>
          </View>
          <View style={styles.row_item_tenmon}>
            <Text>{data.item.TenMon}</Text>
          </View>
      </View>
        </TouchableOpacity></View>
    )

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.title}>
          <View style={styles.tile_item_mamon}>
              <Text style={styles.title_text}>Mã môn</Text>
          </View>
          <View style={styles.tile_item_tenmon}>
              <Text style={styles.title_text}>Tên môn</Text>
          </View>
        </View>
        <FlatList
          data={datas}
          renderItem={renderDatas}
        />
      </View>
    </View>
  )
}