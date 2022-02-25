import React from 'react';
import {TouchableWithoutFeedback, Text, StyleSheet, View} from 'react-native';

const style = StyleSheet.create({
  view: {
    padding: 20,
    backgroundColor: 'green',
    maxWidth: 150,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
});

export const Button = ({text = 'Button', onPress = () => {}}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.view}>
        <Text style={style.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
