import React, { Component } from 'react'
import { Text, View,FlatList,Image,StyleSheet } from 'react-native'
import info from '../../geciciveriler/kullanici_kisisel';
import Icon from 'react-native-vector-icons/FontAwesome';
import makale from '../../geciciveriler/makale'

export default class UseinfoTravel extends Component {
   
       state={
            count:0
        };
    
    componentDidMount()
        {
            let dizi = makale;
            let adet = 0;
            dizi.map((deger)=>{
    
                if(deger.kullanici_id==1){
                    adet = adet + 1;
                }
           }) 
        this.setState({
            count: adet,
        })
        
    }
    renderInfoItem = ({item,index}) => {
        if(item.user_id==1){
          return(
              <View style={styles.view}>
            <View style={styles.fieldSet}>
            <Text style={styles.legend}>
                Kişisel Bilgiler
            </Text>
            <View style={styles.bstyle}>
                <View style={styles.bodystyle}>
                <View style={styles.altview}>
                    <Icon name="map-marker" size={30} color="#ffc966"/>
                    <Text style={styles.text} >
                        {item.user_info_city}
                    </Text>
                </View>
                <View style={styles.altview}>
                    <Icon name="phone" size={30} color="#ffc966"/>
                    <Text style={styles.text}>
                        {item.user_info_contact_no}
                    </Text>
                </View>
                <View style={styles.altview}>
                    <Icon name="heart" size={30} color="#ffc966"/>
                    <Text style={styles.text}>
                        {item.user_info_hobby}
                    </Text>
                </View>
                </View>
            </View>
        </View>
        <View style={styles.fieldSet}>
            <Text style={styles.legend}>
                İstatistikler
            </Text>
            <View style={styles.bstyle}>
                <View style={styles.bodystyle}>
                <View style={styles.altview}>
                    <Icon name="share-alt" size={30} color="#ffc966"/>
                    <Text style={styles.text}>
                        {this.state.count}
                    </Text>
                </View>
                <View style={styles.altview}>
                    <Icon name="question-circle" size={30} color="#ffc966"/>
                    <Text style={styles.text}>
                        
                    </Text>
                </View>
                <View style={styles.altview}>
                    <Icon name="signal" size={30} color="#ffc966"/>
                    <Text style={styles.text}>
                        {item.user_info_reliability}
                    </Text>
                </View>
                <View style={styles.altview}>
                    <Icon name="clock-o" size={30} color="#ffc966"/>
                    <Text style={styles.text}>
                        {item.user_info_date}
                    </Text>
                </View>
                </View>
            </View>
            </View></View>
          )
        }
      }
      
    render() {
        return (
         <View >
            <FlatList
                renderItem={this.renderInfoItem}
                keyExtractor= {(item)=>item.user_id}
                data={info}
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#f2f2f2',
    },
    bodystyle:{
         marginHorizontal:10,
         marginVertical:10,
    },
    bstyle:{
        flex:1,
        backgroundColor:'#f2f2f2',
        borderWidth:1,
        borderColor:'#808080',
        borderRadius:0,
        marginHorizontal:5,
        marginVertical:5,
    },
    fieldSet:{
     flex:3,
     margin: 15,
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