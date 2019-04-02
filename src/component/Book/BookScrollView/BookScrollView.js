import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import BookItemCell from './BookItemCell';

export default class BookScrollView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contentOffsetY: [0, 0],     // 偏移量
      selectedIndexs: [-1, -1],     // Item选中
    };
  }

  //ScrollView水平方向滚动
  _onHorizontalMomentumScrollEnd = (e)=> {
    var page =e.nativeEvent.contentOffset.x / SCREEN_WIDTH
    this.props.onMomentumScrollEnd(page)
  }

  _onItemPress = (index)=> {
    var selectedIndexs = this.state.selectedIndexs
    selectedIndexs[this.props.segmentSelectedIndex] = index
    this.setState({selectedIndexs: selectedIndexs})

    this.props.onItemPress()
  }

  scrollItems = ()=> {
    var array = [];
    for (let i=0; i<this.props.models.length; i++) {
      var subArray = [];
      var data = this.props.models[i] ? this.props.models[i] : []
      for (let m=0; m<data.length; m++){
        subArray.push(
          <BookItemCell
            ref={'item' + m}
            key={m}
            model={data[m]}
            selected={this.state.selectedIndexs[i] == m}
            onPress={()=>this._onItemPress(m)}
          />
        )
      }
      array.push(
        <ScrollView
          key={i}
          showsVerticalScrollIndicator={true}
          alwaysBounceVertical={true}
          style={i==0?styles.list1:styles.list2}
          contentInset={{bottom: 50}}
        >
          <View style={styles.listContent}>
            {subArray}
          </View>
        </ScrollView>
      )
    }
    return array;
  }
  // 更新
  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.segmentSelectedIndex !== this.props.segmentSelectedIndex) {
      this.refs.scroll.scrollTo({x: nextProps.segmentSelectedIndex * SCREEN_WIDTH, y: 0, animated: true})
      this.setState({selectedIndexs: [-1, -1]})
      return true
    }
    if (nextState.contentOffsetY !== this.state.contentOffsetY) {
      return false
    }
    return true
  }

  //获取被选中的分类
  getSelectedModel = ()=> {
    var index = this.state.selectedIndexs[this.props.segmentSelectedIndex]
    var model = this.props.models[this.props.segmentSelectedIndex][index]
    return model
  }

  render() {
    return (
      <ScrollView
        ref={'scroll'}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        bounces={true}
        style={styles.container}
        onMomentumScrollEnd={(e)=> this._onHorizontalMomentumScrollEnd(e)}
      >
        {this.scrollItems()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // width: SCREEN_WIDTH,
    flex: 1,
  },
  listContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  list1: {
    width: SCREEN_WIDTH,
  },
  list2: {
    width: SCREEN_WIDTH,
  },
});
