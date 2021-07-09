/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Homescreen from './components/homeScreen'
import Detailscreen from './components/detailScreen'
import Splashscreen from './components/splashScreen'
const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Splash" component={Splashscreen} />
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Detail" component={Detailscreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
