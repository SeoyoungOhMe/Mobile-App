import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button} from 'react-native';

var head_st = {fontSize: 40, color:'blue', backgroundColor: 'orange', padding:10, margin:10};

var text_st = {fontSize: 30, backgroundColor: 'lightgray', padding:10, margin:10};

//var hello = "Good morning"


export default function App() {

  const [hello, sethello] = useState('Hello');


  function action() {
    sethello('Nice to meet you')
  }  


  return (
    <ScrollView contentContainerStyle={{paddingTop: 30}}>
      <Text style={head_st}>{hello}</Text>
      <Text style={text_st}>{hello}</Text>
      <Text style={text_st}>{hello}</Text>
      <Image style={{width:200, height:200}} source={require('./cat-icon.png')} />
      <Button title="Press Me" onPress={ function() { sethello('Hello, Ewha') }} />
      <View style={{height:10}}></View>
      <Button title="Touch Me" onPress={ action } />
    </ScrollView>
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
