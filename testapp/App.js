import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button} from 'react-native';

var text_st = {fontSize: 20, margin:10};
var text2_st = {fontSize: 30, backgroundColor: 'lightgray', padding:10, margin:10};
var text3_st = {fontSize: 30, padding:10, margin:10};
var input_st = {fontSize: 20, borderWidth:1, padding:10, margin:10};

function HelloScreen() {

  const [ greet, setGreet ] = useState('Hi');
  const [ name, setName ] = useState('Name');

  return (
    <View>
      <Text style={text_st}>{greet}, {name}</Text>
      <TextInput style={input_st} onChangeText={ setName } />

      <View style={{margin:10, flexDirection:"row-reverse"}}>
        <Button title="Nice"
                onPress={ function() { setGreet('Nice to meet you')}} />
        <View style={{width:10}}></View>
        <Button title="Hello"
                onPress={ function() { setGreet('Hello')}} />
      </View>
    </View>
  );
}

function AboutScreen() {
  return (
    <View>
      <Text style={text_st}>This is about the app</Text>
      <Image style={{width:200, height:200}} source={require('./cat-icon.png')} />
    </View>
  )
};

function MultScreen() {

  const [ val, setval ] = useState(0);
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  return (
    <ScrollView contentContainerStyle={{paddingTop: 30}}>
      <View style={{ flexDirection: "row" }}>
        <Text style={text2_st}>{A}</Text>
        <Text style={text3_st}>X</Text>
        <Text style={text2_st}>{B}</Text>
        <Text style={text3_st}>=</Text>
        <Text style={text2_st}> { Number(A) * Number(B) } </Text>
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

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={text_st}>Home Screen</Text>
      <Button title="About"
        onPress={ function() { navigation.navigate('About') } } />
      <View style={{height:10}} />
      <Button title="Hello"
        onPress={ function() { navigation.navigate('Hello') } } />
      <View style={{height:10}} />
      <Button title="구구단"
        onPress={ function() { navigation.navigate('구구단') } } />
    </View>
  );
}

const Tab= createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Hello" component={HelloScreen} />
        <Tab.Screen name="구구단" component={MultScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
