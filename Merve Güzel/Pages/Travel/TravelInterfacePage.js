import * as React from 'react';
import { Text, View, Image,StyleSheet, FlatList,Dimensions,TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardTravel from './DashboardTravel';
import SearchTravel from './SearchTravel';
import { Card, Button } from 'react-native-elements';
import ProfilViewTravel from './ProfilViewTravel';
import Icon from 'react-native-vector-icons/FontAwesome'
import { TabView, SceneMap } from 'react-native-tab-view';
import Modal from 'react-native-modal';
import Setting from '../Setting'
import sorular from '../../geciciveriler/sorularTravel'
function AnaSayfa({navigation}) {
  return (
    <View style={styles.view}> 
        <View style={styles.asheader}>
          <View style={styles.asheader}>
          <Icon name="user" size={40} color="orange"/>
          <TouchableOpacity
            onPress={()=> navigation.pop()}>
              <Text style={styles.textstyle}>Gezer Arayüzü</Text>
            </TouchableOpacity>
              <Text style={styles.textstyle}>Kullanıcı Adı</Text>
          </View>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Ayarlar')}>
               <Icon name="cog" size={40} color="orange"/>
          </TouchableOpacity>
      </View>
      <View style={styles.asbody}>
      <DashboardTravel/>
      </View>
    </View>
  );
}
function Arama() {
  return (
    <View style={styles.view}>
      <SearchTravel/>
    </View>
  );
}

//furkan
function Ayarlar() {
  return (
    <View>
      
    </View>
  );
}

function Sorular({navigation}) {
  ( <View>

      </View>
  );
}
function eklebuton() {
  return (
    <View style={styles.view}>
      <Text>Makale ekle</Text>
    </View>
  );
}
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const  navigationOptionHandler = () => ({
  headerShown: false
})
function AnaSayfaStack()
{
  return(
    <Stack.Navigator>
      <Stack.Screen name="AnaSayfa" component={AnaSayfa} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="Ayarlar" component={Ayarlar} options={navigationOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}
function ProfilStack()
{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Profil" component={Profil} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="Ayarlar" component={Ayarlar} options={navigationOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}
export default function TravelInterfacePage() {
  return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'Ekle') {
              return <Icon name="plus-circle" size={70} color="orange"/>
            } 
            else if(route.name === 'AnaSayfa')
            {
              return <Icon name="home" size={30} color="orange"/>
            } 
            else if (route.name === 'Arama') {
              return <Icon name="search" size={30} color="orange"/>
            } 
            else if (route.name === 'Sorular') {
              return <Icon name="question-circle" size={30} color="orange"/>
            } 
            else {
              return <Icon name="user" size={30} color="orange"/>
            } 
          },
        })}
        tabBarOptions={{
          activeTintColor:'#e67300',
          inactiveTintColor:'orange',
          inactiveBackgroundColor:'#e6e6e6',
          activeBackgroundColor:'#e6e6e6',
          labelStyle:{
            fontWeight:'bold'
          },
          showIcon:true,
          
        }
        }
        >
        <Tab.Screen name="AnaSayfa" component={AnaSayfaStack} />
        <Tab.Screen name="Arama" component={Arama} />
        <Tab.Screen name="Ekle" component = {eklebuton}/>
        <Tab.Screen name="Sorular" component={Sorular} />
        <Tab.Screen name="Profil" component={ProfilStack} />
      </Tab.Navigator>
   
  );
}


const styles = StyleSheet.create({
  view:{
    backgroundColor:'#f2f2f2',
    flex:1,
  },
  header:{
    flex:1,
  },
  asheader:{
    borderRadius:15,
    backgroundColor:'#f2f2f2',
    marginVertical:10,
    marginHorizontal:10,
    paddingVertical:2,
    paddingHorizontal:5,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
  },
  asbody:{
    flex:8,
  },
  textstyle:{
    marginHorizontal:10,
    fontSize:16,
    
  }
  
});


