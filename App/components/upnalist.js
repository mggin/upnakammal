
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Actions, Scene} from 'react-native-router-flux'
export default class UpnaList extends Component {
  constructor(props) {
    super(props)
    //this.renderTitle = this.renderTitle.bind(this)
  }
  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => Actions.pdfview({pdfData: this.props.pdfData, index: index})}
                        activeOpacity={0.7}
                        style={styles.item}>
        <Text style={styles.itemTxt}>{item}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const header = (
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{this.props.title}</Text>
      </View>
    )
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.listData}
          renderItem={this._renderItem}
          ListHeaderComponent={header}
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
    marginLeft: 10,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 3,
    paddingLeft: 20,
    padding: 15,
    backgroundColor: '#2980b9',
    borderRadius: 7,
  },
  itemTxt: {
    fontFamily: 'Times New Roman',
    fontSize: 17,
    fontWeight: '500',
    color: '#ecf0f1',
  },
  titleView: {
    marginTop: 30,
    marginBottom: 10,
    margin: 20,
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Times New Roman',
    fontSize: 17,
    fontWeight: '800',
    color: '#2c3e50',
    textAlign: 'center',
  }
})
