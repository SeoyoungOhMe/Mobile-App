import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';

var st_container = {
  marginTop: 50,
};

var st_bigBlue = {
  color: 'blue',
  fontWeight: 'bold',
  fontSize: 30,
}

var st_red = {
  color: 'red',
}

export default function App() {
  return (
    <View style={st_container}>
      <Text style={st_red}>just red</Text>
      <Text style={st_bigBlue}>just bigBlue</Text>
      <Text style={ [st_bigBlue, st_red] }>bigBlue, then red</Text>
      <Text style={ [st_bigBlue, st_red, {fontSize:20}] }>
        bigBlue, then red, then 20</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});