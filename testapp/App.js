import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button} from 'react-native';
import { Audio } from 'expo-av';

async function play00(){
  console.log('Loading Sound');
  var s = await Audio.Sound.createAsync(require('./assets/note00.m4a'));

  console.log('Playing Sound');
  s.sound.playAsync();
}

async function play02(){
  var s = await Audio.Sound.createAsync(require('./assets/note02.m4a'));
  s.sound.playAsync();
}

async function play04(){
  var s = await Audio.Sound.createAsync(require('./assets/note04.m4a'));
  s.sound.playAsync();
}

async function play05(){
  var s = await Audio.Sound.createAsync(require('./assets/note05.m4a'));
  s.sound.playAsync();
}

export default function App() {
  return (
    <View style={ {paddingTop:50} } >
      <View onTouchStart={ play00 }><Text style={{fontSize:30}}>Do</Text></View>
      <View onTouchStart={ play02 }><Text style={{fontSize:30}}>Re</Text></View>
      <View onTouchStart={ play04 }><Text style={{fontSize:30}}>Mi</Text></View>
      <View onTouchStart={ play05 }><Text style={{fontSize:30}}>Fa</Text></View>
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