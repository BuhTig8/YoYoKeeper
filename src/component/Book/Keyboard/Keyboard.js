import React, { Component } from 'react';
import {StyleSheet, View, Animated, Easing} from 'react-native';

import KeyboardHeader from './KeyboardHeader'
import KeyboardButton from './KeyboardButton'
import KeyboardTool from './KeyboardTool'

const contentH = BOOK_KEYBOARD_H
export default class Keyboard extends Component {

  constructor (props) {
    super(props)
    this.state = {
      money: '0',
      date: undefined,
      keyboardAnim: new Animated.Value(0),
    }
  }

  //按钮点击事件
  _onItemPress = (index)=> {
    if (index==3) {//日期

    }else {
      const money = this.state.money
      var newMoney = KeyboardTool.getMoneyString(money, index)
      this.setState({money: newMoney})
    }
  }

  //按钮
  _subItem = ()=> {
    var btnArray = []
    for(var i=0; i<4; i++){
      for(var j=0; j<4; j++){
        btnArray.push(
          <KeyboardButton
            key={i*4+j}
            index={i*4+j}
            title={KeyboardTool.getKeyboardBtnTitle(i*4+j, this.state.money, this.state.date)}
            onPress={(index)=>this._onItemPress(index)}
          />
        )
      }
    }
    return btnArray
  }

  show = ()=>{
    Animated.timing(this.state.keyboardAnim,{
      duration: 400,
      easing: Easing.elastic(0),
      toValue: BOOK_KEYBOARD_H
    }).start((result)=>{

    });
  }

  hide = ()=>{
    Animated.timing(this.state.keyboardAnim,{
      duration: 400,
      easing: Easing.elastic(0),
      toValue: 0
    }).start((result)=>{

    });
  }

  render() {
    return (
      <Animated.View style={{height: this.state.keyboardAnim}}>
        <View style={{height: BOOK_KEYBOARD_H}}>
          <View style={styles.container}>
            <KeyboardHeader
              money={this.state.money}
            />
            <View style={styles.line_H}/>
            <View style={styles.subItem}>
              {this._subItem()}
            </View>
          </View>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: BOOK_KEYBOARD_H,
    paddingBottom: SAFE_AREA_BOTTOM_HEIGHT,
    backgroundColor: kColor_BG,
  },
  line_H: {
    width: SCREEN_WIDTH,
    height: countcoordinatesX(1),
    backgroundColor: kColor_Line_Color,
  },
  subItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
