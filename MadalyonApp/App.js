import * as React from 'react';
import { Text, View, Image,StyleSheet, FlatList} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import LoginPage from './Pages/Login/LoginPage'
import InterfaceSectionPage from './Pages/InterfaceSectionPage'
import ReadInterfacePage from './Pages/Read/ReadInterfacePage'
import TravelInterfacePage from './Pages/Travel/TravelInterfacePage'
import Setting from './Pages/Setting'
import Dashboard from './Pages/Travel/DashboardTravel'
import LoginBody from './Pages/Login/LoginBody'
function App() {

  return (
    
          <LoginPage/>
  );
}
export default App;


