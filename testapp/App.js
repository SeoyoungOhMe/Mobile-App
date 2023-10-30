import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';

var text_st = {fontSize:30, padding:10, margin:10};
var input_st = {fontSize:30, borderWidth:1, padding:10, margin:10};

function Mult(){
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  return(
    <View style={{flexDirection:"row"}}>
    <TextInput style={input_st} onChangeText={ setA }/>
    <Text style={text_st}>x</Text>
    <TextInput style={input_st} onChangeText={ setB }/>
    <Text style={text_st}>=  { Number(A) * Number(B) }</Text>
  </View>
  )
  

}

export default function App(){
  return (
    <View style={ {paddingTop:30} } >
      <Mult/>
      <Mult/>
      <Mult/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
