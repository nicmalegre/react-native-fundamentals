import React from 'react';
import {Button} from 'react-native';

export const ExerciseTwo = () => {
  return (
    <Button
      // eslint-disable-next-line no-alert
      onPress={() => alert('Hello!')}
      title="Button"
    />
  );
};
