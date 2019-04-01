import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import BaseContainer from '~/common/base/BaseContainer';

type Props = {};
export default class Find extends Component<Props> {
  render() {
    return (
      <View>
        <BaseContainer
          hasHeader={true}
          title={'发现'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
