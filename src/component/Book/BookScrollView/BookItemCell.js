import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import { ImageManager } from '~/assets/json/ImageManager';

export default class BookItemCell extends Component {

  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this.props.onPress}
      >
        <View style={styles.container}>
          <Image source={ImageManager[this.props.selected?this.props.model.icon_s:this.props.model.icon_n]} style={styles.img}/>
          <Text style={styles.title}>{this.props.model.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: (SCREEN_WIDTH - countcoordinatesX(100) * 4) * 0.2,
    width: countcoordinatesX(100),
    alignItems: 'center',
  },
  img: {
    width: countcoordinatesX(100),
    height: countcoordinatesX(100),
    borderRadius: countcoordinatesX(50),
  },
  title: {
    marginTop:5,
  }
});
