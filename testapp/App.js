import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Audio } from 'expo-av';

function BoxGroup(props) {
  return(
    <View style={styles.box}>
      {props.children}
    </View>
  );
}

export default function App() {

  return (
   <View style={{flex:1, marginTop:40, alignItems:'center'}}>

    <BoxGroup>
      <Text style={styles.text}>ABCD</Text>
      <Button title="OK" />
    </BoxGroup>

    <BoxGroup>
      <Text style={styles.text}>123</Text>
      <Button title="OK" />
    </BoxGroup>

   </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderColor: 'blue',
    borderWidth: 2, 
    margin: 5,
    padding: 5,
  },
  text: {
    backgroundColor: 'wheat',
    fontSize: 30,
    margin: 2,
    padding: 2,
  }
});