import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, ImageBackground, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Audio } from 'expo-av';
import CalendarPicker from 'react-native-calendar-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [date, setDate] = useState('')
  const [date1, setDate1] = useState('')
  const [expense, setExpense] = useState('')
  const [memo, setMemo] = useState('')
 
  async function date_change(d) {
    console.log(d.format('YYYYMMDD'));
    setDate(d.format('YYYYMMDD'));
    setDate1(d.format('MMMM DD, YYYY'));

    var key = d.format('YYYYMMDD');
    var value = await AsyncStorage.getItem(key);
    var value_m = await AsyncStorage.getItem(key + 'm');

    console.log(value);

    if (value !== null) {
      setExpense(value)
      setMemo(value_m)
    } else {
      setExpense('')
      setMemo('')
    }
  }

  async function save_memo(){
    await AsyncStorage.setItem(date, expense)
    await AsyncStorage.setItem(date+'m', memo)
  }

  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={date_change}/>
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
