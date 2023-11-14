import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Audio } from 'expo-av';

var url = "http://api.openweathermap.org/data/2.5/forecast?q=Seoul&units=metric&cnt=5&appid=6af8dad4784c634d3674f60110f2a015"
var st_text = { fontSize: 20 };


export default function App() {
//  const [city, setCity] = useState('');
//  const [country, setCountry] = useState('');
  const [temp0, setTemp0] = useState('');
  const [weather0, setWeather0] = useState('');
  const [temp1, setTemp1] = useState('');
  const [weather1, setWeather1] = useState('');
  const [temp2, setTemp2] = useState('');
  const [weather2, setWeather2] = useState('');
  const [temp3, setTemp3] = useState('');
  const [weather3, setWeather3] = useState('');
  const [temp4, setTemp4] = useState('');
  const [weather4, setWeather4] = useState('');

  const [sys0, setSys0] = useState('');
  const [sys1, setSys1] = useState('');
  const [sys2, setSys2] = useState('');
  const [sys3, setSys3] = useState('');
  const [sys4, setSys4] = useState('');
//  const [wind, setWind] = useState('');
//  const [icon, setIcon] = useState('');

  useEffect(function() {
    fetch(url)
      .then(function (response) {return response.json(); })
      .then(function (json) {
        console.log(json); 
//        setCity(json.name); 
//        setCountry(json.sys.country);
        setTemp0(json.list[0].main.temp);
        setWeather0(json.list[0].weather[0].description);
        setTemp1(json.list[1].main.temp);
        setWeather1(json.list[1].weather[0].description);
        setTemp2(json.list[2].main.temp);
        setWeather2(json.list[2].weather[0].description);
        setTemp3(json.list[3].main.temp);
        setWeather3(json.list[3].weather[0].description);
        setTemp4(json.list[4].main.temp);
        setWeather4(json.list[4].weather[0].description);

        setSys0(json.list[0].dt_txt.substring(5, 16));
        setSys1(json.list[1].dt_txt.substring(5, 16));
        setSys2(json.list[2].dt_txt.substring(5, 16));
        setSys3(json.list[3].dt_txt.substring(5, 16));
        setSys4(json.list[4].dt_txt.substring(5, 16));
//        setWind(json.wind.speed); 
//        setIcon("http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
      } )
      .catch(function (error) { console.error(error); })
  }, []);

  return (
    <View style={{ flex:1, marginTop: 30, padding: 20 }}>
      <Text style={st_text}>{`${sys0}\t${temp0}\t${weather0}`}</Text>
      <Text style={st_text}>{`${sys1}\t${temp1}\t${weather1}`}</Text>
      <Text style={st_text}>{`${sys2}\t${temp2}\t${weather2}`}</Text>
      <Text style={st_text}>{`${sys3}\t${temp3}\t${weather3}`}</Text>
      <Text style={st_text}>{`${sys4}\t${temp4}\t${weather4}`}</Text>
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

