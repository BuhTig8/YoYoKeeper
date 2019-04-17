
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, SegmentedControlIOS, Animated} from 'react-native';

import BaseContainer from '~/common/base/BaseContainer';

type Props = {};
const time_down_img = require('~/assets/image/time_down.png')
export default class Chart extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {
      segmentSelectedIndex: 0,
    }
  }
  hasTitleComponent = ()=> {
    return(
      <TouchableOpacity
        activeOpacciy={0.9}
        style={styles.container}
      >
        <Text style={styles.navigation_title}>支出</Text>
        <Image source={time_down_img} resizeMode={'contain'} style={styles.navigation_icon}/>
      </TouchableOpacity>
    );
  }
  renderHeader = ()=> {
    return(
      <View style={styles.header}>
        <SegmentedControlIOS
          values={['周','月','年']}
          selectedIndex={this.state.segmentSelectedIndex}
          onChange={(event) => {this.segmentOnChange(event)}}
          tintColor={'white'}
          style={styles.segment}
        />
      </View>
    );
  }
  renderTypeView = ()=> {
    return(
      <Animated.View>
        
      </Animated.View>
    );
  }
  render() {
    return (
        <BaseContainer
          hasHeader={true}
          hasTitleComponent={this.hasTitleComponent}
        >
          {this.renderHeader()}
          {this.renderTypeView()}
        </BaseContainer>
    );
  }

  segmentOnChange = (e)=> {

  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navigation_title: {
    fontSize: FONT_SIZE(16),
    fontWeight: '400',
    color: kColor_Text_Black,
    letterSpacing: 1,
  },
  navigation_icon: {
    marginLeft: countcoordinatesX(8),
    width: countcoordinatesX(30),
    height: countcoordinatesX(30),
  },
  header: {
    height: countcoordinatesX(80),
    backgroundColor: kColor_Main_Color,
    paddingLeft: countcoordinatesX(50),
    paddingRight: countcoordinatesX(50),
  },
  segment: {
    height: countcoordinatesX(60),
  },
});
