/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'green',
  },
});

export const ExerciseSix = () => {
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={[style.square]}>
          <Text>Square 1</Text>
        </View>
        <View style={[style.square]}>
          <Text>Square 2</Text>
        </View>
        <View style={[style.square]}>
          <Text>Square 3</Text>
        </View>
        <View style={[style.square]}>
          <Text>Square 4</Text>
        </View>
        <View style={[style.square]}>
          <Text>Square 5</Text>
        </View>
        <View style={[style.square]}>
          <Text>Square 6</Text>
        </View>
        <View style={[style.square]}>
          <Text>Square 7</Text>
        </View>
        <View style={[style.square]}>
          <Text>Square 8</Text>
        </View>
        <View style={[style.square]}>
          <Text>Square 9</Text>
        </View>
        <View style={[style.square]}>
          <Text>Square 10 </Text>
        </View>
        <View style={[style.square]}>
          <Text>Square 11 </Text>
        </View>
        <View style={[style.square]}>
          <Text>Square 12 </Text>
        </View>
      </View>
    </ScrollView>
  );
};
