import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from './src/screens/Home';
import {ExerciseOne} from './src/screens/ExerciseOne';
import {ExerciseTwo} from './src/screens/ExerciseTwo';
import {ExerciseThree} from './src/screens/ExerciseThree';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ExerciseOne" component={ExerciseOne} />
        <Stack.Screen name="ExerciseTwo" component={ExerciseTwo} />
        <Stack.Screen name="ExerciseThree" component={ExerciseThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
