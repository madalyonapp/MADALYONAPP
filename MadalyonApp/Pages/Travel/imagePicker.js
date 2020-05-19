import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
class imagePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: {},
        };
    }
    chooseFile = () => {
        var options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = response;
                this.setState({
                    filePath: source,
                });
            }
        });
    };
    render() {
        return (
            <View>
                {/* <Image
                        source={{ uri: this.state.filePath.path }}
                        style={{ width: 100, height: 100 }} /> */}
                {/* <Image
                        source={{ uri: this.state.filePath.uri }}
                        style={{ width: 250, height: 250 }}
                    /> */}
                {/* <Text style={{ alignItems: 'center' }}>
                        //veritabanina post edilirken lazim olacak
                        {this.state.filePath.uri}
                    </Text> */}
                <View style={{ display: 'flex', flexDirection: 'row', flex: 1, marginBottom : 30 }}>
                    <Button
                        icon={<Icon name="photo" size={25} color="orange" style={{ marginRight: 10 }} />}
                        style={{ width: 'min-content' }}
                        title="Görsel Ekle"
                        type="outline"
                        buttonStyle={{ marginRight: 10, marginTop: 20, padding: 15 }}
                        onPress={this.chooseFile.bind(this)}
                    />
                        {/* <Button
                        icon={<Icon name="globe" size={25} color="orange" style={{ marginRight: 10 }} />}
                        style={{ width: 'min-content', marginTop: 10 }} title="Konum Ekle" type="outline"
                        buttonStyle={{ marginRight: 10, marginTop: 20, padding: 15 }} /> */}      
                </View>

                <Image
                    source={{
                        uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                    }}
                    style={{ width: 100, height: 100, marginTop : 50 }}
                />
            </View>
        );
    }
}

export default imagePicker;