import React, { Component } from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';

const rili_img = require('~/assets/image/cc_office_drawing_board_l.png')
const tuige_img = require('~/assets/image/tuige.png')
export default class KeyboardButton extends Component {

  _content = ()=> {
    if (this.props.title !== 'date' && this.props.title !== 'x') {
      return <Text style={styles.title}>{this.props.title}</Text>
    }else if (this.props.title === 'date'){
      return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={rili_img} style={styles.rili_img}/>
          <Text style={{fontSize: FONT_SIZE(14)}}>今天</Text>
        </View>
      )
    }else if (this.props.title === 'x'){
      return (
        <Image source={tuige_img} style={{width: countcoordinatesX(60), height: countcoordinatesX(60)}}/>
      )
    }
  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={()=>this.props.onPress(this.props.index)}
      >
        <View style={[styles.container, (this.props.title === '完成' || this.props.title === '='?{backgroundColor: kColor_Main_Color}:{})]}>
          {this._content()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.25,
    height: BOOK_KEYBOARD_H * 0.2,
    borderBottomWidth: countcoordinatesX(1),
    borderBottomColor: kColor_Line_Color,
    borderRightWidth: countcoordinatesX(1),
    borderRightColor: kColor_Line_Color,


    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_SIZE(22),
  },
  rili_img: {
    width: countcoordinatesX(60),
    height: countcoordinatesX(60),
  }
});
