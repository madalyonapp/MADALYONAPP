import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native';
import Kullanici from '../../geciciveriler/kullanici'
import makale from '../../geciciveriler/makale'
import { Card, Button } from 'react-native-elements';
export default class DeneyilerimpageTravel extends Component {
  renderContactsItem = ({item,index}) => {
    if(item.kullanici_id==1){
      return(
      <Card>
      <TouchableOpacity>
      <View style={styles.box}>
          <Image style={{width:140,height:120}}
        source={{uri: item.makale_foto}}/>
        <View style = {styles.rightbox}>
          <Text style={styles.header}>
            {item.makale_Ad}
          </Text>
          <Text style={styles.body}>
            { ((item.makale).length > 180) ? 
            (((item.makale).substring(0,180-3)) + '...') : 
            item.makale }
          </Text>
          </View>
      </View>
      </TouchableOpacity></Card>
    )
    }
    
  }

render() {
return (
  <View>
 <FlatList
    renderItem={this.renderContactsItem}
    keyExtractor= {(item)=>item.makale_id}
    data={makale}
  />
  </View>
);
}
}
const styles = StyleSheet.create({
box:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'
},
  header:{
  fontWeight:'bold',
  fontSize:16
},
  body:{
  marginVertical:10,
  width:200,

},
})
