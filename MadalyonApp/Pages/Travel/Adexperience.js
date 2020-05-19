import React, { Component } from 'react'
import { Text, View, Image,StyleSheet, FlatList,Dimensions,TextInput, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react'
import MapStore from '../../Store/MapStore'
import { toJS } from 'mobx'
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker'
import ImagePickerr from './imagePicker'
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
export default class Adexperience extends Component {
      
    render() {
        return (
          <View style={styles.view}>
          <Card title="Deneyim Ekle">
            <Text>Başlık : </Text>
            <TextInput
            placeholder="Buraya Yaz.."
            
            style={{
              borderWidth: 1,
              paddingHorizontal: 20,
              paddingVertical: 5,
              height: 50,
              marginTop: 2,
              borderColor: '#e67300'
            }}
          />
          
            <Text
            style={{
              marginTop:15
            }}>Deneyimini Oluştur: </Text>
            <TextInput
              placeholder="Buraya Yaz.."
              multiline={true}
              style={{
                borderWidth: 1,
                paddingHorizontal: 20,
                paddingVertical: 5,
                height: 100,
                marginTop:2,
                borderColor: '#e67300'
              }}
            />
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }} />
                <ImagePickerr/>
            </View>
            {/*<View style={styles.asheader}>
          <TouchableOpacity onPress={() => navigation.navigate('Konum')}>
              <Icon name="cog" size={40} color="orange" />
            </TouchableOpacity>
          </View>*/ 
    }
          </Card>
          <Button
            icon={<Icon name="share" size={35} color="orange" style={{ marginRight: 10 }} />}
            title="Yayınla"
            buttonStyle={{ width: 150, margin: 15 }}
            type="outline"
          />
        </View>
        )
    }
}
const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  header: {
    flex: 1
  },
  asheader: {
    borderRadius: 15,
    backgroundColor: '#f2f2f2',
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 2,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  asbody: {
    flex: 8
  },
  textstyle: {
    marginHorizontal: 10,
    fontSize: 16
  },
  name: {
    fontWeight: 'bold'
  }
});