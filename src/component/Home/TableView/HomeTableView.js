import React, { Component } from 'react';
import {StyleSheet, View, SectionList, Text} from 'react-native';
// import { PullList } from '~/third/react-native-pull'
import HomeTableCell from './HomeTableCell'
import DateExtension from '~/utils/DateExtension'


export default class HomeTableView extends Component {

  _renderItem = (item, index, section)=> {
    return <HomeTableCell data={item}/>
  }
  _renderSectionHeader = ({section})=> {
    return(
      <View>
        <View style={styles.sectionHeader}>
          <Text style={styles.dateText}>{DateExtension.supplement(section.model.list[0].month) + '月' + DateExtension.supplement(section.model.list[0].day) + '日' + ' ' + DateExtension.week(DateExtension.strToDate(section.model.list[0].year, section.model.list[0].month, section.model.list[0].day))}</Text>
          <Text style={styles.moneyText}>{(section.model.income > 0 ? '收入: ' + section.model.income:'') + (section.model.pay > 0 ? ' 支出: ' + section.model.pay:'')}</Text>
        </View>
        <View style={styles.line}/>
      </View>
    )
  }

  //分割线
  _itemSeparatorComponent = ()=> {
    return (
      <View style={styles.itemSeparator}/>
    );
  }
  _sectionSeparatorComponent = ()=> {
    return (
      <View style={styles.line}/>
    );
  }
  render() {
    return (
      <SectionList
        renderItem={({ item, index, section }) => this._renderItem( item, index, section )}
        sections={this.props.data}
        renderSectionHeader={this._renderSectionHeader}
        // SectionSeparatorComponent={this._sectionSeparatorComponent}
        ItemSeparatorComponent={this._itemSeparatorComponent}
        keyExtractor={(item, index) => item + index}
      >

      </SectionList>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    height: countcoordinatesX(70),
    paddingLeft: countcoordinatesX(30),
    paddingRight: countcoordinatesX(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    flex: 1,
    fontSize: FONT_SIZE(10),
    color: kColor_Text_Gray,
  },
  moneyText: {
    fontSize: FONT_SIZE(10),
    color: kColor_Text_Gray,
  },
  line: {
    height: countcoordinatesX(1),
    backgroundColor: kColor_BG,
  },
  itemSeparator: {
    marginLeft: countcoordinatesX(100),
    height: countcoordinatesX(1),
    backgroundColor: kColor_BG,
  }
});
