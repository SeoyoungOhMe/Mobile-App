import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Audio } from 'expo-av';

var text_st = {fontSize: 20, padding: 10};

export default function App() {
  // const [hh, sethh] = useState("");
  // const [mm, setmm] = useState("");
  // const [ss, setss] = useState("");
  // const [ap, setap] = useState("");
  const [d, setd] = useState(new Date());

  useEffect(function(){
    setInterval(run_everysec, 1000);
  }, []);

  function run_everysec(){
    // var d = new Date();
    // sethh(d.getHours());
    // sethh(d.getMinutes());
    // sethh(d.getSeconds());
    var now = new Date();
    setd(now);
  }

  return (
    <View style={{paddingTop:30}}>
      <Text style={text_st}>{d.toString()}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
});