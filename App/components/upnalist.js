
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Actions, Scene} from 'react-native-router-flux'
export default class UpnaList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemTxt: 17,
      titleTxt: 17,
    }
    //this.renderTitle = this.renderTitle.bind(this)
  }
  componentDidMount() {
    this.onLayoutChanged()
  }
  
  onLayoutChanged = () => {
    const { width, height } = Dimensions.get('window')
    if (width > 736 || height > 736) {
      this.setState({
        itemTxt: 19,
        titleTxt: 20,
      })
    }
  }
  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => Actions.pdfview({pdfData: this.props.pdfData, index: index})}
                        activeOpacity={0.7}
                        style={styles.item}>
        <Text style={[styles.itemTxt, {fontSize: this.state.itemTxt}]}>{item}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const header = (
      <View style={styles.titleView}>
        <Text style={[styles.titleText, {fontSize: this.state.titleTxt}]}>{this.props.title}</Text>
      </View>
    )
    return (
      <View style={styles.container}
            onLayout={() => this.onLayoutChanged()}>
        <FlatList
          data={this.props.listData}
          renderItem={this._renderItem}
          ListHeaderComponent={header}
          showsVerticalScrollIndicator={false}
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
    //marginRight: 5,
    //marginTop: 5,
    //marginLeft: 5,
    paddingLeft: 20,
    padding: 15,
    
    // backgroundColor: '#2980b9',
    borderBottomWidth: StyleSheet.hairlineWidth,
    // borderRadius: 7,
    borderColor: '#2c3e50'
  },
  itemTxt: {
    fontFamily: 'Times New Roman',
    fontSize: 17,
    //fontWeight: '500',
    color: 'black',
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
