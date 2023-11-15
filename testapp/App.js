import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';

var input_st = {fontSize:20, borderWidth:1, flex:1, padding:5, margin:5};

var pbook = [{name:'Ewha', phone:1234}, {name:'June', phone:3347},
            {name:'Jane', phone:1111},{name:'Nick', phone:1212}]

export default function App() {
  
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [refresh, setRefresh] = useState('');

    function add_item(){
      pbook.push({ name: name, phone:phone });
      setRefresh(refresh+1);
    }

    var L = [];

    for (var i=0; i<pbook.length; i++){
      var a = <Text style={{ fontSize: 20 }}>{pbook[i].name} : {pbook[i].phone}</Text>
      L.push(a);
    }

    return <View style={{marginTop:50}}>
      <Text style={{fontSize:40}}>Phone Book</Text>
      <View style={{margin:10, flexDirection: "row"}}>
        <TextInput style={input_st} onChangeText={setName} />
        <TextInput style={input_st} onChangeText={setPhone} />
        <Button title="  ADD  " onPress={add_item} />
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