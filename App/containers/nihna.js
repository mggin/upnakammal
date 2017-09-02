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
import { nihnaArray } from '../arrays'
import { nihnaPdfArray } from '../assets/pdf/KHEN_NIHNA'

export default class Route extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UpnaList
          listData={nihnaArray}
          pdfData={nihnaPdfArray}
          title='KAMMAL (THU) LEH UPNA'
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
