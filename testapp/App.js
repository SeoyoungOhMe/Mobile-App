import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';

var name = 'Ewha';
var element = <Text>Hello {name}</Text>

for(var i = 0; i < 5; i++){
  element = <View style={{borderWidth:1, padding:10}}>{element}</View>
}

export default function App() {
  return <View style={{marginTop:30}}>{element}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});