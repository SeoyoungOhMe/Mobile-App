import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button} from 'react-native';

var text_st = {fontSize: 30, backgroundColor: 'lightgray', padding:10, margin:10};

// var input_st = {fontSize:30, borderWidth:1, padding: 10, margin: 10};

export default function App() {

//  const [ greet, setGreet] = useState('Hi');
//  const [ name, setName ] = useState('Name');
  const [ val, setval ] = useState(0);

  return (
    <ScrollView contentContainerStyle={{paddingTop: 30}}>
      <Text style={text_st}>{val}</Text>

      <View style={{ margin:20 }}>
        <Button title="Count Up" 
              onPress={ function() { setval(val+1) }} />
        <View style={{ height:10 }}></View>
        <Button title="Count Down" 
              onPress={ function() { setval(val-1) }} />
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
