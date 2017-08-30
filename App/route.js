/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {Router,
        Scene,
        Actions,
} from 'react-native-router-flux'

import MainView from './containers/mainview'
import UpnaList from './components/upnalist'
import Masa from './containers/masa'

export default class Route extends Component {
  render() {
    return (
      <Router key='root'
              hideNavBar={true}>
          <Scene key='menu'
                 initial={true}
                 component={Masa}/>
      </Router>
    )
  }
}
