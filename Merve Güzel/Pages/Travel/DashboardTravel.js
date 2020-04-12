import React, { Component } from 'react';
import { View, Image,Text,TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import makale from '../../geciciveriler/makale'
import kullanici from '../../geciciveriler/kullanici'
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card, Button } from 'react-native-elements';
export default class DashboardTravel extends Component {
  state = {
    modalVisible: false,
    alert_id : 0,
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
    renderContactsItem = ({item,index}) => {
        return(  
          <Card>
          <TouchableOpacity
          onPress={() => {this.setState({alert_id: item}),this.setModalVisible()}}>
          <View style={styles.box}>
            <Image style={{width:140,height:120}}
            source={{uri: item.makale_foto}}/>
            <View style = {styles.rightbox}>
              <Text style={styles.header}>
              { ((item.makale_Ad).length > 25) ? 
                (((item.makale_Ad).substring(0,25-3)) + '...') : 
                item.makale_Ad }
              </Text>
              <Text style={styles.body}>
                { ((item.makale).length > 180) ? 
                (((item.makale).substring(0,180-3)) + '...') : 
                item.makale }
              </Text>
              </View>
          </View>
          </TouchableOpacity>
          </Card>
        )
      }

  render() { 
    
    return ( 
      <View>
     <FlatList
        renderItem={this.renderContactsItem}
        keyExtractor= {(item)=>item.makale_id}
        data={makale}
      />
       <Modal
                  animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    
                  >
                   
                  <View style={styles.modalview}>
                    <View style={styles.ustmodal}>
                    <View style={styles.tustmodal}>
                    <Image style={{width:'70%',height:'70%'}}
                    source={{uri: this.state.alert_id.makale_foto}}/>
                    <Icon name="user" size={50} color="orange"/></View>
                    <TouchableOpacity
                        style={{margintop:0}}
                        onPress={() => {
                          this.setState({modalVisible:false});
                        }}><Icon name="close" size={30} color="orange"/></TouchableOpacity>
                    
                    </View>
                  <View style={styles.altmodal}>
                    <View style={styles.taltmodal}>
                      <Text>
                      {this.state.alert_id.makale_Ad}
                      </Text>
                      <Text style={styles.textm}>
                        {this.state.alert_id.makale}
                      </Text>
                      </View>
                      <TouchableOpacity
                        style={{justifyContent:"flex-end"}}
                        ><Icon name="check" size={30} color="green"/></TouchableOpacity>
                     </View> 
                  </View>
                  
                </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box:{
    borderRadius:15,
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
  modalview:{
    backgroundColor:"#ffffff",
    padding:'10%',
    flex:1,
    flexDirection:'column'
  },
  ustmodal:{
    flex:1,
    flexDirection:'row',
    justifyContent:"space-between",
  },
  tustmodal:{
    justifyContent:"space-between",
    flex:1,
    flexDirection:'row',
    alignItems:"center"
  },
  altmodal:{
    flex:3,
    
  },
  taltmodal:{
    
  },
  textm:{
    paddingTop:'5%',
    alignSelf:"center"
  }
})
