import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const style = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'blue',
    padding: 30,
    maxWidth: 100,
  },
});

export const ExerciseOne = () => {
  return (
    <View style={style.sectionContainer}>
      <Text>Hello world!</Text>
    </View>
  );
};
