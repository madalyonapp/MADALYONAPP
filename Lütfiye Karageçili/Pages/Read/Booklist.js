import React, { Component } from 'react';
import { View, Image,Text,TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Liste from '../../geciciveriler/popülerokumalistesi'
export default class Booklist extends Component {
    renderContactsItem = ({item,index}) => {
        return(
          <Card>
          <View style={styles.body}>
            <View style= {styles.leftbody}>
              <Text style={styles.number}>
                {index +1}
              </Text>
              </View>
            <View style={styles.rightbody}>
              <Text>
                {item.kitap_ad}
              </Text>
              <Text>
                {item.yazar_ad}
              </Text>
            </View>
          </View>
         </Card>
        )
      }

  render() {
    return (
      <View style={styles.box}>
          <Text style={styles.header}>
              En Çok Okunan Kitaplar
          </Text>
                <FlatList
                    renderItem={this.renderContactsItem}
                    keyExtractor= {(item)=>item.kitap_id}
                    data={Liste}
                />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    body:{
        flex:1,
        flexDirection:"row"
    },
    leftbody:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    rightbody:{
        flex:6
    },
    box:{
    
      marginBottom:20,
    },
    header:{
      marginHorizontal:20,
      fontSize:15,
      marginBottom:10,
      fontWeight:'bold',
    },
    number:{
      fontWeight:'bold',
      color:"orange",
     fontSize:20

    }
})
