
export default class KeyboardTool {

  static getMoneyString = (string, index)=>{
    // 数字
    if (KeyboardTool.isMath(index) && KeyboardTool.isAllowMath(string)) {
      return KeyboardTool.enterMath(string, index)
    }
    // 点
    if (KeyboardTool.isPoint(index) && KeyboardTool.isAllowPoint(string)) {
      return KeyboardTool.enterPoint(string, index)
    }
    // 删除
    if (KeyboardTool.isRemove(index) && KeyboardTool.isAllowRemove(string)) {
      return KeyboardTool.enterRemove(string, index)
    }
    // 加减
    if (KeyboardTool.isAddLess(index) && KeyboardTool.isAllowAddLess(string)) {
      return KeyboardTool.enterAddLess(string, index)
    }
    // 时间
    if (KeyboardTool.isDate(index) && KeyboardTool.isAllowDate(string)) {

    }
    // 完成
    if (KeyboardTool.isComplete(index) && KeyboardTool.isAllowComplete(string)) {
      return KeyboardTool.enterComplete(string, index)
    }
    return string
  }

  static getKeyboardBtnTitle = (index, string, date) => {
    switch (index) {
      case 0:
        return '7';
        break;
      case 1:
        return '8';
        break;
      case 2:
        return '9';
        break;
      case 3:{
        if (date == undefined) {
          return '今天'
        } else {
          return date
        }
      }
        break;
      case 4:
        return '4';
        break;
      case 5:
        return '5';
        break;
      case 6:
        return '6';
        break;
      case 7:
        return '+';
        break;
      case 8:
        return '1';
        break;
      case 9:
        return '2';
        break;
      case 10:
        return '3';
        break;
      case 11:
        return '-';
      case 12:
        return '.';
        break;
      case 13:
        return '0';
        break;
      case 14:
        return 'x';
        break;
      case 15:
        return KeyboardTool.updateComplete(string);
        break;
      default:

    }
  }


  // 数字
  static isMath = (index)=>{
    if (index == 0 || index == 1 || index == 2 ||
      index == 4 || index == 5 || index == 6 ||
      index == 8 || index == 9 || index == 10 ||
      index == 13) {
      return true
    }
    return false
  }
  // 点
  static isPoint = (index)=>{
    if (index == 12) {
      return true
    }
    return false
  }
  // 删除
  static isRemove = (index)=>{
    if (index == 14) {
      return true
    }
    return false
  }
  // 加减
  static isAddLess = (index)=>{
    if (index == 7 || index == 11) {
      return true
    }
    return false
  }
  // 时间
  static isDate = (index)=>{
    if (index == 3) {
      return true
    }
    return false
  }
  // 完成
  static isComplete = (index)=>{
    if (index == 15) {
      return true
    }
    return false
    }
  // 计算
  static isCalculation = (string)=>{
    if (string.length <= 1) {
        return true
    }

    var str = string.substring(1, string.length-1)

    var count = 0;
    for (var i=0; i<str.length; i++) {
      if (str.charAt(i) == '+') {
        count += 1
      }
      if (str.charAt(i) == '-') {
        count += 1
      }
    }
    if (count >= 1) {
      return false
    }
    return true
  }


  // 允许数字
  static isAllowMath = (string)=>{
    var num = string.lastIndexOf('.');
    // 没有小数点
    if (num == -1) {
      return true
    } else {
      // 最后一个小数点到最后之间包含非数字符号
      for (var i=num+1; i<string.length; i++) {
        if (!(/^[0-9]+$/.test(string.charAt(i)))) {
            return true
        }
      }
      // 最后一个小数点后数字个数少于2
      if (string.length - num > 2) {
        return false
      }
      return true
    }
  }
  // 允许点
  static isAllowPoint = (string)=>{
    // 字符串为空
    if (string.length == 0) {
      return false
    }

    var last = string.charAt(string.length - 1)
    // 最后一位不是数字
    if (!(/^[0-9]+$/.test(last))) {
      return false
    }
    // 当前数字之前是否有小数点
    for (var i=string.length-1; i>=0; i--) {
      var char = string.charAt(i);
      // 加减号
      if (char == '+' || char == '-') {
        return true
      }
      // 小数点
      if (char == '.') {
        return false
      }
    }
    return true
  }
  // 允许删除
  static isAllowRemove = (string)=>{
    if (string.length != 0) {
      return true
    }
    return false
  }
  // 允许加减
  static isAllowAddLess = (string)=>{
    return true
  }
  // 允许时间
  static isAllowDate = (string)=>{
    return true
  }
  // 允许完成
  static isAllowComplete = (string)=>{
    return true
  }


  // 输入数字
  static enterMath = (string, index)=>{
    var math = KeyboardTool.getKeyboardBtnTitle(index, string)
    // 字符串只有一个0
    if (string === "0") {
      return math
    }
    else {
      return string + "" + math
    }
  }
  // 输入点
  static enterPoint = (string, index)=>{
    return string + "."
  }
  // 输入删除
  static enterRemove = (string, index)=>{
    // 只有一位了还点删除
    if (string.length == 1) {
      return "0"
    }
    else {
      return string.substring(0, string.length - 1)
    }
  }
  // 输入加减
  static enterAddLess = (string, index)=>{
    var str = KeyboardTool.getKeyboardBtnTitle(index)
    var last = string.charAt(string.length-1)
    if (last == "+" || last == "-") {
      return string.substring(0, string.length-1) + str
    } else {
      return string + str
    }
  }
  // 输入完成
  static enterComplete = (string, index)=>{
    if (string == "+" || string == "-") {
      return "0"
    }
    var last = string.charAt(string.length - 1)
    var str = string
    if (last == '=') {
      str = str.substring(0, string.length - 1)
    }
    return eval(str).toFixed(2) + ""
  }


  // 更新完成按钮文本
  static updateComplete = (string) => {
    if (string.length <= 1) {
      return '完成'
    }

    var str = string.substring(1, string.length-1)

    var count = 0;
    for (var i=0; i<str.length; i++) {
      if (str.charAt(i) == '+') {
        count += 1
      }
      if (str.charAt(i) == '-') {
        count += 1
      }
    }
    if (count >= 1) {
      return '='
    }
    return "完成"
  }
}
