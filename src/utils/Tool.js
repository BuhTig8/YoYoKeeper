/**
 * @flow
 */

import { Dimensions, Platform, PixelRatio } from 'react-native';
const { width } = Dimensions.get('window');

const basePx = Platform.OS === 'ios' ? 750 : 720;

export const Px2Dp = function px2dp(px: number): number {
  const layoutSize = (px / basePx) * width;

  return PixelRatio.roundToNearestPixel(layoutSize);
};

//强制小数位保留方法

export const ToDecimal2 = function toDecimal2(x: number){
  var f = parseFloat(x);
  //isNaN() 函数用于检查其参数是否是非数字值,如果 x 是特殊的非数字值 NaN（或者能被转换为这样的值），返回的值就是 true。如果 x 是其他值,则返回 false。

  if (isNaN(f)) {
    return false;
  }
    var f = Math.round(x*100)/100; //round() 方法可把一个数字舍入为最接近的整数
    var s = f.toString();
    var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}
