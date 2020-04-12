import React, {Component} from 'react';
import {FlatList, View} from 'react-native';

import Currencies from '../data/Currencies';

import {ListItem, Separator} from '../components/List';

//const Temp_current_Currency = 'CAD';

class DovizList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
    };
  }
  handlePress = (item) => {
    this.setState({
      selectedItem: item,
    });
    //item'ı doviz sayfasına yolluyorum fakat orada kullanamıyorum
    //this.props.navigation.navigate('Home', {selected: item});
  };

  render() {
    return (
      <View>
        <FlatList
          renderItem={({item}) => (
            <ListItem
              selected={item === this.state.selectedItem}
              onPress={() => this.handlePress(item)}
              text={item}
            />
          )}
          data={Currencies}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default DovizList;
