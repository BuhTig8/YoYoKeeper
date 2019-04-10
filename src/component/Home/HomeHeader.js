
import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import KKDatePicker from '~/common/KKDatePicker/KKDatePicker';
import { ToDecimal2 } from '~/utils/Tool'
import DateExtension from '~/utils/DateExtension'

type Props = {};

const triangle = require('~/assets/image/time_down.png')
export default class HomeHeader extends Component<Props> {

  itemMonth = ()=> {
    return (
      <View style={styles.itemBottom}>
        <Text style={styles.month}>{DateExtension.supplement(this.props.month)}</Text>
        <Text style={styles.monthDetail}>月</Text>
        <Image source={triangle} style={styles.triangle}/>
      </View>
    );
  }

  itemMoney = (index)=> {
    var income = 0
    var pay = 0
    for (var i = 0; i < this.props.models.length; i++) {
      var model = this.props.models[i].model
      income = income + model.income
      pay = pay + model.pay
    }
    var money = ToDecimal2(index == 1 ? income : pay)
    var moneyInt = parseInt(money)
    var moneyDetail = money.toString().substr(money.toString().length - 2, 2)
    return(
      <View style={styles.itemBottom}>
        <Text style={styles.month}>{moneyInt}</Text>
        <Text style={styles.moneyDetail}>{'.' + moneyDetail}</Text>
      </View>
    );
  }

  item = (index)=> {
    const str = index == 0 ? this.props.year + '年' : (index == 1 ? '收入' : '支出')
    return(
      <TouchableOpacity
        activeOpacity={1.0}
        onPress={index == 0 ? this.onPress : undefined}
        style={[{flex: index == 0 ? undefined : 1}]}
      >
        <View style={{flex: 1}}>
            <Text style={styles.title}>{str}</Text>
            {index == 0 && this.itemMonth()}
            {index != 0 && this.itemMoney(index)}
        </View>
      </TouchableOpacity>
    );
  }

  _onConfirm = (year, month)=>{
        this.props.onChangeDate(year, month)
  }

  //时间选择器
  onPress = ()=> {
    this.refs.picker.show()
  }
  render() {
    return (
      <View style={styles.container}>
        {this.item(0)}
        <View style={styles.line}/>
        {this.item(1)}
        {this.item(2)}
        <KKDatePicker ref={'picker'} number={2} onConfirm={this._onConfirm}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width:SCREEN_WIDTH,
    height:countcoordinatesX(100),
    backgroundColor: kColor_Main_Color,
    paddingRight: countcoordinatesX(60),
    paddingLeft: countcoordinatesX(30),
  },
  title: {
    fontSize: FONT_SIZE(8),
    fontWeight: '100',
    color: kColor_Text_Black,
    marginBottom: countcoordinatesX(10),
  },
  itemBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  month: {
    fontSize: FONT_SIZE(20),
    fontWeight: 'normal',
    color: kColor_Text_Black,
  },
  monthDetail: {
    fontSize: FONT_SIZE(8),
    fontWeight: 'normal',
    color: kColor_Text_Black,
    // marginLeft: countcoordinatesX(5),
    marginTop: countcoordinatesX(10),
  },
  moneyDetail: {
    fontSize: FONT_SIZE(10),
    fontWeight: 'normal',
    color: kColor_Text_Black,
    // marginLeft: countcoordinatesX(5),
    marginTop: countcoordinatesX(10),
  },
  line: {
    width: countcoordinatesX(1),
    height: countcoordinatesX(50),
    backgroundColor: kColor_Text_Black,
    marginTop: countcoordinatesX(15),
    marginLeft: countcoordinatesX(30),
    marginRight: countcoordinatesX(60),
  },
  triangle: {
    width: countcoordinatesX(20),
    height: countcoordinatesX(30),
    marginLeft: countcoordinatesX(10),
  }
});
