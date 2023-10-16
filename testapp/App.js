import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';

var N = ['Ewha', 'June', 'Jane', 'Nick'];
var P = [1234, 3347, 1111, 1212];

export default function App() {
  
  var L = [ ];

  for(var i = 0; i < N.length; i++){
//    var a = <Text style={{fontSize:20}}>{N[i]} : {P[i]}</Text>

    var n = <Text style={{fontSize:20}}>{N[i]}</Text>
    var p = <Text style={{fontSize:20}}>{P[i]}</Text>

    var a = <View style={{flexDirection: "row"}}>
      <View style={{width: "50%", borderWidth:1, padding:3}}>{n}</View>
      <View style={{width:5}}></View>
      <View style={{width: "48%", borderWidth:1, padding:3}}>{p}</View>
    </View>

    L.push(a);
  }

  return <View style={{marginTop:30}}>
    <Text style={{fontSize:40}}>Phone Book</Text>
    {L}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});