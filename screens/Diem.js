/** @format */

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "../style/DiemStyles";

export default function Diem({ route }) {
  const [datas, setDatas] = useState([]);
  const [tenmon, setTenmon] = useState(route.params.TenMon);

  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = () => {
    fetch("http://192.168.1.89/ChuyenDe4/api/Diem.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tenmon: tenmon,
      }),
    })
      .then((response) => response.json())
      .then((jsonResponse) => setDatas(jsonResponse))
      .catch((error) => console.log(error));
  };

  const renderDatas = (data, index) => (
    <View style={styles.row}>
      <View style={index % 2 == 0 ? styles.row : styles.row2}>
        <Text style={styles.masv}>{data.item.MaSV}</Text>
        <Text style={styles.tensv}>{data.item.TenSV}</Text>
        <Text style={styles.diem}>{data.item.diem}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.masv}>Mã sv</Text>
          <Text style={styles.tensv}>Tên sv</Text>
          <Text style={styles.diem}>Điểm</Text>
        </View>
        <FlatList data={datas} renderItem={renderDatas} />
      </View>
    </View>
  );
}
