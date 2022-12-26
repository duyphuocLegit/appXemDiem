import { View, Text, FlatList, TouchableOpacity, BackHandler, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../style/MonhocStyles'
import { useNavigation } from '@react-navigation/native';

export default function Monhoc() {
  const navigation = useNavigation();
  const [datas, setDatas] = useState([]);

  const backAction = () => {
    Alert.alert("Khoan!", "Bạn muốn thoát khỏi app không?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  useEffect(() => {
    fetchDatas();
    BackHandler.addEventListener("hardwareBackPress", backAction);
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