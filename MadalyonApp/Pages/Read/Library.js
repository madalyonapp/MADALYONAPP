import React, { Component } from 'react'
import { Text, View,StyleSheet,FlatList , TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios'
import Login from '../../Store/Login'
import {observer} from 'mobx-react'
import {toJS} from 'mobx'
import { Card, Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import Add from '../../Store/Add';

@observer
export default class Library extends Component {
    state = 
    {
        data : Login.library,
        modalVisible1:false,
        modalVisible2:false,
        bookname:"",
        writename:"",
    }
    setstatebook(){
        Add.bookname = this.state.bookname;
        Add.writename = this.state.writename;
        Add.AddBook();
    }
    componentDidMount=()=>{
        Login._dataread();
                    Login._datatravel()
                    Login._TravelCity();
                    Login._Photo();
                    Login._city();
                    Login._contactno();
                    Login._countravel();
                    Login._hobby();
                    Login._name();
                    Login._nickname();
                    Login._reliability();
                    Login._travelchoise();
                    Login._ReadAnswersCount();
                    Login._TravelAnswersCount();
                    Login._Library();
                    Login._readchoise();
                    Login._contactemail();
                    TravelQuestion._travelquestion();
                    TravelQuestion._user();
                    TravelQuestion._readquestions();
    }
    render() {
        return (
            <View style={styles.view}>
           <View style={styles.fieldSet}>
           <View style={styles.addbuton}>
               <TouchableOpacity style = {{backgroundColor:'#f2f2f2'}}
                onPress={()=>{this.setState({modalVisible1:true})}}
               >
                   <Icon name="plus-circle" size={60} color="#ffc966"/>
                   </TouchableOpacity>
                   <Modal
                    visible={this.state.modalVisible1}
                    style={{flex:1/2,backgroundColor:"white", height:'30%', marginTop:'30%'}}
                   >
                    <TextInput
                    placeholder= "Name"
                    returnKeyType={"next"}
                    placeholderTextColor="#ddd"
                    style= {styles.input}
                    value = {this.state.bookname}
                    onChangeText = {(text) => {this.setState({bookname:text})}}
                    />
                    <TextInput
                    placeholder= "Name"
                    returnKeyType={"next"}
                    placeholderTextColor="#ddd"
                    style= {styles.input}
                    value = {this.state.writename}
                    onChangeText = {(text) => {this.setState({writename:text})}}/>
                        <TouchableOpacity
                        style = {styles.buton}
                        onPress = {()=>{ Add.bookchoise = 1,this.setstatebook(),this.setState({modalVisible1:false})}}>
                        <Icon name="plus" size={25} color="white"/>
                         <Text style = {{color:'white', marginLeft:'10%',justifyContent:'center',alignItems:'center'}}>Ekle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress = {()=>{this.setState({modalVisible1:false})}}
                        >
                        <Icon name="backward" size={35} color="#ffc966"/>
                        </TouchableOpacity>
                   </Modal>
                </View>
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
                                if(item.user_id == Login.id && item.book_choise == 1)
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
            <View style={styles.addbuton}>
               <TouchableOpacity style = {{backgroundColor:'#f2f2f2'}}
                onPress={()=>{this.setState({modalVisible2:true})}}
               >
                   <Icon name="plus-circle" size={60} color="#ffc966"/>
                   </TouchableOpacity>
                   <Modal
                    visible={this.state.modalVisible2}
                    style={{flex:1/2,backgroundColor:"white", height:'30%', marginTop:'30%'}}
                   > 
                    <TextInput
                    placeholder= "Name"
                    returnKeyType={"next"}
                    placeholderTextColor="#ddd"
                    style= {styles.input}
                    value = {this.state.bookname}
                    onChangeText = {(text) => {this.setState({bookname:text})}}
                    />
                    <TextInput
                    placeholder= "Name"
                    returnKeyType={"next"}
                    placeholderTextColor="#ddd"
                    style= {styles.input}
                    value = {this.state.writename}
                    onChangeText = {(text) => {this.setState({writename:text})}}/>
                        <TouchableOpacity
                        style = {styles.buton}
                        onPress = {()=>{ Add.bookchoise = 0,this.setstatebook(),this.setState({modalVisible2:false})}}>
                        <Icon name="plus" size={25} color="white"/>
                         <Text style = {{color:'white', marginLeft:'10%',justifyContent:'center',alignItems:'center'}}>Ekle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress = {()=>{this.setState({modalVisible2:false})}}
                        >
                        <Icon name="backward" size={35} color="#ffc966"/>
                        </TouchableOpacity>
                   </Modal>
                </View>
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
  
    buton:{
        flexDirection:'row',
        backgroundColor:"#ff6600",
        alignItems:"center",
        borderRadius:10,
        marginHorizontal:'20%',
        marginVertical:'10%',
        paddingHorizontal:'5%',
        paddingVertical:'5%',
        justifyContent:'center',alignItems:'center'
    },
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
    input:{
        backgroundColor:'white',
        height: '15%',
        borderWidth: 2,
        borderRadius:10,
        borderColor:'#ffb833',
        color: 'black',
        marginVertical: '2%',
        marginHorizontal:'5%',
        fontSize: 14,
        fontWeight :'800',
    },
 

  })
  