import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, StatusBar, View} from 'react-native';

import Navigation from '~/common/Navigation/Navigation';

type Props = {

}

export default class BaseContainer extends Component<Props> {

  _statusBar = ()=>{
    return(
      <StatusBar
        translucent={false}
        // backgroundColor={this.props.statusBarColor}
        barStyle="dark-content"
      />
    );
  }

  _onBackPress = ()=> {
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={[styles.container, {...this.props.style}]}>
        {this._statusBar()}
        {this.props.hasHeader && <Navigation {...this.props} onBackPress={this._onBackPress}/>}
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: 'white',
    }
});
