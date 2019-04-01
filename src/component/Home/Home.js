import React, {Component} from 'react';
import {StyleSheet, ScrollView, DeviceEventEmitter} from 'react-native';

import BaseContainer from '~/common/base/BaseContainer';

import HomeNavigation from './HomeNavigation';
import HomeHeader from './HomeHeader';
import DeviceStorage from '~/utils/DeviceStorage'

type Props = {};

const scrollH = (SCREEN_HEIGHT - NAVIGATION_HEIGHT - HOME_HEADER_H - STATUS_TABBAR_HEIGHT);
export default class Home extends Component<Props> {

  constructor(props) {
    const date = new Date();
    super(props);
    this.state = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
    };
  }

  componentDidMount = ()=> {
    DeviceStorage.initialization()
  }

  // 改变时间
  _onChangeDate = (year, month)=>{
    this.setState({
      year: parseInt(year),
      month: parseInt(month)
    });
    // setTimeout(() => {
    //   DeviceEventEmitter.emit(EVENT.ADD_BOOK_EVENT, {});
    // }, 300);
  }
  // 导航栏
  hasTitleComponent = ()=>{
    return (
      <HomeNavigation/>
    )
  }
  render() {
    return (
      <BaseContainer
        hasHeader={true}
        hasTitleComponent={this.hasTitleComponent}
      >
        <HomeHeader
          year={this.state.year}
          month={this.state.month}
          onChangeDate={(year, month)=>this._onChangeDate(year, month)}
        />
        <ScrollView contentContainerStyle={styles.scroll}>

        </ScrollView>
      </BaseContainer>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: scrollH,
  }
});
