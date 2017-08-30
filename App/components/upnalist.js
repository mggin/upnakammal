
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class UpnaList extends Component {
  constructor(props) {
    super(props)
    //this.renderTitle = this.renderTitle.bind(this)
  }
  _renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => console.log(item.key)}
                        style={styles.item}>
        <Text>{item}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}></Text>
        </View>
        <FlatList
          data={this.props.listData}
          renderItem={this._renderItem}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
  },
  item: {
    margin: 5,
    borderColor: 'blue',
    borderWidth: 3,
    borderRadius: 40,
  },
  titleView: {
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
  }
})
