import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {listener} from '../utils/listener';

export const ExerciseTwelve = () => {
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    setUpdateCount(0);
    const unsubscibe = listener(() => {
      setUpdateCount(value => value + 1);
    });

    return () => {
      unsubscibe();
    };
  }, []);

  return (
    <View style={style.subSection}>
      <Text>The listener has updated {updateCount} time(s).</Text>
    </View>
  );
};

const style = StyleSheet.create({
  subSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
