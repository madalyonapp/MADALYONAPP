import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,FlatList,TouchableOpacity, ImageBackground} from 'react-native';
import { Card, Button } from 'react-native-elements';
import {toJS} from 'mobx'
import {observer} from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Visit from '../../../Store/Visit';
import Login from '../../../Store/Login';

@observer
export default class ExperienceVisit extends Component {
  state = 
    {
        data: Login.datatravel,
    }
render() {
return (
  <View>
 <FlatList 
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => 
                        {
                        if(item.user_id==Visit.id){
                          return(<TouchableOpacity>
                          <Card 
                          image={{uri : item.experience_photo}}
                          >
                          <View>
                            <View>
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
                        </Card>
                        </TouchableOpacity> 
                        )
                        }}
                        }
                        />
  </View>
);
}
}
const styles = StyleSheet.create({
  maptext:{
      fontSize:10
  },
  cardstyle:{
    backgroundColor:'orange'
  },
  
  header:{
    fontWeight:'bold',
    fontSize:16
  },
  headerview:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textm:{
    paddingTop:'5%',
    alignSelf:"center"
  }
})
