/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {Button} from '../components/Button';

export const ExerciseSeven = () => {
  const [input, setInput] = useState('');

  return (
    <View>
      <Text style={style.text}>Type something ... </Text>
      <TextInput style={style.input} onChangeText={setInput} value={input} />

      <View style={style.sectionButton}>
        <Button text="View input" onPress={() => alert(input)} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    padding: 10,
    paddingBottom: 0,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 10,
    padding: 10,
    backgroundColor: '#cecece',
    borderRadius: 10,
  },
  sectionButton: {
    alignItems: 'center',
    padding: 10,
  },
});
