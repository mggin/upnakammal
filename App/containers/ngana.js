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
import { nganaArray } from '../arrays'
import { nganaPdfArray } from '../assets/pdf/KHEN_NGANA'

export default class Route extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UpnaList
          listData={nganaArray}
          pdfData={nganaPdfArray}
          title='PASIAN THU TAWH KIZEMSIAM'
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
