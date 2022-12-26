import { View, Text,  Image, FlatList, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native';
import { StackActions } from '@react-navigation/native';
import styles from '../style/UserStyles';
import { useNavigation } from '@react-navigation/native';
export default function User() {
  const navigation = useNavigation();
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
    
    <View style={styles.container}>
      <View style={styles.profile}>
      <View style={{alignItems:'center'}}>
      <Image style={styles.profile__img} source={require('../assets/images/mark.jpeg')}/>
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
        <View style={styles.logout}>
      <TouchableOpacity
        style={styles.logout}
        onPress={() =>
          Alert.alert(
            "Đăng Xuất",
            "Bạn có muốn đăng xuất tài khoản hay không?",
            [
              {
                text: "Cancel",
                onPress: () => {
                  return null;
                },
              },
              {
                text: "Yes",
                onPress: () => {
                  navigation.dispatch(StackActions.popToTop());
                },
              },
            ],
            { cancelable: false }
          )
        }>
         <View style={styles.logout__button}>
           <View style={styles.logout__text__container}>
             <Text style={styles.logout__text}>Đăng xuất</Text>
           </View>
           <View>
             <Image
              style={styles.logout__img}
              source={require("../assets/images/logout.png")}
            />
           </View>
         </View>
       </TouchableOpacity></View>
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