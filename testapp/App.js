import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';

var input_st = {fontSize:20, borderWidth:1, flex:1, padding:5, margin:5};

var N = ['Ewha', 'June', 'Jane', 'Nick'];
var P = [1234, 3347, 1111, 1212];

export default function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [refresh, setRefresh] = useState(0);

  function add_item() {
    N.push(name);
    P.push(phone);
    setRefresh(refresh+1);
  }
  
  var L = [ ];

  for(var i = 0; i < N.length; i++){
    var a = <Text style={{fontSize:20}}>{N[i]} : {P[i]}</Text>
    L.push(a);
  }

  return <View style={{marginTop:30}}>
    <Text style={{fontSize:40}}>Phone Book</Text>
    <View style={{margin:10, flexDirection:"row"}}>
      <TextInput style={input_st} onChangeText={setName} />
      <TextInput style={input_st} onChangeText={setPhone}/>
      <Button title=" Add " onPress={add_item}  />
    </View>
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