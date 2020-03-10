import * as React from 'react';
import { Text, View, Image,StyleSheet, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import makale from './geciciveriler/makale.js';
import kullanici from './geciciveriler/kullanici.js';
import Dashboard from './Dashboard';
import Search from './Search';
import ProfilView from './ProfilView';
import Icon from 'react-native-vector-icons/FontAwesome'

function AnaSayfa({navigation}) {
  return (
    <View style={styles.view}> 
        <View style={styles.asheader}>
          <View style={styles.asheader}>
          <Icon name="user" size={40} color="orange"/>
              <Text style={styles.textstyle}>Arayüz tercihi</Text>
              <Text style={styles.textstyle}>Kullanıcı Adı</Text>
          </View>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Ayarlar')}>
               <Icon name="cog" size={40} color="orange"/>
          </TouchableOpacity>
      </View>
      <View style={styles.asbody}>
      <Dashboard/>
      </View>
    </View>
  );
}
function Ayarlar() {
  return (
    <View style={styles.view}>
      <View style={styles.asbody}>
          <Text>
            Ayarlar
          </Text>
      </View>
    </View>
  );
}

function Arama() {
  return (
    <View style={styles.view}>
      <Search/>
    </View>
  );
}
function Sorular() {
  return (
    <View style={styles.view}>
      
      <View style={styles.asbody}>
        
      </View>
    </View>
  );
}

function Profil({navigation}) {
  
  return (
    <View style={styles.view}> 
       <View style={styles.asheader}>
          <View style={styles.asheader}>
          <Icon name="user" size={40} color="orange"/>
              <Text style={styles.textstyle}>Arayüz tercihi</Text>
              <Text style={styles.textstyle}>Kullanıcı Adı</Text>
          </View>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Ayarlar')}>
              <Icon name="cog" size={40} color="orange"/>
          </TouchableOpacity>
      </View>
        <View style={styles.asbody}>
          <ProfilView/>
        </View>
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
export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
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


