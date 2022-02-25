/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ExerciseFive = () => {
  return (
    <View style={style.container}>
      <View style={[style.square, {backgroundColor: 'red'}]}>
        <Text>Square 1</Text>
      </View>
      <View style={[style.square, {backgroundColor: 'yellow'}]}>
        <Text>Square 2</Text>
      </View>
      <View style={[style.square, {backgroundColor: 'green'}]}>
        <Text>Square 3</Text>
      </View>
    </View>
  );
};
