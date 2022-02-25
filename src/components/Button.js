import React from 'react';
import {TouchableWithoutFeedback, Text, StyleSheet, View} from 'react-native';

const style = StyleSheet.create({
  view: type => ({
    padding: 20,
    margin: 5,
    backgroundColor:
      type === 'primary' ? 'rgb(0, 103, 213)' : 'rgb(90, 98, 104)',
    maxWidth: 150,
    borderRadius: 10,
  }),
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
});

export const Button = ({
  type = 'primary',
  text = 'Button',
  onPress = () => {},
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.view(type)}>
        <Text style={style.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
