import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {Button} from '../components/Button';

const style = StyleSheet.create({
  sectionContainer: {
    alignItems: 'center',
    padding: 10,
  },
  subSection: {
    padding: 20,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});

export const ExerciseFour = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={style.sectionContainer}>
      <Button text="My Button" onPress={() => setCount(state => state + 1)} />
      <Button type={'secondary'} text="Reset" onPress={() => setCount(0)} />

      <View style={style.subSection}>
        <Text style={style.text}>
          You have pressed the button: {count} {count > 1 ? 'times' : 'time'}
        </Text>
      </View>
    </View>
  );
};
