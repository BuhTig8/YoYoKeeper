
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image
} from 'react-native'



type Props = {

};

const back_img = require('~/assets/image/nav_back_n.png')
export default class Navigation extends Component<Props> {

  title = ()=>{
    return(
      <Text style={styles.title}>{this.props.title}</Text>
    );
  }

  contentLeft = ()=> {
    if (this.props.hasLeft) {
      return(
        <View style={styles.contentLeft}>
          {this.props.hasContentLeft}
        </View>
      );
    }else {
      // const navigation = this.props.navigation;
      // if (navigation && navigation.params && navigation.params['mode'] === 'modal') {
      if (!this.props.hasBackBtn) {
        return <View/>
      }else {
        return (
          <TouchableOpacity style={styles.contentLeft} onPress={this.props.onBackPress}>
              <Image source={back_img} resizeMode={'contain'} style={{width: countcoordinatesX(40),height: countcoordinatesX(44)}}/>
              <Text>返回</Text>
          </TouchableOpacity>
        );
      }
    }
  }

  contentRight = ()=> {
    if (this.props.hasRight) {
      return (
        <View style={styles.contentRight}>
          {this.props.hasContentRight}
        </View>
      );
    }else {
      return <View style={styles.contentRight}/>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.contentLeft()}
        {this.props.title && this.title()}
        {!this.props.title && this.props.hasTitleComponent()}
        {this.contentRight()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        height: iOS ? NAVIGATION_HEIGHT : NAVIGATION_HEIGHT - STATUS_BAR_HEIGHT,
        paddingTop: iOS ? STATUS_BAR_HEIGHT : 0,
        backgroundColor: kColor_Main_Color,
    },
    title: {
        fontSize: FONT_SIZE(16),
        fontWeight: '400',
        color: kColor_Text_Black,
        letterSpacing: 1,
    },
    contentLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: 44,
    },
    contentRight: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        height: 44,
    }
});
