import { View, Text, Image, TextInput, TouchableOpacity, BackHandler, Alert} from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from '../style/LoginStyles'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
    const navigation = useNavigation();
    const [tentk, setTentk] = useState('')
    const [matkhau, setMatkhau] = useState('')

    useEffect(() => {
      BackHandler.addEventListener("hardwareBackPress", backAction);
    }, []);

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

    const postData = () => {
      if(tentk.length == 0)
      {
        alert('Bạn chưa nhập tên tài khoản!')
      }
      else if(matkhau.length == 0)
      {
        alert('Bạn chưa nhập mật khẩu!')
      }
      else if(tentk.length == 0 && matkhau.length == 0)
      {
        alert('Bạn chưa nhập tên tài khoản và mật khẩu!')
      }
      else
      {
        fetch('http://192.168.1.89/ChuyenDe4/api/Login.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            tentk: tentk,
            matkhau: matkhau,
          }),
        })
        .then(response => response.json())
        .then(jsonResponse => {
          if(jsonResponse[0].Message == 'true')
          {
            navigation.navigate('AfterLogin')
          }
          else
          {
            alert(jsonResponse[0].Message)
          }
        })
        .catch(error => console.log(error))
      }
    };
    
  return (
    <View style={styles.container}>
    
        <View style={styles.header}>
        
            <Text style={styles.header__text}>Đăng nhập</Text>
        </View>
        <View style={styles.body}>
            <View>
                <View style={styles.body__email}>
                    <TextInput
                    style={styles.formInput}
                    placeholder='Username'
                        onChangeText={(text) => { setTentk(text) }}
                    >
                    </TextInput>
                </View>
                <View style={styles.body__password}>
                    <TextInput
                    style={styles.formInput}
                    placeholder='Password'

                        secureTextEntry={true}
                        onChangeText={(text) => { setMatkhau(text) }}
                    >    
                    </TextInput>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={postData}>
                    <Text style={{fontWeight: '500', color: 'white'}}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <Image style={{width:170,height:170,marginLeft:'25%',marginTop:120,opacity:0.7}} source={require('../assets/images/logo.png')}/>
        </View>
    </View>
  )
}