import React, { Component } from 'react'
import { Text, View,StyleSheet,FlatList ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios'
import Modal from 'react-native-modal';
import Login from '../../Store/Login'
import {observer} from 'mobx-react'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {toJS} from 'mobx'
import { Card, Button } from 'react-native-elements';
import maps from '../../geciciveriler/mapscity'
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker'
import Add from '../../Store/Add';
@observer
export default class TravelMap extends Component {
    state = 
    {
        data : Login.travelcity,
        modalVisible1:false,
        modalVisible2:false,
        mapstate : maps,
        country : "",
        city : "",
        textcountry:"",
        textcity:"",
        country_code:"",
        mapsstatecity : maps,
        choise:"",
        date:new Date(),
    
    }
    serachfilterCountry = text => {
        const newMaps = maps.filter(item=> {
            const listItem = `${item.country.toLowerCase()}`
            return listItem.indexOf(text.toLowerCase()) > -1;
        })
        this.setState({
            mapstate:newMaps,
        });
    };
    serachfilterCity = text => {
        const newMaps = maps.filter(item=> {
            const listItem = `${item.city.toLowerCase()}`
            return listItem.indexOf(text.toLowerCase()) > -1;
        })
        this.setState({
            mapsstatecity:newMaps,
        });
    };
    renderHeadercountry =()=>{
        return(
            <View style={styles.body}>
                <TextInput  
                onChangeText={text => {
                    this.setState({
                       textcountry : text,
                    });
                    this.serachfilterCountry(this.state.textcountry);
                }}
                value={this.state.textcountry} 
                placeholder="Search..." style={styles.inputstyle} 
                />
            </View>
        )
    };
    
    renderHeadercity =()=>{
        return(
            <View style={styles.body}>
                <TextInput  
                onChangeText={text => {
                    this.setState({
                       textcity : text,
                    });
                    this.serachfilterCity(this.state.textcity);
                }}
                value={this.state.textcity} 
                placeholder="Search..." style={styles.inputstyle} 
                />
            </View>
        )
    };
    componentDidMount = () => 
      {
        Login._datatravel()
        Login._TravelCity();
        Login._Photo();
        Login._city();
        Login._contactno();
        Login._countravel();
        Login._hobby();
        Login._name();
        Login._nickname();
        Login._reliability();
        Login._travelchoise();
        Login._ReadAnswersCount();
        Login._TravelAnswersCount();
        Login._Library();
        Login._readchoise();
        Login._contactemail();
          var today = new Date();
          var date = '';
          date += today.getFullYear() + '-';
          if((today.getMonth()+1)<10)  { date += '0' + (today.getMonth()+1);}else{  date += (today.getMonth()+1);}
          if(today.getDate()<10)  {date += '-0' + today.getDate();}else{  date += '-' + today.getDate();}
          return(this.setState({date:date}));

      }
    render() {
        return (
            <View style={styles.view}>
           <View style={styles.fieldSet}>
           <View style={styles.addbuton}>
               <TouchableOpacity style = {{backgroundColor:'#f2f2f2'}}
               onPress={()=>{this.setState({modalVisible1:true})}}
               >
                   <Icon name="plus-circle" size={60} color="#ffc966"/>
                   </TouchableOpacity>
                   <Modal
                animationType="slide"
                visible={this.state.modalVisible1}
                style={{backgroundColor:"white"}}
            >
                <View style = {{flex:1}}>
                    <View style= {{flex:3}}> 
                    <FlatList
                    ListHeaderComponent={this.renderHeadercountry}
                    renderItem={({item,index}) => {
                        return(
                          <TouchableOpacity
                          onPress={()=>{this.setState({country : item.country, textcountry:item.country})}}
                          >
                          <View style={styles.box}>
                              <Text style={{fontSize:12}}>
                                {item.country}
                              </Text>
                              </View>
                          </TouchableOpacity> 
                        )
                      }}
                    keyExtractor= {(item)=>item.name}
                     data={this.state.mapstate}
                    />
                    </View>
                    
                    <View style= {{flex:2, marginTop:'5%'}}> 
                    <FlatList
                    ListHeaderComponent={this.renderHeadercity}
                    renderItem={({item,index}) => {
                        if(item.country == this.state.country)
                        {
                        return(
                          <TouchableOpacity 
                          onPress={()=>{this.setState({city: item.city, textcity:item.city})}}
                          >
                          <View style={styles.box}>
                              <Text>
                                {item.city}
                              </Text>
                              </View>
                          </TouchableOpacity> 
                        )}
                      }}
                    keyExtractor= {(item)=>item.name}
                     data={this.state.mapsstatecity}
                    />
                    </View>
                   <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                   <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2018-01-01"
                    maxDate="2022-01-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                   
                   </View>
                    <View style={{flex:2}}>
                        <TouchableOpacity
                        style = {styles.buton}
                        onPress={()=>{
                        Add.country = this.state.country, Add.city=this.state.city, Add.date=this.state.date, Add.mapchoise=1, Add.AddMap(),this.setState({modalVisible1:false})
                    }}


                        >
                        <Icon name="plus" size={25} color="white"/>
                         <Text style = {{color:'white', marginLeft:'10%',justifyContent:'center',alignItems:'center'}}>Ekle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress = {()=>{this.setState({textcountry:"",textcity:""}),this.setState({modalVisible1:false})}}
                        >
                        <Icon name="backward" size={35} color="#ffc966"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

                </View>
                <Text style={styles.legend}>
                    Gezdiğim Yerler
                </Text>
                <View style={styles.bstyle}>
                    <View style={styles.bodystyle}>
                    <FlatList style={styles.flt}
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => 
                            {
                                if(item.user_id == Login.id && item.travel_choise == 1)
                                { return(
                                    <Card>
                                    <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                                    <View style = {{flexDirection:'row' }}>
                                    <Icon name="map-marker" size={15} color="#ffc966"/>
                                      <View style= {{flexDirection:'row',marginLeft:'5%'}}>
                                        <Text style={{marginRight:'2%'}}>
                                            {item.travel_city}
                                        </Text>
                                        <Text>,</Text>
                                        <Text style={{marginLeft:'2%'}} >
                                            {item.travel_country}
                                        </Text>
                                      </View>
                                      </View>
                                      <View style={{justifyContent:'flex-end', flexDirection:'row'}}>
                                      <Text style={{marginRight:'5%'}}>
                                            { ((item.travel_date).length > 10) ? 
                                            (((item.travel_date).substring(0,10))) : 
                                            item.travel_date }
                                      </Text>
                                      <Icon name="calendar-o" size={15} color="#ffc966"/>
                                      </View>
                                    </View>
                                    </Card>
                                    )
                            }
                        }
                        }
                        />
                    </View>
                </View>
            </View>
           
           
            <View style={styles.fieldSet}>
            <View style={styles.addbuton}>
               <TouchableOpacity style = {{backgroundColor:'#f2f2f2'}} onPress={()=>{this.setState({modalVisible2:true})}}>
                   <Icon name="plus-circle" size={60} color="#ffc966"/>
                   </TouchableOpacity>
                   <Modal
                animationType="slide"
                visible={this.state.modalVisible2}
                style={{backgroundColor:"white"}}
            >
                <View style = {{flex:1}}>
                    <View style= {{flex:3}}> 
                    <FlatList
                    ListHeaderComponent={this.renderHeadercountry}
                    renderItem={({item,index}) => {
                        return(
                          <TouchableOpacity
                          onPress={()=>{this.setState({country : item.country, textcountry:item.country})}}
                          >
                          <View style={styles.box}>
                              <Text style={{fontSize:12}}>
                                {item.country}
                              </Text>
                              </View>
                          </TouchableOpacity> 
                        )
                      }}
                    keyExtractor= {(item)=>item.name}
                     data={this.state.mapstate}
                    />
                    </View>
                    
                    <View style= {{flex:2, marginTop:'5%'}}> 
                    <FlatList
                    ListHeaderComponent={this.renderHeadercity}
                    renderItem={({item,index}) => {
                        if(item.country == this.state.country)
                        {
                        return(
                          <TouchableOpacity 
                          onPress={()=>{this.setState({city: item.city, textcity:item.city})}}
                          >
                          <View style={styles.box}>
                              <Text>
                                {item.city}
                              </Text>
                              </View>
                          </TouchableOpacity> 
                        )}
                      }}
                    keyExtractor= {(item)=>item.name}
                     data={this.state.mapsstatecity}
                    />
                    </View>
                   <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                   <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2018-01-01"
                    maxDate="2022-01-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                   </View>
                    <View style={{flex:2}}>
                        <TouchableOpacity
                        style = {styles.buton}
                        onPress={()=>{
                            Add.country = this.state.country, Add.city=this.state.city, Add.date=this.state.date, Add.mapchoise=0, Add.AddMap(),this.setState({modalVisible2:false})
                        }}
                        >
                        <Icon name="plus" size={25} color="white"/>
                         <Text style = {{color:'white', marginLeft:'10%',justifyContent:'center',alignItems:'center'}}>Ekle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress = {()=>{this.setState({textcountry:"",textcity:""}) ,this.setState({modalVisible2:false})}}
                        >
                        <Icon name="backward" size={35} color="#ffc966"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
                </View>
                <Text style={styles.legend}>
                    Hedeflediğim Yerler
                </Text>
                <View style={styles.bstyle}>
                    <View style={styles.bodystyle}>
                    <FlatList style={styles.flt}
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => 
                            {
                                if(item.user_id == Login.id && item.travel_choise == 0)
                                { return(
                                    <Card>
                                    <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                                    <View style = {{flexDirection:'row' }}>
                                    <Icon name="map-marker" size={15} color="#ffc966"/>
                                      <View style= {{flexDirection:'row',marginLeft:'5%'}}>
                                        <Text style={{marginRight:'2%'}}>
                                            {item.travel_city}
                                        </Text>
                                        <Text>,</Text>
                                        <Text style={{marginLeft:'2%'}} >
                                            {item.travel_country}
                                        </Text>
                                      </View>
                                      </View>
                                      <View style={{justifyContent:'flex-end', flexDirection:'row'}}>
                                      <Text style={{marginRight:'5%'}}>
                                            { ((item.travel_date).length > 10) ? 
                                            (((item.travel_date).substring(0,10))) : 
                                            item.travel_date }
                                      </Text>
                                      <Icon name="calendar-o" size={15} color="#ffc966"/>
                                      </View>
                                    </View>
                                    </Card>
                                    )
                            }
                        }
                        }
                        />
                    </View>
                </View>
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    inputstyle:{
        borderWidth:1,
        borderRadius:15,
        borderColor:'gray'
    },
    inputdate:{
        borderWidth:1,
        borderColor:'gray'
    },
    addbuton:{
        alignItems:'flex-end',
        justifyContent:'flex-start',
        left: '2%',
        top:'-10%',
        flex:0.01
    
    },
    box:{
        borderColor:'#DCDCDC',
        borderWidth:2,
        margin:'2%',
        padding:'2%',
    },
    maptext:{
        fontSize:10
    },
    view:{
        marginTop:'2%',
        flex:1,
        backgroundColor:'#f2f2f2',
    },
    bodystyle:{
         marginHorizontal:'2%',
         marginVertical:'2%',
    },
    bstyle:{
        flex:1,
        marginHorizontal:'1%',
        marginVertical:'1%',
    },
    fieldSet:{
        flex:2,
        margin:'5%',
        backgroundColor:'#f2f2f2',
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
        backgroundColor: '#f2f2f2'
    },
    buton:{
        flexDirection:'row',
        backgroundColor:"#ff6600",
        alignItems:"center",
        borderRadius:10,
        marginHorizontal:'20%',
        marginVertical:'10%',
        paddingHorizontal:'5%',
        paddingVertical:'5%',
        justifyContent:'center',alignItems:'center'
    },
  })
  