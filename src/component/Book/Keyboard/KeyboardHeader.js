import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, TextInput} from 'react-native';


const remark_img = require('~/assets/image/cc_study_calculator_l.png');
export default class KeyboardHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.line_H}/>
        <View style={styles.mainView}>
          <Image source={remark_img} style={styles.img_remark}/>
          <Text style={styles.remark_text}>备注:</Text>
          <TextInput
            maxLength={20}
            placeholder={'点击写备注...'}
            placeholderTextColor={kColor_Text_Gray}
            style={styles.textInput}
          />
          <Text style={styles.money_text}>{this.props.money}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: countcoordinatesX(80),
    backgroundColor: kColor_BG,
  },
  line_H: {
    width: SCREEN_WIDTH,
    height: countcoordinatesX(1),
    backgroundColor: kColor_Line_Color,
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: countcoordinatesX(79),
  },
  img_remark: {
    width: countcoordinatesX(60),
    height: countcoordinatesX(60),
  },
  remark_text: {
    fontSize: FONT_SIZE(14),
    color: kColor_Text_Black,
  },
  textInput: {
    flex: 1,
    marginLeft: countcoordinatesX(10),
    fontSize: FONT_SIZE(14),
    color: kColor_Text_Black,
  },
  money_text: {
    fontSize: FONT_SIZE(24),
    color: kColor_Text_Black,
    paddingLeft: countcoordinatesX(30),
    paddingRight: countcoordinatesX(30),
  }
});
