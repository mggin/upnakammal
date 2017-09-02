
import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    View,
    Text
} from 'react-native';

import {Actions, Scene, ActionConst} from 'react-native-router-flux'

import Pdf from 'react-native-pdf';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

export default class PDFExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pdfWidth: Dimensions.get('window').width
        }
    }
    componentDidMount() {
      this.layoutChanged()
    }

    layoutChanged = () => {
      console.log('log')
      const {width, height} = Dimensions.get('window')
      console.log(width, height)
      if (width > height) {
        this.setState({pdfWidth: width})
      } else if (width < height){
        this.setState({pdfWidth: width})
      } else {}
    }


    render() {
        //const {width, height} = Dimensions.get('window').width,
        return (
          <View onLayout={() => this.layoutChanged()}
                style={{flex: 1}}>
            <Container>
              <Header style={{backgroundColor: '#2980b9'}} iosBarStyle='light-content'>
                <Left>
                  <Button transparent onPress={() => Actions.tabview({type: ActionConst.BACK})}>
                    <Icon name='arrow-back' style={{ color: '#ecf0f1' }}/>
                  </Button>
                </Left>
              </Header>
              <Pdf ref={(pdf)=>{this.pdf = pdf;}}
                   source={this.props.pdfData[this.props.index]}
                   page={1}
                   scale={1}
                   horizontal={false}
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
    }
});
