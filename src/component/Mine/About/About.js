
import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

import BaseContainer from '~/common/base/BaseContainer'

type Props = {};
export default class About extends Component<Props> {

  render() {
    return (
      <BaseContainer
        hasBackBtn={true}
        hasHeader={true}
        title={'关于鲨鱼记账'}
        navigation={this.props.navigation}
        style={styles.container}
      >
        <Image source={require('~/assets/image/about.png')} style={styles.img}/>
        <Text style={styles.title}>财务自由从鲨鱼记账开始</Text>
        <TouchableOpacity style={styles.btn} activeOpacity={0.9}>
            <Text style={styles.btn_title}>关注鲨鱼记账微信公众号</Text>
        </TouchableOpacity>
      </BaseContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: kColor_BG,
  },
  img: {
    marginTop: countcoordinatesX(150),
  },
  title: {
    marginTop: countcoordinatesX(50),
    fontSize: FONT_SIZE(14),
    color: kColor_Text_Black,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH - countcoordinatesX(150) * 2,
    height: countcoordinatesX(100),
    position: 'absolute',
    bottom: 120,
    borderRadius:countcoordinatesX(20),
    borderColor: kColor_Text_Gray,
    borderWidth: countcoordinatesX(1),
  },
  btn_title: {
    fontSize: FONT_SIZE(12),
    color: kColor_Text_Black,
  },
});
