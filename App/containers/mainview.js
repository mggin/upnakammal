import React, { Component } from 'react'
import { StyleSheet,
         Dimensions,
         View,
       } from 'react-native'
import { Container, Header, Content,
         Tab, Tabs, ScrollableTab, DefaultTabBar,
         Left, Right, Title, Body} from 'native-base'
import TabMasa from './masa'
import TabNihna from './nihna'
import TabThumna from './thumna'
import TabLina from './lina'
import TabNgana from './ngana'


class MainView extends Component {
  constructor() {
    super()
    this.state = {
      activeTxt: 17.5,
      tabTxt: 17,
      headerHeight: 70,
      title: 17,
      marginBottom: 7,
    }
  }

  componentDidMount() {
    this.onLayoutChanged()
  }

  onLayoutChanged = () => {
    const { width, height } = Dimensions.get('window')
    if (width > 736 || height > 736) {
      this.setState({
        activeTxt: 21.5,
        tabTxt: 20,
        title: 22,
        headerHeight: 100,
        marginBottom: 10,
      })
    }
  }
  renderTabBar = () => {
    const { width, height } = Dimensions.get('window')
    if (width <= 736 || height <= 736) {
      return <ScrollableTab />
    } else {
      return <DefaultTabBar />
    }
  }
  render() {
    return (
    <View style={{flex: 1, backgroundColor: '#2980b9'}} onLayout={() => this.onLayoutChanged()}>
      <Container>
        <Header hasTabs
                style={[styles.header, {height: this.state.headerHeight}]}
                iosBarStyle='light-content'>
              <Title style={[styles.title, {fontSize: this.state.title,
                                            marginBottom: this.state.marginBottom}]}>
                                            UPNA LE KAMMAL</Title>

        </Header>

        <Tabs renderTabBar={()=> this.renderTabBar()}
              tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
          <Tab heading="Khen Masa" textStyle={[styles.tabTxt, {fontSize: this.state.tabTxt}]}
              activeTextStyle={[styles.activeTxt, {fontSize: this.state.activeTxt}]}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTab}>
            <TabMasa />
          </Tab>
          <Tab heading="Khen Nihna" textStyle={[styles.tabTxt, {fontSize: this.state.tabTxt}]}
              activeTextStyle={[styles.activeTxt, {fontSize: this.state.activeTxt}]}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTab}>
            <TabNihna />
          </Tab>
          <Tab heading="Khen Thumna" textStyle={[styles.tabTxt, {fontSize: this.state.tabTxt}]}
              activeTextStyle={[styles.activeTxt, {fontSize: this.state.activeTxt}]}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTab}>
            <TabThumna />
          </Tab>
          <Tab heading="Khen Lina" textStyle={[styles.tabTxt, {fontSize: this.state.tabTxt}]}
              activeTextStyle={[styles.activeTxt, {fontSize: this.state.activeTxt}]}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTab}>
            <TabLina />
          </Tab>
          <Tab heading="Khen Ngana" textStyle={[styles.tabTxt, {fontSize: this.state.tabTxt}]}
               activeTextStyle={[styles.activeTxt, {fontSize: this.state.activeTxt}]}
               tabStyle={styles.tabStyle}
               activeTabStyle={styles.activeTab}>
            <TabNgana />
          </Tab>


        </Tabs>
      </Container>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  tabTxt: {
    fontFamily: 'Times New Roman',
    color: 'white',
    fontWeight: '700'
  },
  activeTxt: {
    fontFamily: 'Times New Roman',
    color: 'white',
    fontWeight: '900'
  },
  tabStyle: {
    flexGrow: 1,
    backgroundColor: '#2980b9',
  },
  activeTab: {
    borderColor: '#2980b9',
    flexGrow: 1,
    backgroundColor: '#2980b9',
  },
  tabBarUnderlineStyle: {
    backgroundColor: 'white',
    borderWidth: 0,
  },
  header: {
    backgroundColor: '#2980b9',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  title: {
    color: 'white',
    fontFamily: 'Times New Roman',
  }
})

export default MainView;
