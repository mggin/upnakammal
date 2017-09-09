
import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    View,
    Text,
    ActivityIndicator
} from 'react-native';

import {Actions, Scene, ActionConst} from 'react-native-router-flux'
import Pdf from 'react-native-pdf';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

export default class PDFExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pdfWidth: Dimensions.get('window').width,
          scale: 1.2,
          headerHeight: 70,
        }
    }
    componentDidMount() {
      this.layoutChanged()
    }

    layoutChanged = () => {
      const {width, height} = Dimensions.get('window')
      if (width > height) {
        this.setState({pdfWidth: width})
      } else if (width < height){
        this.setState({pdfWidth: width})
      } else {}
      if (width > 736 || height > 736) {
        this.setState({
          headerHeight: 100,
          scale: 2.5
        })
      }
    }




    reduceScale = () => {
      if (this.state.scale > 1) {
        this.setState({
          scale: this.state.scale - 0.1
        })
      } else {
        this.setState({scale: 1})
      }
    }

    addScale = () => {
      this.setState({
        scale: this.state.scale + 0.1
      })
    }

    render() {
        //const {width, height} = Dimensions.get('window').width,
        return (
          <View onLayout={() => this.layoutChanged()}
                style={{flex: 1}}>
            <Container>
              <Header style={{backgroundColor: '#2980b9', height: this.state.headerHeight}} iosBarStyle='light-content'>
                <Left>
                  <Button transparent onPress={() => Actions.tabview({type: ActionConst.BACK})}>
                    <Icon name='arrow-back' style={{ color: 'white' }}/>
                  </Button>
                </Left>
                <Right>
                  <Button transparent onPress={() => this.setState({scale: 1})}>
                    <Icon name='md-refresh' style={{ color: 'white' }}/>
                  </Button>
                  <Button transparent onPress={() => this.reduceScale()}>
                    <Icon name='md-remove-circle' style={{ color: 'white' }}/>
                  </Button>
                  <Button transparent onPress={() => this.addScale()}>
                    <Icon name='md-add-circle' style={{ color: 'white' }}/>
                  </Button>
                </Right>
              </Header>
              <Pdf ref={(pdf)=>{this.pdf = pdf;}}
                   source={this.props.pdfData[this.props.index]}
                   page={1}
                   scale={this.state.scale}
                   horizontal={false}
                   activityIndicator={<ActivityIndicator color='#2980b9' size='small' />}
                   style={[styles.pdf, {width: this.state.pdfWidth}]}/>
            </Container>
          </View>
        )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    btn: {
        margin: 5,
        padding:5,
        backgroundColor: "blue",
    },
    btnDisable: {
        margin: 5,
        padding:5,
        backgroundColor: "gray",
    },
    btnText: {
        color: "#FFF",
    },
    pdf: {
        flex:1,
        marginTop: 10,
    }
});
