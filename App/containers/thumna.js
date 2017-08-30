/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import UpnaList from '../components/upnalist'
import { thumnaArray } from '../arrays'

export default class Route extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UpnaList
          listData={thumnaArray}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
