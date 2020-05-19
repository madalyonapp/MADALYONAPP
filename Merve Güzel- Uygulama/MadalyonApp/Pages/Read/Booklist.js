import React, { Component } from 'react';
import { View, Image,Text,TouchableOpacity, FlatList, StyleSheet , ScrollView  } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Axios from 'axios';
import {toJS} from 'mobx'
export default class Booklist extends Component { 

  state = 
    {
        data : null,
    }

    componentDidMount()
    {
        this._fill();
        console.log(this.state.data);
    }
    _fill = async () => 
    {
        try {
            let response = await fetch(`http://192.168.195.1:8088/api/BookList/Get`);
            let json = await response.json();
            this.setState({data: toJS(json)})
        } catch (error) 
        {
            console.error(error);
        }
    }
   
    render() {
    return (
          <View style={styles.box}>
              <Text style={styles.header}>
                  En Çok Okunan Kitaplar
              </Text>
              <FlatList style={styles.flt}
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => 
                        <Card>
                          <View style={styles.body}>
                            <View style= {styles.leftbody}>
                              <Text style={styles.number}>
                                {item.book_id + 1}
                              </Text>
                              </View>
                            <View style={styles.rightbody}>
                              <Text>
                                {item.book_name}
                              </Text>
                              <Text>
                                {item.write_name}
                              </Text>
                            </View>
                          </View>
                        </Card>
                        }
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
