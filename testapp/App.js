import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Audio } from 'expo-av';
import CalendarPicker from 'react-native-calendar-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

var text_st = {fontSize:20, borderWidth:1, borderColor:'gray', flex:1, padding:5, margin:2};

var input_st = {
  fontSize:20, borderWidth: 1, flex: 1, padding: 5, margin: 5
};

var pbook = [{ name: 'Ewha', phone: 1234 }, { name: 'June', phone: 3347 }, { name: 'Jane', phone: 1111}, { name: 'Nick', phone: 1212 }];

export default function App() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [refresh, setRefresh] = useState(0);

  function add_item() {
    pbook.push({ name: name, phone: phone });
    setRefresh(refresh + 1);
  }

  var L = [];

  for (var i = 0; i< pbook.length; i++) {
    var a = <View style={{flexDirection: 'row'}}>
      <Text style={text_st}>{pbook[i].name}</Text>
      <Text style={text_st}>{pbook[i].phone}</Text>
    </View>
    L.push(a);
  }

  return <View style={{marginTop: 30}}>
    <Text style={{fontSize: 40}}>Phone Book</Text>
    <View style={{margin: 10, flexDirection: "row", alignItems: 'center'}}>
      <TextInput style={input_st} onChangeText={setName} />
      <TextInput style={input_st} onChangeText={setPhone} />
      <Button title="   Add   " onPress={add_item} />
    </View>
    {L}
  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  box: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  datatext: {
    fontSize: 20,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  expense: {
    flex: 1,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    fontSize: 16,
    color: 'blue',
  },
  memo: {
    borderBottomWidth: 1,
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  }
  },
);
