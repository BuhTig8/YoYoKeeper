import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Global from '~/utils/Global'

import AppRouter from '~/router/AppRouter';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppRouter />
    );
  }
}

const styles = StyleSheet.create({

});
