import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';

function Circle(){
  return <View style={styles.circle} />;
}

function Blank() {
  return <View style={ [styles.circle, {backgroundColor: undefined, borderWidth: 0}] } />;
}

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20, 
    backgroundColor: 'rgb(0, 200, 255)',
    borderWidth: 1,
    margin: 2,
  },
  dice: {
    backgroundColor: 'rgb(255, 240, 200)',
    padding: 10,
  }
});

function Dice() {
  return(
    <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Circle/><Circle/><Circle/></View>
      <View style={{flexDirection:'row'}}><Circle/><Circle/><Circle/></View>
      <View style={{flexDirection:'row'}}><Circle/><Circle/><Circle/></View>
    </View>
  );
}

function Dice6() {
  return(
    <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
    </View>
  );
}

export default function App() {
  return (
    <View style={{flex:1, marginTop:40, alignItems:'center'}}>
      <Dice/>
      <View style={{height:20}}/>
      <Dice6/>
    </View>
  )
}
