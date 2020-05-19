import React, { Component } from 'react';
import { View, Image,Text,FlatList, StyleSheet,TouchableOpacity} from 'react-native';
import { TouchableOpacity1 } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card, Button } from 'react-native-elements';
import {toJS} from 'mobx'
import Login from '../../Store/Login';
import { ScrollView } from 'react-native-gesture-handler';
import {observer} from 'mobx-react'
import VisitUser from './Visit/VisitUser'
import ProfilViewTravel from './ProfilViewTravel'
import Visit from '../../Store/Visit'
import Update from '../../Store/Update';
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
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
            style={{flexDirection:'row',marginTop:'5%', }}
            >
            <Icon name="question" size={20} color="#ffc966"/>
            <Text style={styles.question}>Soru Sor</Text>
            </TouchableOpacity>
                <View style={styles.atheader}>
                    <Text style={styles.textstyle}>{Visit.name}</Text>
                    <Text>@{Visit.nickname}</Text>
                    
                </View>
            <Image style={{width:50,height:50}}
                source={{uri: Visit.photo}}/>
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
    <Stack.Navigator initialRouteName="DashboardTravel">
      <Stack.Screen name="DashboardTravel" component={DashboardTravel} options={navigationOptionHandler}></Stack.Screen>
      <Stack.Screen name="VisitProfil" component={VisitProfil} options={navigationOptionHandler}></Stack.Screen>
    </Stack.Navigator>
  )
}

@observer
class DashboardTravel extends Component {
  state = {
    modalVisible: false,
    alert_id:'',
    data:Login.datatravel,
    checkvisible:true
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
    Visit._Photo()
        Visit._TravelCity()
        Visit._city()
        Visit._contactno()
        Visit._countravel()
        Visit._hobby()
        Visit._name()
        Visit._nickname()
        Visit._reliability()
        Visit._TravelChoise()
        Visit._contactemail()
  }
    renderContactsItem = ({item,index}) => {
        return(  
          <Card image={{uri: item.experience_photo}} >
          <TouchableOpacity
          onPress={() => {this.setState({alert_id: item}),Visit.id=item.user_id,this.setModalVisible()}}>
          <View style={styles.box}>
            <View style = {styles.rightbox}>
            <View style = {styles.headerview}>
                                <Text style={styles.header}>
                                  { ((item.experience_name).length > 25) ? 
                                    (((item.experience_name).substring(0,25-3)) + '...') : 
                                    item.experience_name }
                                  </Text>
                                  <View style={{ flexDirection:'row'}}>
                                      <Icon name="map-marker" size={15} color="#ffc966" style={{marginRight:'2%'}}/>
                                      <Text style={styles.maptext}>
                                        {item.experience_location}
                                      </Text>
                                  </View>
                              </View>
              <Text style={styles.body}>
                { ((item.experience_text).length > 180) ? 
                (((item.experience_text).substring(0,180-3)) + '...') : 
                item.experience_text }
              </Text>
              </View>
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
                    visible={this.state.modalVisible}
                    
                  >
                  <View style={styles.modalview}>
                    <View style={styles.ustmodal}> 
                    <TouchableOpacity style={{flex:1}}
                      onPress={() => {navigation.navigate("VisitProfil");this.setState({modalVisible:false})}}
                    >
                    <View style = {{flexDirection:'row'}}>
                    <Image style={{width:'25%',height:'130%'}}
                          source={{uri: Visit.photo}}/>
                    <View style={styles.tustmodal}>
                    <Text>{Visit.name}</Text>
                    <Text>@{Visit.nickname}</Text>
                    </View></View></TouchableOpacity>
                    <View style = {{flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                    <TouchableOpacity
                        style={{ marginRight:'10%'}}
                        isVisible= {this.state.checkvisible}
                        onPress={()=>{ Update.UpdateReliability}}
                        ><Icon name="check" size={30} color="green"/></TouchableOpacity>
                    <TouchableOpacity
                        style = {{}}
                        onPress={() => {
                          this.setState({modalVisible:false});
                        }}><Icon name="close" size={30} color="orange"/></TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.altmodal}>
                    <ScrollView>
                    <Image style={{width:300,height:150}}
                    source={{uri: this.state.alert_id.experience_photo}}/>
                    <View style={styles.taltmodal}>
                      <View style={{ flexDirection:'row',justifyContent:'flex-end'}}>
                                      <Icon name="map-marker" size={15} color="#ffc966" style={{marginRight:'2%'}}/>
                                      <Text style={styles.maptext}>
                                        {this.state.alert_id.experience_location}
                                      </Text>
                                  </View>
                      <Text style={styles.header}>
                      {this.state.alert_id.experience_name}
                      </Text>
                      <Text style={styles.textm}>
                        {this.state.alert_id.experience_text}
                      </Text>
                      </View>
                    </ScrollView>
                    </View> 
                  </View>
                  
                </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view:{
    backgroundColor:'#f2f2f2',
    flex:1,
  },
  asheader:{
    marginVertical:'5%',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    flex:1,
  },
  asbody:{
    flex:8,
  },
  textstyle:{
    fontSize:16,
    fontWeight:'bold',
  },
  atheader:{
    justifyContent:'flex-start',
    alignItems:'flex-start',
    paddingLeft:'10%'
  },
  question:{
    fontSize:16,
    fontWeight:'bold',
    color:'orange',
    marginLeft:'5%'
  },
  box:{
    borderRadius:15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  header:{
    fontWeight:'bold',
    fontSize:16,
    marginTop:'3%'
  },
  maptext:{
    fontSize:10
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
    flexDirection:'column'
  },
  ustmodal:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  }, 
  altmodal:{
    flex:9,
    
  },
  tustmodal:{
    alignItems:"center",
    justifyContent:'center'
  },
 
  taltmodal:{
    
  },
  textm:{
    paddingTop:'5%',
    alignSelf:"center"
  }
})
