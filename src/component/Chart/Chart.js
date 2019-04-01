
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import BaseContainer from '~/common/base/BaseContainer';

type Props = {};
export default class Chart extends Component<Props> {
  render() {
    return (
      <View>
        <BaseContainer
          hasHeader={true}
          title={'支出'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
