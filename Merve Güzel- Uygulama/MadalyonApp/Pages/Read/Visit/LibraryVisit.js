import React, { Component } from 'react'
import { Text, View,StyleSheet,FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios'
import Login from '../../../Store/Login'
import {observer} from 'mobx-react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {toJS} from 'mobx'
import { Card, Button } from 'react-native-elements';
import Read from '../../../Store/Read'
@observer
export default class LibraryVisit extends Component {
    state = 
    {
        data : Login.library,
    }
    render() {
        return (
            <View style={styles.view}>
           <View style={styles.fieldSet}>
          
                <Text style={styles.legend}>
                    Okuduğum Kitaplar
                </Text>
                <View style={styles.bstyle}>
                    <View style={styles.bodystyle}>
                    <FlatList style={styles.flt}
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => 
                            {
                                if(item.user_id == Read.id && item.book_choise == 1)
                                { return(
                                    <Card>
                                    <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                                    <View style = {{flexDirection:'row' }}>
                                    <Icon name="bookmark" size={25} color="#ffc966"/>
                                      <View style= {{marginLeft:15}}>
                                        <Text>
                                            {item.book_name}
                                        </Text>
                                        <Text>
                                            {item.writer_name}
                                        </Text>
                                      </View>
                                      </View>
                                    </View>
                                    </Card>
                                    )
                            }
                        }
                        }
                        />
                    </View>
                </View>
                
            </View>
           
            <View style={styles.fieldSet}>
           
                <Text style={styles.legend}>
                    Hedeflediğim Kitaplar
                </Text>
                <View style={styles.bstyle}>
                    <View style={styles.bodystyle}>
                    <FlatList style={styles.flt}
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => 
                            {
                                if(item.user_id == Login.id && item.book_choise == 0)
                                { return(
                                    <Card>
                                    <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                                    <View style = {{flexDirection:'row' }}>
                                    <Icon name="bookmark-o" size={25} color="#ffc966"/>
                                      <View style= {{marginLeft:15}}>
                                        <Text>
                                            {item.book_name}
                                        </Text>
                                        <Text>
                                            {item.writer_name}
                                        </Text>
                                      </View>
                                      </View>
                                      
                                    </View>
                                    </Card>
                                    )
                            }
                        }
                        }
                        />
                    </View>
                </View>
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    addbuton:{
        alignItems:'flex-end',
        justifyContent:'flex-start',
        left: '2%',
        top:'-10%',
        flex:0.01
    
    },
    maptext:{
        fontSize:10
    },
    view:{
        marginTop:'2%',
        flex:1,
        backgroundColor:'#f2f2f2',
    },
    bodystyle:{
         marginHorizontal:'2%',
         marginVertical:'2%',
    },
    bstyle:{
        flex:1,
        marginHorizontal:'1%',
        marginVertical:'1%',
    },
    fieldSet:{
        flex:2,
        margin:'5%',
        backgroundColor:'#f2f2f2',
        justifyContent:'center',
        borderRadius: 0,
        borderWidth: 0.2,
        borderColor: '#808080',
    },
    legend:{
        position: 'absolute',
        top: -20,
        left: 10,
        fontWeight: 'bold',
        fontSize:16,
        backgroundColor: '#f2f2f2'
    },
 

  })
  