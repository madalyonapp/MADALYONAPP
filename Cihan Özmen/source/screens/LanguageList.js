import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {ListItem, Separator} from '../components/List';

import LanguagesList from '../data/LanguagesList';

class LanguageList extends Component {
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
    //navigation.goBack();
  };
  render() {
    return (
      <View>
        <FlatList
          renderItem={({item}) => (
            <ListItem
              text={item}
              selected={item === this.state.selectedItem}
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={(item) => item}
          data={LanguagesList}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default LanguageList;
