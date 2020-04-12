import * as React from 'react';
import { Text, View, Image,StyleSheet, FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import LoginPage from './Pages/Login/LoginPage'
import InterfaceSecionPage from './Pages/InterfaceSectionPage'
import TravelInterfacePage from './Pages/Travel/TravelInterfacePage'
function App() {
  return (
    <InterfaceSecionPage/>
  );
}
export default App;


