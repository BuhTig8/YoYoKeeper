
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SegmentedControlIOS} from 'react-native';

import BaseContainer from '~/common/base/BaseContainer';
import BookScrollView from './BookScrollView/BookScrollView';
import BookKeyboard from './Keyboard/BookKeyboard'

import DeviceStorage from '~/utils/DeviceStorage'

type Props = {};
export default class Book extends Component<Props> {

  constructor (props) {
    super(props);
    this.state = {
      segmentSelectedIndex: 0,
      models: [[], []]
    };
  }

  //组件加载完毕后调用(只调用一次)
  componentDidMount = ()=> {
    DeviceStorage.getCategory().then((datas) => {
      this.setState({models: datas})
    })
  }

  hasContentRight = ()=> {
    const { goBack } = this.props.navigation;
    return(
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={()=>goBack()}
        style={styles.cancleTouch}
      >
        <Text style={styles.cancle}>取消</Text>
      </TouchableOpacity>
    );
  }

  /*****ScrollView*****/
  _onMomentumScrollEnd = (page)=> {
    if (page == this.state.segmentSelectedIndex) {
      return
    }
    this.setState({segmentSelectedIndex: page})
    this.refs.keyboard.hide()
  }

  segmentOnChange = (event)=> {
    if (event.nativeEvent.selectedSegmentIndex == this.state.segmentSelectedIndex) {
      return
    }
    this.setState({segmentSelectedIndex: event.nativeEvent.selectedSegmentIndex});
    this.refs.keyboard.hide()
  }

  _onItemPress = ()=> {
    this.refs.keyboard.show()
  }

  _hasTitleComponent = ()=> {
    return (
      <SegmentedControlIOS
        values={['支出','收入']}
        selectedIndex={this.state.segmentSelectedIndex}
        onChange={(event) => {this.segmentOnChange(event)}}
        tintColor={'white'}
        style={styles.segment}
      />
    );
  }

  render() {
    return (
        <BaseContainer
          hasHeader={true}
          hasTitleComponent={this._hasTitleComponent}
          hasRight={true}
          hasContentRight={this.hasContentRight()}
        >
          <BookScrollView
            ref={'scroll'}
            models={this.state.models}
            segmentSelectedIndex={this.state.segmentSelectedIndex}
            onItemPress={()=>this._onItemPress()}
            onMomentumScrollEnd={(page)=>this._onMomentumScrollEnd(page)}
          />
          <BookKeyboard ref={'keyboard'}/>
        </BaseContainer>
    );
  }
}

const styles = StyleSheet.create({
  cancleTouch: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    paddingLeft: countcoordinatesX(30),
    paddingRight: countcoordinatesX(30),
  },
  cancle: {
    fontSize: FONT_SIZE(14),
    fontWeight: '400',
    color: kColor_Text_Black,
  },
  segment: {
    width: SCREEN_WIDTH * 0.5,
    height: countcoordinatesX(60),
  },
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - STATUS_BAR_HEIGHT - NAVIGATION_HEIGHT,
    flexDirection: 'row',
  },
  subScrollView: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - STATUS_BAR_HEIGHT - NAVIGATION_HEIGHT,
    backgroundColor: 'red',
  },
  subScrollView2: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - STATUS_BAR_HEIGHT - NAVIGATION_HEIGHT,
    backgroundColor: 'blue',
  }
});
