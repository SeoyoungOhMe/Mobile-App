import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [hh, sethh] = useState("");
  const [mm, setmm] = useState("");
  const [ss, setss] = useState("");
  const [ap, setap] = useState("");

  useEffect(function(){
    setInterval(run_everysec, 1000);
  }, []);

  function run_everysec(){
    var d = new Date();
    sethh(d.getHours());
    setmm(d.getMinutes());
    setss(d.getSeconds());

    if(d.getHours() < 12){
      setap("am");
    } else {
      setap("pm")
    }
  }

  return (
    <Text style={{...styles.bold, paddingTop: 50}}>
      <Text>{hh}:{mm}:</Text>
      <Text style={styles.text_st}>{ss} {ap}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {

    fontSize: 60,
    padding: 10,
    fontWeight: 'bold',
  },
  text_st: {
    fontSize: 60,
    padding: 10,
    fontWeight: 'normal',
  },
});

