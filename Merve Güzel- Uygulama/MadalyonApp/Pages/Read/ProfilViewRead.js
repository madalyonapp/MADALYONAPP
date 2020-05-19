import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, StyleSheet,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import UseinfoPage from './UseinfoPage';
import ReviewPage from './ReviewPage'
import Library from './Library';

function Bilgilerim (){
    return(
            <UseinfoPage/>
     
    )
}
function  Eleştirilerim(){
    return(
        
            <ReviewPage/>
    
    )
}
function  Kütüphanem(){
    return(
        <Library/>
    )
}
const Tab = createMaterialTopTabNavigator();
export default function ProfilView(){
 
    return (
        <Tab.Navigator
            tabBarOptions={{
                
                activeTintColor:'#e67300',
                inactiveTintColor:'orange',
                labelStyle:{
                    fontWeight:'bold'
                },
                tabStyle:{
                    backgroundColor:'#f2f2f2',
                    
                },
                style:{
                    elevation:0,
                },
            }}
        >
          <Tab.Screen name="Bilgilerim" component={Bilgilerim} />
          <Tab.Screen name="Eleştirilerim" component={Eleştirilerim} />
          <Tab.Screen name="Kütüphanem" component={Kütüphanem} />        
          </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
   view:{
       flex:1,
       backgroundColor:'#f2f2f2',
   },
   bodystyle:{
        marginHorizontal:10,
        marginVertical:10,
   },
   bstyle:{
       backgroundColor:'#ffffff',
       flex:1,
       borderWidth:1,
       borderColor:'#808080',
       borderRadius:0,
       marginHorizontal:5,
       marginVertical:5,
   },
   fieldSet:{
    flex:3,
    margin: 15,
    justifyContent:'center',
    borderRadius: 0,
    borderWidth: 0.2,
    borderColor: '#808080',
},
legend:{
    position: 'absolute',
    top: -20,
    left: 10,
    fontWeight: 'bold',
    fontSize:16,
}
  });
  