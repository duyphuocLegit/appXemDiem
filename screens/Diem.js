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
      <View style={styles.row_item_masv}>
        <Text style={styles.item_text}>{data.item.TenTK}</Text>
      </View>
      <View style={styles.row_item_ten}>
        <Text style={styles.item_text}>{data.item.TenSV}</Text>
      </View>
      <View style={styles.row_item_diem}>
        <Text style={styles.item_text}>{data.item.diem}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tenmon}>
        <Text style={{ fontSize: 20, fontWeight: "500", color: "grey" }}>
          {route.params.TenMon}
        </Text>
      </View>
      <View style={styles.table}>
        <View style={styles.title}>
          <View style={styles.title_item_masv}>
            <Text style={styles.title_text}>Mã SV</Text>
          </View>
          <View style={styles.title_item_ten}>
            <Text style={styles.title_text}>Họ tên</Text>
          </View>
          <View style={styles.title_item_diem}>
            <Text style={styles.title_text}>Điểm</Text>
          </View>
        </View>
        <FlatList data={datas} renderItem={renderDatas} />
      </View>
    </View>
  );
}
