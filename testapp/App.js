import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Audio } from 'expo-av';
import CalendarPicker from 'react-native-calendar-picker';

export default function App() {

  const [date, setDate] = useState('')
  const [date1, setDate1] = useState('')

  function onDateChange(d) {
    console.log(d);
    console.log(d.toString());
    console.log(d.format('YYYYMMDD'));
    console.log(d.format('MMMM DD, YYYY'));

    setDate(d.format('YYYYMMDD'));
    setDate1(d.format('MMMM DD, YYYY'));
  }

  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={onDateChange}/>
      <View style={styles.box}>
        <Text>Date: { date }</Text>
        <Text style={styles.text}>{ date1 }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  },
);
