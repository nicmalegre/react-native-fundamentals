import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from './src/screens/Home';
import {ExerciseOne} from './src/screens/ExerciseOne';
import {ExerciseTwo} from './src/screens/ExerciseTwo';
import {ExerciseThree} from './src/screens/ExerciseThree';
import {ExerciseFour} from './src/screens/ExerciseFour';
import {ExerciseFive} from './src/screens/ExerciseFive';
import {ExerciseSix} from './src/screens/ExerciseSix';
import {ExerciseSeven} from './src/screens/ExerciseSeven';
import {ExerciseEight} from './src/screens/ExerciseEight';
import {ExerciseNine} from './src/screens/ExerciseNine';
import {ExerciseTen} from './src/screens/ExerciseTen';
import ExerciseEleven from './src/screens/ExerciseEleven';
import {ExerciseTwelve} from './src/screens/ExerciseTwelve';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ExerciseOne" component={ExerciseOne} />
        <Stack.Screen name="ExerciseTwo" component={ExerciseTwo} />
        <Stack.Screen name="ExerciseThree" component={ExerciseThree} />
        <Stack.Screen name="ExerciseFour" component={ExerciseFour} />
        <Stack.Screen name="ExerciseFive" component={ExerciseFive} />
        <Stack.Screen name="ExerciseSix" component={ExerciseSix} />
        <Stack.Screen name="ExerciseSeven" component={ExerciseSeven} />
        <Stack.Screen name="ExerciseEight" component={ExerciseEight} />
        <Stack.Screen name="ExerciseNine" component={ExerciseNine} />
        <Stack.Screen name="ExerciseTen" component={ExerciseTen} />
        <Stack.Screen name="ExerciseEleven" component={ExerciseEleven} />
        <Stack.Screen name="ExerciseTwelve" component={ExerciseTwelve} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
