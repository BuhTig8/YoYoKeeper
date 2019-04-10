import React, { Component } from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import { ImageManager } from '~/assets/json/ImageManager'

export default class RecordDetailHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={ImageManager[this.props.model.cModel.icon_l]} style={styles.icon}/>
        <Text style={styles.title}>{this.props.model.cModel.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:SCREEN_WIDTH,
    height:countcoordinatesX(100),
    backgroundColor: kColor_Main_Color,
    alignItems: 'center',
  },
  icon: {
    width: countcoordinatesX(110),
    height: countcoordinatesX(110),
    borderRadius: countcoordinatesX(55),
    marginTop: countcoordinatesX(-75),
  },
  title: {
    fontSize: FONT_SIZE(12),
    color: kColor_Text_Black,
    marginTop: countcoordinatesX(20),
  }
});
