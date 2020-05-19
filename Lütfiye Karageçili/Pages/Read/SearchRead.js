import React, { Component } from 'react';
import { View, Text ,FlatList,Image,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import elestiri from '../../geciciveriler/elestiri';
import { Card, Button } from 'react-native-elements';
export default class SearchRead extends Component {
    state = {
        text: '',
        data: elestiri,
    };
    serachfilter = text => {
        const newElestiri =elestiri.filter(item=> {
            const listItem = `${item.elestiri_Ad.toLowerCase()}`
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
        source={{uri: item.elestiri_foto}}/>
          <Text style={styles.header}>
            {item.elestiri_Ad}
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
            keyExtractor= {(item)=>item.elestiri_id}
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
