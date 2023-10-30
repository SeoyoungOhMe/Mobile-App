import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Audio } from 'expo-av';

function Circle(){
  return <View style={styles.circle} />;
}
function Blank() {
  return <View style={ [styles.circle, {backgroundColor: undefined, borderWidth: 0}] } />;
}


const styles = StyleSheet.create({
  circle: {
    width: 40,
   height: 40,
   borderRadius: 20, 
   backgroundColor: 'rgb(0, 200, 255)',
    borderWidth: 1,
    margin: 2,
  },
  text: {
   textAlign: 'center',
   fontSize: 20,
   margin: 5,
 },
 dice: {
    backgroundColor: 'rgb(255, 240, 200)',
    padding: 10,
  }
});
function Dice(props) {
  if(props.num == 1){
    return(
    <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
    </View>
    );
  } else if(props.num == 2) {
    return(
      <View style={styles.dice}>
      <View style={{flexDirection:'row'}}><Circle/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Circle/></View>
      </View>
      );
  }  else if(props.num == 3) {
    return(
      <View style={styles.dice}>
        <View style={{flexDirection:'row'}}><Circle/><Blank/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
      <View style={{flexDirection:'row'}}><Blank/><Blank/><Circle/></View>
      </View>
      );
  } else if(props.num == 4) {
    return(
      <View style={styles.dice}>
        <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
        <View style={{flexDirection:'row'}}><Blank/><Blank/><Blank/></View>
        <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      </View>
      );
  } else if(props.num == 5) {
    return(
      <View style={styles.dice}>
        <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
        <View style={{flexDirection:'row'}}><Blank/><Circle/><Blank/></View>
        <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      </View>
      );
   } else {
     return(
      <View style={styles.dice}>
        <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
        <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
        <View style={{flexDirection:'row'}}><Circle/><Blank/><Circle/></View>
      </View>
       );
   }

 }

export default function App() {

  const [N, setN] = useState(1)

  return (
    <View style={{flex:1, marginTop:40}}>
    <Text style={styles.text}>Dice {N}</Text>
    <View style={{marginHorizontal:100, marginVertical:30}}>
      <TouchableOpacity onPress={
        function() {setN(Math.floor(Math.random() * 6 + 1)); } } >
          <View style={{flexDirection:'row', justifyContent:'center'}}>
            <Dice num={N} />
          </View>
        </TouchableOpacity>
    </View>
  </View>

);
}
