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
import { thumnaPdfArray } from '../assets/pdf/KHEN_THUMNA'

export default class Route extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UpnaList
          listData={thumnaArray}
          pdfData={thumnaPdfArray}
          title='NISIM CHRISTIAN NUNTAKNA'
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
