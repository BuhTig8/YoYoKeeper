
import React, { Component } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';

type Props = {

};

const navIcon = require('~/assets/image/share_shark_99x27_.png')

export default class HomeNavigation extends Component<Props> {
  render(){
    return (
      <Image style={styles.icon} source={navIcon} resizeMode={'contain'}/>
    );
  }
}
const styles = StyleSheet.create({
    icon: {
        height: 20,
    }
});
