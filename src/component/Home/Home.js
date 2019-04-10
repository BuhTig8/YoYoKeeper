import React, {Component} from 'react';
import {StyleSheet, ScrollView, DeviceEventEmitter} from 'react-native';

import BaseContainer from '~/common/base/BaseContainer';

import HomeNavigation from './HomeNavigation';
import HomeHeader from './HomeHeader';
import HomeTableView from './TableView/HomeTableView'
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
      recordList: [],
    };
  }

  componentDidMount = ()=> {
    DeviceStorage.initialization()
    DeviceEventEmitter.addListener(EVENT.ADD_BOOK_EVENT, this.getData);
    DeviceEventEmitter.addListener(EVENT.REMOVE_BOOK_EVENT, this.getData);
    DeviceEventEmitter.addListener(EVENT.REPLACE_BOOK_EVENT, this.getData);
    this.getData()
  }
  componentWillUnmount = () => {
    DeviceEventEmitter.removeListener(EVENT.ADD_BOOK_EVENT, this.getData)
    DeviceEventEmitter.removeListener(EVENT.REMOVE_BOOK_EVENT, this.getData)
    DeviceEventEmitter.removeListener(EVENT.REPLACE_BOOK_EVENT, this.getData)
  }

  getData = async ()=> {
    var recordList = await DeviceStorage.getRecord(this.state.year, this.state.month)
    this.setState({recordList: recordList})
  }

  // 改变时间
  _onChangeDate = (year, month)=>{
    this.setState({
      year: parseInt(year),
      month: parseInt(month)
    });
    setTimeout(() => {
      DeviceEventEmitter.emit(EVENT.ADD_BOOK_EVENT, {});
    }, 300);
  }
  // 导航栏
  hasTitleComponent = ()=>{
    return (
      <HomeNavigation/>
    )
  }
  //cell点击
  _itemOnPress = (item) => {
    this.props.navigation.navigate('RecordDetail', {'model': item})
  }
  //收入
  render() {
    return (
      <BaseContainer
        hasHeader={true}
        hasTitleComponent={this.hasTitleComponent}
      >
        <HomeHeader
          year={this.state.year}
          month={this.state.month}
          models={this.state.recordList}
          onChangeDate={(year, month)=>this._onChangeDate(year, month)}
        />
        <HomeTableView
          style={styles.scroll}
          data={this.state.recordList}
          itemOnPress={this._itemOnPress}
        />
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
