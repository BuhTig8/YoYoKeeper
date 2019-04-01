import React, {Component} from 'react';
import {StyleSheet, SectionList, Text, View} from 'react-native';

import MineHeader from './MineHeader';
import MineCell from './MineCell/MineCell'

const mine_badge = require('~/assets/image/mine_badge.png')
const mine_tallytype = require('~/assets/image/mine_tallytype.png')
const mine_sound = require('~/assets/image/mine_sound.png')
const mine_remind = require('~/assets/image/mine_remind.png')
const mine_detail = require('~/assets/image/mine_detail.png')
const mine_rating = require('~/assets/image/mine_rating.png')
const mine_feedback = require('~/assets/image/mine_feedback.png')
const mine_merge = require('~/assets/image/mine_merge.png')
const mine_help = require('~/assets/image/mine_help.png')
const mine_about = require('~/assets/image/mine_about.png')

type Props = {};
export default class MineTable extends Component<Props> {
  constructor(props) {
        super(props);
        this.state = {
            contentHeight: countcoordinatesX(200),
            data: [
                { data: [{"icon": mine_badge, "name": "徽章", row: 0, section: 0, detail: '123'}]},
                { data: [
                    {"icon": mine_tallytype, "name": "类别设置", row: 0, section: 1},
                    {"icon": mine_remind, "name": "定时提醒", row: 1, section: 1},
                    {"icon": mine_sound, "name": "声音开关", row: 2, section: 1, isSwitch: true},
                    {"icon": mine_detail, "name": "明细详情", row: 3, section: 1, isSwitch: true}
                ]},
                { data: [
                    {"icon": mine_rating, "name": "去App Store给鲨鱼记账评分", row: 0, section: 2},
                    {"icon": mine_feedback, "name": "意见反馈", row: 1, section: 2},
                    {"icon": mine_merge, "name": "同步数据", row: 2, section: 2},
                    {"icon": mine_help, "name": "帮助", row: 3, section: 2},
                    {"icon": mine_about, "name": "关于鲨鱼记账 V " + Version, row: 4, section: 2}
                ]},
            ]
        }
    }

  _listHeaderComponent = ()=> {
    return (
      <MineHeader/>
    );
  }
  _listFooterComponent = ()=>{
      return (
        <View style={{height: countcoordinatesX(100)}}/>
      )
    }
  //组头
  _renderSectionHeader = ()=> {
    return(
      <View style={styles.sectionHeader}>

      </View>
    );
  }
  //Cell
  _renderItem = (item, index, section)=> {
    return (
      <MineCell data={item} onPress={()=>this.props.onItemPress(item, index, section)}/>
    );
  }

  //分割线
  _itemSeparatorComponent = ()=> {
    return (
      <View style={styles.line}/>
    );
  }
  render() {
    return (
      <SectionList style={{backgroundColor: kColor_BG}}
        ListHeaderComponent={this._listHeaderComponent}
        ListFooterComponent={this._listFooterComponent}
        renderSectionHeader={this._renderSectionHeader}
        renderItem={({ item, index, section }) => this._renderItem( item, index, section )}
        sections={this.state.data}
        ItemSeparatorComponent={this._itemSeparatorComponent}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
      />
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    height: countcoordinatesX(20),
  },
  line: {
    marginLeft: countcoordinatesX(30),
    height: countcoordinatesX(1),
    backgroundColor: kColor_BG,
  }
});
