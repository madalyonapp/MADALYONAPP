import React, { Component } from 'react'
import { Text, View,StyleSheet,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {observer} from 'mobx-react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Button } from 'react-native-elements';
import Visit from '../../../Store/Visit';

@observer
export default class TravelMapVisit extends Component {
    state = 
    {
        data : Visit.travelcity,
    }
    render() {
        return (
            <View style={styles.view}>
           <View style={styles.fieldSet}>
           <View style={styles.addbuton}>
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
                                if(item.user_id == Visit.id && item.travel_choise == 1)
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
                                if(item.user_id == Visit.id && item.travel_choise == 0)
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
    addbuton:{
        alignItems:'flex-end',
        justifyContent:'flex-start',
        left: '2%',
        top:'-10%',
        flex:0.01
    
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
        backgroundColor:'#f2f2f2',
        flex:3,
        margin: '3%',
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
 

  })
  