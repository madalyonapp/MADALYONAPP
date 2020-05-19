import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, StyleSheet,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
function Bilgilerim (){
    return(
        <View style={styles.view}>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>
                    Kişisel Bilgiler
                </Text>
                <View style={styles.bstyle}>
                    <View style={styles.bodystyle}>
                    <View>
                        <Icon name="map-marker" size={30} color="#ffc966"/>
                        <Text>
                            
                        </Text>
                    </View>
                    <View>
                        <Icon name="phone" size={30} color="#ffc966"/>
                        <Text>

                        </Text>
                    </View>
                    <View>
                        <Icon name="heart" size={30} color="#ffc966"/>
                        <Text>

                        </Text>
                    </View>
                    </View>
                </View>
            </View>
            <View style={styles.fieldSet}>
                <Text style={styles.legend}>
                    İstatistikler
                </Text>
                <View style={styles.bstyle}>
                    <View style={styles.bodystyle}>
                    <View>
                        <Icon name="share-alt" size={30} color="#ffc966"/>
                        <Text>
                            
                        </Text>
                    </View>
                    <View>
                        <Icon name="question-circle" size={30} color="#ffc966"/>
                        <Text>

                        </Text>
                    </View>
                    <View>
                        <Icon name="signal" size={30} color="#ffc966"/>
                        <Text>

                        </Text>
                    </View>
                    <View>
                        <Icon name="clock-o" size={30} color="#ffc966"/>
                        <Text>

                        </Text>
                    </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
function  Eleştirilerim(){
    return(
        <View style={styles.view}>
            
        </View>
    )
}
function  Kütüphanem(){
    return(
        <View style={styles.view}>
               
        </View>
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
  