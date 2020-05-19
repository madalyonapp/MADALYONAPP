import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import InsaniGerecler from '../screens/InsaniGerecler';
import Airport from '../screens/Airport';
import Food from '../screens/Food';
import Hospital from '../screens/Hospital';
import Money from '../screens/Money';
import Ceviri from '../screens/Ceviri';
import Doviz from '../screens/Doviz';

const Stack = createStackNavigator();

function homeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="InsaniGerecler" component={InsaniGerecler} />
        <Stack.Screen name="Airport" component={Airport} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Hospital" component={Hospital} />
        <Stack.Screen name="Money" component={Money} />
        <Stack.Screen name="Doviz" component={Doviz} />
        <Stack.Screen name="Ceviri" component={Ceviri} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default homeStack;
