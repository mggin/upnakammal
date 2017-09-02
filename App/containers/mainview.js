import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content,
         Tab, Tabs, ScrollableTab,
         Left, Right, Title, Body} from 'native-base'
import TabMasa from './masa'
import TabNihna from './nihna'
import TabThumna from './thumna'
import TabLina from './lina'
import TabNgana from './ngana'


class MainView extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs
                style={styles.header}
                iosBarStyle='light-content'>
              <Title style={styles.title}>UPNA LEH KAMMAL</Title>

        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}
              tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
          <Tab heading="Khen Masa" textStyle={styles.tabTxt}
              activeTextStyle={styles.activeTxt}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTab}>
            <TabMasa />
          </Tab>
          <Tab heading="Khen Nihna" textStyle={styles.tabTxt}
              activeTextStyle={styles.activeTxt}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTab}>
            <TabNihna />
          </Tab>
          <Tab heading="Khen Thumna" textStyle={styles.tabTxt}
              activeTextStyle={styles.activeTxt}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTab}>
            <TabThumna />
          </Tab>
          <Tab heading="Khen Lina" textStyle={styles.tabTxt}
              activeTextStyle={styles.activeTxt}
              tabStyle={styles.tabStyle}
              activeTabStyle={styles.activeTab}>
            <TabLina />
          </Tab>
          <Tab heading="Khen Ngana" textStyle={styles.tabTxt}
               activeTextStyle={styles.activeTxt}
               tabStyle={styles.tabStyle}
               activeTabStyle={styles.activeTab}>
            <TabNgana />
          </Tab>

        </Tabs>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  tabTxt: {
    fontFamily: 'Times New Roman',
    color: '#bdc3c7',
    fontWeight: '700'
  },
  activeTxt: {
    fontFamily: 'Times New Roman',
    color: '#ecf0f1',
    fontSize: 17.5,
    fontWeight: '900'
  },
  tabStyle: {
    backgroundColor: '#2980b9',
  },
  activeTab: {
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
    color: '#ecf0f1',
    fontFamily: 'Times New Roman',
    marginBottom: 7,
  }
})

export default MainView;
