/** @format */

import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function UserLogin() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const nav=useNavigation()

  UserLoginFunction = () => {
    fetch("http://192.168.1.89/dataRN/login.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        // If server response message same as Data Matched
        if (jsonResponse == "Invalid Username or Password Please Try Again") {
          //Then open Profile activity and send user email to profile activity.
          alert(jsonResponse[0].message)
        } else {
          alert(jsonResponse[0].message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.TextComponentStyle}>User Login Form</Text>

      <TextInput
        // Adding hint in Text Input using Place holder.
        placeholder='Enter User '
        onChangeText={() => {
          setUser(user);
        }}
        // Making the Under line Transparent.
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
      />

      <TextInput
        // Adding hint in Text Input using Place holder.
        placeholder='Enter User Password'
        onChangeText={() => {
          setPassword(password);
        }}
        // Making the Under line Transparent.
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
        secureTextEntry={true}
      />

      <Button
        title='Click Here To Login'
        onPress={UserLoginFunction}
        color='#2196F3'
      />
    </View>
  );
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
  },

  TextInputStyleClass: {
    textAlign: "center",
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
    borderColor: "#2196F3",

    // Set border Radius.
    borderRadius: 5,
  },

  TextComponentStyle: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    marginBottom: 15,
  },
});
