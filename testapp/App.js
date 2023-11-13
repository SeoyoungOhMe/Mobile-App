import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(function() {
    fetch('https://reactnative.dev/movies.json')
      .then(function (response) {return response.json(); })
      .then(function (json) {console.log(json); setData(json); })
      .then(function (error) {console.error(error);})
  }, []);

  return (
    <View style={{flex:1, marginTop: 30, padding: 20 }}>
      <Text>{JSON.stringify(data)}  </Text>
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

