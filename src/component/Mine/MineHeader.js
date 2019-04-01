import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';


type Props = {};
const default_header_img = require('~/assets/image/default_header.png');

export default class MineHeader extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.9}
        >
          <View style={styles.loginBtn}>
            <Image source={default_header_img} style={styles.icon}/>
            <Text style={styles.name}>未登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_WIDTH / 2.0,
    backgroundColor: kColor_Main_Color,
    paddingTop: STATUS_BAR_HEIGHT,
  },
  loginBtn: {
    alignItems: 'center',
  },
  icon: {
    marginTop: countcoordinatesX(30),
    width: countcoordinatesX(120),
    height: countcoordinatesX(120),
    backgroundColor:kColor_Text_Gray,
    borderRadius: countcoordinatesX(60),
  },
  name: {
    marginTop: countcoordinatesX(20),
    fontSize: FONT_SIZE(14),
  }
});
