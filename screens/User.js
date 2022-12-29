import { View, Text,  Image, FlatList} from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../style/UserStyles';

export default function User() {
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

  const renderDatas = (data) =>{ 

    return(
    <View style={styles.container}>
      <View style={styles.profile}>
      <View style={{alignItems:'center'}}>
      <Image style={styles.profile__img} source={{uri:'http://192.168.1.89/chuyende4/images/'+data.item.hinh}}/>
      <Text style={{fontSize:20,fontWeight:'700',marginBottom:30}}>{data.item.TenSV}</Text></View>
<View style={{flexDirection:'row',left:30}}>
      <View style={styles.profile__title}>
          <Text style={styles.profile__title__text}>Tài khoản:</Text>
          <Text style={styles.profile__title__text}>Lớp:</Text>
          <Text style={styles.profile__title__text}>Ngày sinh:</Text>
          <Text style={styles.profile__title__text}>Email:</Text>
          <Text style={styles.profile__title__text}>Sđt:</Text>
          <Text style={styles.profile__title__text}>Giới tính:</Text>
      </View>
      <View style={styles.profile__detail}>
        <Text style={styles.profile__detail__text}>{data.item.TenTK}</Text>
        <Text style={styles.profile__detail__text}>{data.item.MaLop}</Text>
        <Text style={styles.profile__detail__text}>{data.item.NgaySinhFM}</Text>
        <Text style={styles.profile__detail__text}>{data.item.Email}</Text>
        <Text style={styles.profile__detail__text}>{data.item.SDT}</Text>
        <Text style={styles.profile__detail__text}>{data.item.GioiTinh}</Text>
        </View>
</View>
        </View>
        
      </View>
    )
  }
  
  return (
    <View>
      <FlatList
        data={datas}
        renderItem={renderDatas}
      />
    </View>
  )
}