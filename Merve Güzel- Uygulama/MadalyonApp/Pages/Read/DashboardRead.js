import React, { Component } from 'react';
import { View, Image,Text,TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card, Button } from 'react-native-elements';
import {toJS} from 'mobx'
import { ScrollView } from 'react-native-gesture-handler';
import Axios from 'axios'
import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react'
import Login from '../../Store/Login'
import visit from '../../Store/Login'
import Read from '../../Store/Read';
import VisitUser from './Visit/VisitUser'
class VisitProfil extends Component {
  state={
    visible:true
  }
  render(){
    let {navigation} = this.props;
    return(
      <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={this.state.visible}
                    style={{backgroundColor:'#f2f2f2'}}
      >
            <TouchableOpacity
             onPress={()=>{navigation.pop()}}
            >
             <Icon name="backward" size={40} color="#ffc966"/>
            </TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Card containerStyle={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity 
            style={{flexDirection:'row',marginTop:'5%', }}
            >
            <Icon name="question" size={20} color="#ffc966"/>
            
            <Text style={styles.question}>Soru Sor</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <View style={styles.atheader}>
                    <Text style={styles.textstyle}>{Read.name}</Text>
                    <Text>@{Read.nickname}</Text>
                    
                </View>
            <Image style={{width:50,height:50}}
                source={{uri: Read.photo}}/>
                </View>
            </View>
        </Card>
        </View>
      <VisitUser/>
      </Modal>
    )
  }
}
const Stack = createStackNavigator();
const  navigationOptionHandler = () => ({
  headerShown: false
})
export default function VisitStack()
{
  return(
    <Stack.Navigator initialRouteName="DashboardRead">
      <Stack.Screen name="DashboardRead" component={DashboardRead} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="VisitProfil" component={VisitProfil} options={navigationOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}
@observer
class DashboardRead extends Component {
  state = {
    modalVisible: false,
    alert_id:'',
    data:Login.dataread,
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });

        Read._Photo()
        Read._city()
        Read._contactno()
        Read._countravel()
        Read._hobby()
        Read._name()
        Read._nickname()
        Read._reliability()
        Read._contactemail()
        Read._readchoise()
        Read._Library()
  }
    renderContactsItem = ({item,index}) => {
        return(  
          <Card>
          <TouchableOpacity style={{flexDirection:'row'}}
          onPress={() => {this.setState({alert_id: item}),Read.id=item.user_id,this.setModalVisible()}}>
            <Image source={{uri : item.review_photo}} style={{width:'25%', height:'100%'}}/>
            <View style = {styles.rightbox}>
            <View style = {styles.headerview}>
                                <Text style={styles.header}>
                                  { ((item.review_name).length > 25) ? 
                                    (((item.review_name).substring(0,25-3)) + '...') : 
                                    item.review_name }
                                  </Text>
                              </View>
              <Text style={styles.body}>
                { ((item.review_text).length > 180) ? 
                (((item.review_text).substring(0,180-3)) + '...') : 
                item.review_text }
              </Text>
              </View>
          </TouchableOpacity>
          </Card>
        )
      }

  render() { 
    let {navigation} = this.props; 
    return ( 
      <View>
     <FlatList
        renderItem={this.renderContactsItem}
        keyExtractor= {(item)=>item.id}
        data={this.state.data}
      />
       <Modal
                  animationType="slide"
                    transparent={true}
                    style={{flex:1,backgroundColor:'#ffffff'}}
                    visible={this.state.modalVisible}
                    image={{uri: this.state.alert_id.review_photo}}
                  >
                    
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                    
                    <Image style={{width:90,height:150, marginLeft:'5%',marginTop:'5%'}}
                      source={{uri: this.state.alert_id.review_photo}}/>
                    <Card wrapperStyle={{backgroundColor:'#f2f2f2'}} containerStyle={{backgroundColor:'#f2f2f2', height:'80%', width:'60%'}}>
                    
                    <View style={styles.modaltop}>
                      <TouchableOpacity
                      onPress={()=>{
                        navigation.navigate("VisitProfil");this.setState({modalVisible:false})
                      }}
                      >
                      <Image style={{width:'60%',height:'80%'}}
                          source={{uri: Read.photo}}/>
                      <View>
                      <Text>{Read.name}</Text>
                    <Text>@{Read.nickname}</Text>
                      </View></TouchableOpacity>
                      <TouchableOpacity
                        ><Icon name="check" size={30} color="green"/></TouchableOpacity>
                      <TouchableOpacity
                          onPress={() => {
                            this.setState({modalVisible:false});
                          }}><Icon name="close" size={30} color="orange"/></TouchableOpacity>
                    </View>
                    </Card>
                    </View>
                   <ScrollView style={{marginHorizontal:'5%', marginVertical:'5%'}}>
                      <View style={styles.modalbottom}>
                      
                        <View style={{marginHorizontal:'5%',marginVertical:'5%'}}>
                          <Text style={styles.header}>
                          {this.state.alert_id.review_name}
                          </Text>
                          <Text>
                            {this.state.alert_id.review_text}
                          </Text>
                          </View>
                        </View> 
                  </ScrollView>
                </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  rightbox:{
   width:'60%',
   marginLeft:'2%'
  },
  header:{
    fontWeight:'bold',
    fontSize:16
  },
  body:{
    marginVertical:10,
  },
  headerview:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  modalview:{
    backgroundColor:"#ffffff",
    padding:'10%',
    flex:1,
    flexDirection:'column',
  },
  modaltop:{
    height:75,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  modalbottom:{
    flexDirection:'row'
  },
})
