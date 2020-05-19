import React, { Component } from 'react'
import { Text, View,FlatList,Image,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios'
import Login from '../../Store/Login'
import {observer} from 'mobx-react'
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Button } from 'react-native-elements';
@observer
export default class UseinfoTravel extends Component {
       state={
            city:Login.city,
            contactno:Login.contactno,
            hobby:Login.hobby,
            sharecount:Login.sharecounttravel,
            reliability:Login.reliability,
            answerscount:Login.trevalquestionscount,
            name:Login.name,
            travel:Login.travelchoise,
            mail:Login.contactmail,
        };
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
        }
    render() {
        let {usermame} = this.props;
        return (
         
            <View style={styles.view}>
            <View style={styles.fieldSetTop}>
            <Text style={styles.legend}>
                Kişisel Bilgiler
            </Text>
            <ScrollView>
            <View style={styles.bstyle}>
                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Card containerStyle={{flex:1,marginRight:0}}>
                <View style={{flexDirection:'row'}}>
                    <Icon name="vcard" size={20} color="#ffc966"/>
                    <Text style={styles.text} >
                        {this.state.name}
                    </Text>
                </View>
                </Card>
                <Card containerStyle={{flex:1,marginLeft:0}}>
                <View style={{flexDirection:'row'}}>
                    <Icon name="map-marker" size={25} color="#ffc966"/>
                    <Text style={styles.text} >
                        {this.state.city} 
                    </Text>
                </View>
                </Card></View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Card containerStyle={{flex:1,marginRight:0}}>
                <View style={{flexDirection:'row'}}>
                    <Icon name="phone" size={25} color="#ffc966"/>
                    <Text style={styles.text}>
                        {this.state.contactno}
                    </Text>
                </View>
                </Card>
                <Card containerStyle={{flex:1, marginLeft:0}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
                <Text style={{fontSize:12}}>
                       {this.state.mail}
                    </Text>
                    <Icon name="envelope-open" size={20} color="#ffc966"/>
                   
                </View>
                </Card></View>
                <Card>
                <View style={{flexDirection:'row', paddingRight:'5%'}}>
                    <Icon name="heart" size={25} color="#ffc966"/>
                    <Text style={styles.text}>
                        {this.state.hobby}
                    </Text>
                </View>
                </Card>
                <Card>
                <View style={{flexDirection:'row', paddingRight:'5%'}}>
                    <Icon name="plane" size={25} color="#ffc966"/>
                    <Text style={styles.text}>
                        {this.state.travel}
                    </Text>
                </View>
                </Card>
                </View>
            </View>
            </ScrollView>
        </View>
        <View style={styles.fieldSetBottom}>
            <Text style={styles.legend}>
                İstatistikler
            </Text>
            <View style={styles.bstyle}>
                <View>
                <Card>
                <View style={{flexDirection:'row'}}>
                    <Icon name="share-alt" size={25} color="#ffc966"/>
                    <Text style={styles.text}>
                        {this.state.sharecount}
                    </Text>
                </View>
                </Card>
                <Card>
                <View style={{flexDirection:'row'}}>
                    <Icon name="question-circle" size={25} color="#ffc966"/>
                    <Text style={styles.text}>
                        {this.state.answerscount}
                    </Text>
                </View>
                </Card>
                <Card>
                <View style={{flexDirection:'row'}}>
                    <Icon name="signal" size={25} color="#ffc966"/>
                    <Text style={styles.text}>
                        {this.state.reliability}
                    </Text>
                </View>
                </Card>
                </View>
            </View>
            </View></View>
        
        )
    }
}
const styles = StyleSheet.create({
    view:{
        marginTop:'2%',
        flex:1,
        backgroundColor:'#f2f2f2',
    },
    bstyle:{
        flex:1,
        backgroundColor:'#f2f2f2',
        
    },
    fieldSetBottom:{
        flex:2,
        margin:'5%',
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius: 0,
        borderWidth: 0.2,
        borderColor: '#808080',
    },
    fieldSetTop:{
    backgroundColor:'#f2f2f2',
     flex:3,
     margin: '5%',
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
 altview:{
    flexDirection:'row',
    padding:'5%'
 },
 text:{
    marginLeft:'5%'
 },

   });