import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button} from 'react-native';

var text_st = {fontSize: 30, backgroundColor: 'lightgray', padding:10, margin:10};

var input_st = {fontSize:30, borderWidth:1, padding: 10, margin: 10};

export default function App() {

  const [ greet, setGreet] = useState('Hi');
  const [ name, setName ] = useState('Name');

  return (
    <ScrollView contentContainerStyle={{paddingTop: 30}}>
      <Text style={text_st}>{greet}, {name}</Text>
      <TextInput style={input_st} onChangeText={ setName } />

      <View style={{margin:10, flexDirection: "row-reverse"}}>
        <Button title="NICE" onPress={ function() { setGreet('Nice to meet you') }} />
        <View style={{width:10}}></View>
        <Button title="Hello" onPress={ function() { setGreet('Hello') }} />
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
