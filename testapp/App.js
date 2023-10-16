import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';

var L = [ <Text>Hello</Text>, <Text>Ewha</Text> ];

for(var i = 0; i < 10; i++)
  L.push( <Text>count {i}</Text> );

for(var i = 0; i < 3; i++)
  L.push( <Image style={{width:100, height:100}}  source={require('./cat-icon.png')}/> );

export default function App() {
  return <View style={{marginTop:30}}>{L}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});