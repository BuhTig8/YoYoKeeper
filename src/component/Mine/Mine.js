
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import BaseContainer from '~/common/base/BaseContainer';
import MineTable from './MineTable';

type Props = {};
export default class Mine extends Component<Props> {

  _onItemPress = (item)=> {
    const {row, section} = item;
    if (section == 0) {

    }else if (section == 1){

    }else if (section == 2){
      switch (row) {
        case 0:

          break;
        case 1:

          break;
        case 2:

          break;
        case 3:

          break;
        case 4:
          this.props.navigation.navigate('About');
          break;

        default:

      }
    }
  }

  render() {
    return (
      <BaseContainer hasHeader={false}>
        <MineTable
          onItemPress={this._onItemPress}
        />
      </BaseContainer>
    );
  }
}

const styles = StyleSheet.create({

});
