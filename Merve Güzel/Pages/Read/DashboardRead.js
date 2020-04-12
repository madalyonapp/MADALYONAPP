import React, { Component } from 'react';
import { View, Image,Text,TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import elestiri from '../../geciciveriler/elestiri'
import { Card, Button } from 'react-native-elements';
export default class DashboardRead extends Component {
    renderContactsItem = ({item,index}) => {
        return(
          <Card>
          <TouchableOpacity>
          <View style={styles.box}>
            <View style={styles.leftbox}>
            <Image style={{width:80,height:120}}
            source={{uri: item.elestiri_foto}}/>
            </View>
            <View style = {styles.rightbox}>
              <Text style={styles.header}>
              { ((item.elestiri_Ad).length > 25) ? 
                (((item.elestiri_Ad).substring(0,25-3)) + '...') : 
                item.elestiri_Ad }
              </Text>
              <Text style={styles.body}>
                { ((item.elestiri).length > 180) ? 
                (((item.elestiri).substring(0,180-3)) + '...') : 
                item.elestiri }
              </Text>
              </View>
          </View>
          </TouchableOpacity></Card>
        )
      }

  render() {
    return (
      <View>
     <FlatList
        renderItem={this.renderContactsItem}
        keyExtractor= {(item)=>item.elestiri_id}
        data={elestiri}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    flex:1
  },
  header:{
    fontWeight:'bold',
    fontSize:16,
    marginBottom:10,
  },
  leftbox:{
      flex:2
  },
  rightbox:{
    flex:6,
    
  }
})
