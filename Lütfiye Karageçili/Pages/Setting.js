import React, { Component } from 'react'
import {Text, View,StyleSheet,TextInput} from 'react-native'
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
export default class Setting extends Component {
    render() {
        return (
            <View style={styles.view}>
            <View>
              <Card title="Hesap">
                <Text>Lorem ipsum dolor sit amet.</Text>
                <TextInput
                  placeholder="..."
                  style={{
                    borderWidth: 0.5,
                    paddingHorizontal: 20,
                    paddingVertical: 0,
                    height: 'auto',
                    marginTop: 10,
                    borderColor: '#e67300'
                  }}
                />
              </Card>

              <Card title="Kişisel Bilgiler">
                <Text>Lorem ipsum dolor sit amet.</Text>
                <TextInput
                  placeholder="..."
                  style={{
                    borderWidth: 0.5,
                    paddingHorizontal: 20,
                    paddingVertical: 0,
                    height: 'auto',
                    marginTop: 10,
                    borderColor: '#e67300'
                  }}
                />
              </Card>

              <Card title="Gizlilik">
                <Text>Lorem ipsum dolor sit amet.</Text>
                <TextInput
                  placeholder="..."
                  style={{
                    borderWidth: 0.5,
                    paddingHorizontal: 20,
                    paddingVertical: 0,
                    height: 'auto',
                    marginTop: 10,
                    borderColor: '#e67300'
                  }}
                />
              </Card>

              <Button
                icon={<Icon name="sign-out" size={35} color="orange" style={{ marginRight: 10 }} />}
                title="Çıkış Yap"
                buttonStyle={{ width: 150, margin: 15, color : "#000" }}
                type="outline"
              />
    </View>
  </View>
        )
    }
}
const styles = StyleSheet.create({
  view:{
    backgroundColor:'#f2f2f2',
   
  },
 
  
});
