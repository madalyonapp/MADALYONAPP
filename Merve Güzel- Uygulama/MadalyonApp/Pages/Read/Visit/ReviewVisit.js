import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,FlatList,TouchableOpacity, ImageBackground} from 'react-native';
import { Card, Button } from 'react-native-elements';
import {toJS} from 'mobx'
import {observer} from 'mobx-react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Read from '../../../Store/Read';
import Login from '../../../Store/Login';

@observer
export default class ReviewPage extends Component {
  state = 
    {
        data: Login.dataread,
    }
render() {
return (
  <View>
 <FlatList 
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => 
                        {
                        if(item.user_id==Read.id){
                          return(
                         <Card>
                            <TouchableOpacity style={{flexDirection:'row'}}
                           >
                                <Image source={{uri : item.review_photo}} style={{width:'35%', height:'100%'}}/>
                                <View style = {styles.rightbox}>
                                <View style = {styles.headerview}>
                                                    <Text style={styles.header}>
                                                    { ((item.review_name).length > 20) ? 
                                                        (((item.review_name).substring(0,20-3)) + '...') : 
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
                        }}
                        }
                        />
  </View>
);
}
}
const styles = StyleSheet.create({
  headerview:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textm:{
    paddingTop:'5%',
    alignSelf:"center"
  },
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
})
