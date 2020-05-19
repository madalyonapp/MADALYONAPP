import React, { Component } from 'react';
import { View, Text ,FlatList,Image,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { toJS } from 'mobx';
import Login from '../../Store/Login';
export default class SearchRead extends Component {
    state = {
        text: '',
        data: toJS(Login.dataread),
    };
    serachfilter = text => {
        const newElestiri =toJS(Login.dataread).filter(item=> {
            const listItem = `${item.review_name.toLowerCase()}`
            return listItem.indexOf(text.toLowerCase()) > -1;
        })
        this.setState({
            data:newElestiri,
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
        <Image style={{width:40,height:60}}
        source={{uri: item.review_photo}}/>
          <Text style={styles.header}>
            {item.review_name}
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
            data={this.state.data}
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
        flexDirection:'row',
        alignItems:'center'
      },
    header:{
        marginHorizontal:10,
    }
})
