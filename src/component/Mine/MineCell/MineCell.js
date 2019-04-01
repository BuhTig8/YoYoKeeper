
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image, Switch} from 'react-native';

type Props = {};
const arrow_img = require('~/assets/image/ad_arrow.png')
export default class Mine extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      switchValue: false
    };
  }
  detail = ()=> {
    return (
      <View style={styles.rightContent}>
        {this.props.data.detail && <Text style={styles.detail}>{this.props.data.detail}</Text>}
        <Image source={arrow_img} style={styles.arrow}/>
      </View>
    );
  }
  switch = ()=> {
    return (
      <Switch
        style={styles.rightContent}
        trackColor={{true: kColor_Main_Color}}
        // ios_backgroundColor={'white'}
        // thumbColor={kColor_Main_Color}//按钮颜色
        // tintColor={kColor_Main_Color} //关闭状态时的边框颜色(iOS)或背景颜色(Android)
        disabled={false}
        onValueChange={(value) => this.setState({switchValue: value})}
        value={this.state.switchValue}
      />
    );
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor={kColor_Text_Gray}
        activeOpacity={0.9}
        onPress={this.props.onPress}
      >
        <View style={styles.container}>
          <Image resizeMode={'contain'} source={this.props.data.icon} style={styles.icon}/>
          <Text style={styles.title}>{this.props.data.name}</Text>
          {this.props.data.isSwitch ? this.switch() : this.detail()}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: countcoordinatesX(100),
    backgroundColor: 'white',
    paddingLeft: countcoordinatesX(40)
  },
  icon: {
    width:countcoordinatesX(35),
    height:countcoordinatesX(35),
    marginRight: countcoordinatesX(28),
  },
  title: {

  },
  rightContent: {
    position: 'absolute',
    right: countcoordinatesX(30),
    flexDirection: 'row',
  },
  detail: {
    marginRight:countcoordinatesX(10),
    color: kColor_Text_Black,
  },
  arrow: {
    width: countcoordinatesX(30),
    height: countcoordinatesX(30),
  },
});
