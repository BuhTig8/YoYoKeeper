import React, { Component } from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import DeviceStorage from '~/utils/DeviceStorage'
import { ImageManager } from '~/assets/json/ImageManager'

export default class HomeTableCell extends Component {

  renderMoney = () => {
    if (this.props.data.cModel.is_income) {
      return <Text style={[styles.money,{color: 'red'}]}>{this.props.data.price}</Text>
    }else {
      return <Text style={[styles.money,{color: 'green'}]}>{-(this.props.data.price)}</Text>
    }

  }

  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={this.props.onPress}
      >
        <View style={styles.container}>
          <Image source={ImageManager[this.props.data.cModel.icon_l]} style={styles.icon}/>
          <Text style={styles.title}>{this.props.data.cModel.name}</Text>
          {this.renderMoney()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // width: SCREEN_WIDTH,
    height: countcoordinatesX(120),
    paddingLeft: countcoordinatesX(36),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: countcoordinatesX(80),
    height: countcoordinatesX(80),
    borderRadius: countcoordinatesX(40),
  },
  title: {
    flex: 1,
    marginLeft: countcoordinatesX(40),
    fontSize: FONT_SIZE(14),
    color: kColor_Text_Black,
  },
  money: {
    marginRight: countcoordinatesX(36),
    fontSize: FONT_SIZE(16),
    color: kColor_Text_Black,
  }
});
