import React, { Component } from 'react';
import { View, Text ,FlatList,Image,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Axios from 'axios';
import {toJS} from 'mobx'
import Login from '../../Store/Login';
export default class SearchTravel extends Component {
  state = {
    text: '',
    experience: toJS(Login.datatravel),
};
    serachfilter = text => {
        const newExperience = toJS(Login.datatravel).filter(item=> {
            const listItem = `${item.experience_name.toLowerCase()}`
            return listItem.indexOf(text.toLowerCase()) > -1;
        })
        this.setState({
            experience:newExperience,
        });
    };
  renderHeader =()=>{
      const {text} = this.state;
      return(
          <View style={styles.body}>
              <TextInput  
              onChangeText={text => {
                  this.setState({
                      text,
                  });
                  this.serachfilter(text);
              }}
              value={text} 
              placeholder="Search..." style={styles.inputstyle} 
             
              
              />
          </View>
      )
  }
  renderContactsItem = ({item,index}) => {
    return(
      <Card>
      <TouchableOpacity>
      <View style={styles.box}>
        <Image style={{width:50,height:60}}
        source={{uri: item.experience_photo}}/>
          <Text style={styles.header}>
            {item.experience_name}
          </Text>
          </View>
      </TouchableOpacity> 
      </Card>

    )
  }
  
  render() {
    return (
      <View>
        <FlatList
            ListHeaderComponent={this.renderHeader()} 
            renderItem={this.renderContactsItem}
            keyExtractor= {(item)=>item.id}
            data={this.state.experience}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    inputstyle:{
        borderWidth:1,
        borderRadius:15,
        borderColor:'gray'
    },
    body:{
        padding:10,
    },
    box:{
        borderBottomColor:'orange',
        borderRadius:15,
      
        flexDirection:'row',
        alignItems:'center'
      },
    header:{
        marginHorizontal:10,
    }
})
