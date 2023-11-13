import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Audio } from 'expo-av';

var url = "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=af40fa5f16277c5903555d27da95ccdb"
var st_text = { fontSize: 20 };

export default function App() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [temp, setTemp] = useState('');
  const [weather, setWeather] = useState('');
  const [wind, setWind] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(function() {
    fetch(url)
      .then(function (response) {return response.json(); })
      .then(function (json) {
        console.log(json); 
        setCity(json.name); 
        setCountry(json.sys.country);
        setTemp(json.main.temp);
        setWeather(json.weather[0].description);
        setWind(json.wind.speed); 
        setIcon("http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
      } )
      .catch(function (error) { console.error(error); })
  }, []);

  return (
    <View style={{ flex:1, marginTop: 30, padding: 20 }}>
      <Text style={st_text}>City: {city}</Text>
      <Text style={st_text}>Country: {country}</Text>
      <Text style={st_text}>Temp: {temp}</Text>
      <Text style={st_text}>Weather: {weather}</Text>
      <Text style={st_text}>Wind: {wind}</Text>
      <Image style={{width:100, height:100}} source={{ uri:icon }}/>
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

