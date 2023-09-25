import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button} from 'react-native';

var text_st = {fontSize: 30, padding:10, margin:10};
var input_st = {fontSize: 30, borderWidth: 1, padding:10, margin: 10};


export default function App() {

  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  return (
    <ScrollView contentContainerStyle={{paddingTop: 30}}>
      
      <View style={{ flexDirection: "row" }}>
        <TextInput style={input_st} onChangeText={ setA }/>
        <Text style={text_st}>x</Text>
        <TextInput style={input_st} onChangeText={ setB }/>
        <Text style={text_st}>=  { Number(A) * Number(B) }</Text>
      </View>
      
      
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
