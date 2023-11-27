import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Audio } from 'expo-av';
import CalendarPicker from 'react-native-calendar-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Memo" component={MemoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }){

  async function date_change(d) {
    console.log(d.format('YYYYMMDD'));
    var date = d.format('YYYYMMDD');

    var val_expense = '';
    var val_memo = '';

    var value = await AsyncStorage.getItem(date);
    var value_m = await AsyncStorage.getItem(date + 'm');

    console.log(value);

    if (value !== null) {
      val_expense = value;
      val_memo = value_m;
    }

    navigation.navigate('Memo',
    {date: d, expense: val_expense, memo: val_memo });
  }

  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={date_change}/>
    </View>
  );
}

function MemoScreen({ route, navigation }){

  var d = route.params.date;

  const [date, setDate] = useState('YYYYMMDD');
  const [date1, setDate1] = useState('MMMM DD, YYYY');
  const [expense, setExpense] = useState(route.params.expense);
  const [memo, setMemo] = useState(route.params.memo);

  async function save_memo(){
      await AsyncStorage.setItem(date, expense)
      await AsyncStorage.setItem(date+'m', memo)
    }

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.datetext}>{ date1 }</Text>
          <View style={styles.row}>
            <Text style={styles.text}>Expense</Text>
            <TextInput style={styles.expense} keyboardType="numeric" onChangeText={setExpense} />
            <Button title="Save" />
          </View>
          <TextInput style={styles.memo} placeholder='Memo' onChangeText={setMemo} />
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  box: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  datatext: {
    fontSize: 20,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  expense: {
    flex: 1,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    fontSize: 16,
    color: 'blue',
  },
  memo: {
    borderBottomWidth: 1,
    fontSize: 16,
    marginTop: 10,
    color: 'blue',
  }
  },
);
