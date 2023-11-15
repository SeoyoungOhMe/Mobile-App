import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {

  return (
    <ScrollView 
      contentContainerStyle={{borderColor:'red', borderWidth:10}}
      style={{ borderColor:'blue', borderWidth:10, marginTop: 30}}>
      <Text style={{fontSize:40, color:'blue'}}>Hello Ewha</Text>
      <Text>Nice to meet you</Text>
      <Text style={{fontSize:20}}>Nice to meet you</Text>
      <Text style={{fontSize:30}}>Nice to meet you</Text>
      <Image style={{width:200, height:200}} source={require('./cat-icon.png')} />
      <Image style={{width:200, height:200}} source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} />
      <Text style={{fontSize:20}}>Nice to meet you</Text>
      <Text style={{fontSize:30}}>Nice to meet you</Text>
      <Image style={{width:200, height:200}} source={require('./cat-icon.png')} />
      <Text style={{fontSize:20}}>Nice to meet you</Text>
      <Text style={{fontSize:30}}>Nice to meet you</Text>
      <Image style={{width:200, height:200}} source={require('./cat-icon.png')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  },
);

