import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button} from 'react-native';

var text_st = {fontSize: 30, backgroundColor: 'lightgray', padding:10, margin:10};


export default function App() {

  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  return (
    <ScrollView contentContainerStyle={{paddingTop: 30}}>
      
      <View style={{ flexDirection: "row" }}>
        <Text style={text_st}>{A}</Text>
        <Text style={text_st}>{B}</Text>
      </View>
      <View style={{margin:10, flexDirection:"row"}}>
        <Button title="   +   "
                onPress={ function() { setA(A+1) } } />
        <View style={{width:30}}></View>
        <Button title="   +   "
                onPress={ function() { setB(B+1) } } />
      </View>

      <View style={{margin:10, flexDirection:"row"}}>
        <Button title="   -   "
                onPress={ function() { setA(A-1) } } />   
        <View style={{width:30}}></View>     
        <Button title="   -   "
                onPress={ function() { setB(B-1) } } />
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
