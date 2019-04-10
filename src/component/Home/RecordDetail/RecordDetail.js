import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native';
import BaseContainer from '~/common/base/BaseContainer'
import RecordDetailHeader from './RecordDetailHeader'

export default class RecordDetail extends Component {

  componentWillMount = ()=> {
    
  }
  render() {
    const { params } = this.props.navigation.state
    return (
      <BaseContainer
        hasBackBtn={true}
        hasHeader={true}
        title={' '}
        navigation={this.props.navigation}
      >
        <RecordDetailHeader model={params.model}/>
      </BaseContainer>
    );
  }
}

const styles = StyleSheet.create({

});
