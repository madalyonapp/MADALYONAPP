import * as React from 'react';
import {Component} from 'react';
import { Text, View, Image,StyleSheet, FlatList,Dimensions,TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardTravel from './DashboardTravel';
import SearchTravel from './SearchTravel';
import { Card, Button } from 'react-native-elements';
import ProfilViewTravel from './ProfilViewTravel';
import Icon from 'react-native-vector-icons/FontAwesome'
import { TabView, SceneMap } from 'react-native-tab-view';
import Modal from 'react-native-modal';
import Setting from '../Setting'
import Login from '../../Store/Login'
import {observer} from 'mobx-react'
import Axios from 'axios'
import Addexperience from './Adexperience'
import Visit from '../../Store/Visit';
import TravelQuestion from '../../Store/TravelQuestion';
import Translate from '../Translate';
import CurrencyPage from '../CurrencyPage';
import DictionaryPage from '../DictionaryPage';
import Help from '../Help';
import ImagePicker from './imagePicker';
class Header extends Component {
  state={
    photo:Login.photo,
  }
  render(){
    return(
          <Image style={{width:40,height:40}}
            source={{uri:this.state.photo}}/>
    );
  }
}

function AnaSayfa({navigation}){
    return (
      <View style={styles.view}>
        <View style={styles.asheader}>
          <View style={styles.asheader}>
          <Header/>
          <TouchableOpacity
            onPress={()=> navigation.pop()}>
              <Text style={styles.textstyle}>Gezer Arayüzü</Text>
            </TouchableOpacity>
            <Text style={styles.textstyle}>@{Login.nickname}</Text>
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
    )
}


function Arama() {
  return (
    <View style={styles.view}>
      <SearchTravel/>
    </View>
  );
}

//furkan
function Ayarlar({navigation}) {
  return (
    <View style={{flex:1}}>
      <View style={{flex:9}}>
        <Setting/>
      </View>
      <View style={{ flex:1, flexDirection: 'row-reverse',justifyContent:'center' }}>
                <TouchableOpacity style={styles.butonSingIn}>
                <Icon name="sign-out" size={35} color="white"  />
                </TouchableOpacity>
                 <TouchableOpacity style={styles.butonSingIn} onPress={() => navigation.navigate('HelpPage')}>
                 <Icon name="info" size={35} color="white"  />
            </TouchableOpacity>
            </View>
    </View>
  );
}
const gelenSorular = () => {
  const [ isVisible, setIsVisible ] = React.useState(false);
  let modal_id=0;
  const [ value, onChangeText] = React.useState('');
  let dizi = TravelQuestion.users;
  let nickname="";
  return (
    <View style={{}}>
      <FlatList
        keyExtractor= {(item)=>item.id}
        data={TravelQuestion.travelquestion}
        renderItem={({item}) => {
          if (item.travel_questions_from_id==Login.id && item.travel_answers_message == null)
          return (
          <View>
            {TravelQuestion.from_id=item.user_id, TravelQuestion._nickname()}
              <Card>
                <View style={styles.user}>
                <Text style={{fontWeight:'bold', fontSize:20 ,alignItems:'center',justifyContent:'center'}}>Gelen Soru</Text>
                  { 
                    dizi.map((index)=>{
                    if(index.user_id == item.user_id)
                    {
                      nickname = index.user_nickname;
                    }
                  })}
                  <Text style= {{fontSize:16,marginTop:'2%'}}>Soru: {item.travel_questions_message}</Text>
                  
                </View>
                <View>
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Text style ={{marginTop:'2%'}}>@{nickname}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }} />
                   
                    <View style={{ display: 'flex', flexDirection: 'row-reverse', flex: 1 }}>
                      
                      <Button
                        style={{ width: 'min-content' }}
                        title="Cevapla"
                        type="outline"
                        onPress={() =>setIsVisible(!isVisible)}
                      />
                      <Icon name="trash" size={35} color="orange" style={{ marginRight: 10 }} />
                    </View>
                  </View>
                </View>
              </Card> 
              <Modal isVisible={isVisible}>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 0.5, backgroundColor: '#fff', padding: 10 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Soruyu Cevapla</Text>
                    <TextInput 
                      placeholder="Cevabiniz" 
                      onChangeText={(text) => onChangeText(text)}
                        />
                    <TouchableOpacity
                     onPress={() => {
                      TravelQuestion.answers= value; console.log(TravelQuestion.answers)
                      TravelQuestion.question_id=item.travel_questions_id;
                      TravelQuestion._updateandwers(); setIsVisible(!isVisible)} } 
                    >
                      <Text>Gönder</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          );
        }
        }
      />
     
    </View>
  );
};

const sorulanSorular = ()=>(
      <View style={{}}>
    <View style={{}}>
      <FlatList
          keyExtractor= {(item)=>item.id}
          data={TravelQuestion.travelquestion}
          renderItem={({item}) => {
            if (item.user_id==Login.id)
            {
            return (
              <Card>
                <Text style={{fontWeight:'bold', fontSize:20 ,alignItems:'center',justifyContent:'center'}}>Sorulan Soru</Text>
              <View style={styles.user}>
                <Text style={styles.name}>{}</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>Soru :</Text>
                <Text>{item.travel_questions_message}</Text>
                </View>
                <View style={{flexDirection:'row', marginTop:'2%'}}>
                <Text style={{fontWeight:'bold'}}>Cevap :</Text>
                <Text>{item.travel_answers_message === null ? 'Henuz Cevaplanmamis' : item.travel_answers_message}</Text>
                </View>
              </View>
              <TouchableOpacity style={{justifyContent:'flex-start',alignItems:'flex-end'}}>
              <Icon name="trash" size={35} color="orange" style={{ marginRight: 10 }} />
              </TouchableOpacity>
            </Card>
            );
            }
          }}
        />
    </View>
  </View>
    )
  


const initialLayout = { width: Dimensions.get('window').width };
function Sorular({navigation}) {
  
  const [ index, setIndex ] = React.useState(0);
  const [ routes ] = React.useState([
    { key: 'first', title: 'Gelen Sorular' },
    { key: 'second', title: 'Sorulan Sorular' }
  ]);

  const renderScene = SceneMap({
    first: gelenSorular,
    second: sorulanSorular
  });

  return (
    <View style={styles.view}>
      <View style={styles.asheader}>
        <View style={styles.asheader}>
          <Image style={{width:40,height:40}}
            source={{uri:Login.photo}}/>
          <Text style={styles.textstyle}>Gezer Arayüzü</Text>
          <Text style={styles.textstyle}>@{Login.nickname}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Ayarlar')}>
          <Icon name="cog" size={40} color="orange" />
        </TouchableOpacity>
      </View>
      <View style={styles.asbody}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </View>
    </View>
  );
}


function Profil({navigation}) {
  return (
    <View style={styles.view}>
      <View style={styles.asheader}>
    <View style={styles.asheader}>
    <Image style={{width:40,height:40}}
            source={{uri:Login.photo}}/>
        <Text style={styles.textstyle}>@{Login.nickname}</Text>
    </View>
    <TouchableOpacity
     onPress={()=> navigation.navigate('Dictionary')}
     >
        <Icon name="wechat" size={40} color="orange"/>
    </TouchableOpacity>
    <TouchableOpacity
     onPress={()=> navigation.navigate('Money')}
     >
        <Icon name="money" size={40} color="orange"/>
    </TouchableOpacity>
    <TouchableOpacity
     onPress={()=> navigation.navigate('Translate')}
      >
        <Icon name="language" size={40} color="orange"/>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={()=> navigation.navigate('Ayarlar')}>
        <Icon name="cog" size={40} color="orange"/>
    </TouchableOpacity>
</View>
        <View style={styles.asbody}>
          <ProfilViewTravel/>
        </View>
      </View>
  );
}
function eklebuton() {
  return (
         <Addexperience/>
 
  );
}
function Ceviri(){
  return(
    <Translate/>
  )
}
function Doviz(){
  return(
    <CurrencyPage/>
  )
}
function Sozluk(){
  return(
    <DictionaryPage/>
  )
}
function HelpPage(){
  return(
    <Help/>
  )
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
      <Stack.Screen name="HelpPage" component={HelpPage} options={navigationOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}
function ProfilStack()
{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Profil" component={Profil} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="Ayarlar" component={Ayarlar} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="Translate" component={Ceviri} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="CurrencyPage" component={Doviz} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="DictionaryPage" component={Sozluk} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="HelpPage" component={HelpPage} options={navigationOptionHandler}></Stack.Screen>
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
    
  },
  butonSingIn:{
    backgroundColor:"#ff6600",
    alignItems:"center",
    borderRadius:10,
    marginHorizontal:'20%',
    marginVertical:'10%',
    paddingHorizontal:'5%',
    paddingVertical:'5%'
  },
  
});


