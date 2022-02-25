/* eslint-disable no-alert */
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Button} from '../components/Button';

const style = StyleSheet.create({
  sectionContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export const ExerciseThree = () => {
  return (
    <View style={style.sectionContainer}>
      <Button text="My Button" onPress={() => alert('Button press')} />
    </View>
  );
};
