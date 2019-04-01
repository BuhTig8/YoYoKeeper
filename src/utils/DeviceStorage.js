import AsyncStorage from '@react-native-community/async-storage';

const cateList = require('~/assets/json/Category.json');

export const SAVE = {
  "PIN_FIRST_RUN": "PIN_FIRST_RUN",                                     // 第一次运行
  "PIN_CATE_SYS_HAS_PAY": "PIN_CATE_SYS_HAS_PAY",                       // 系统 - 添加的 - 支出
  "PIN_CATE_SYS_REMOVE_PAY": "PIN_CATE_SYS_REMOVE_PAY",                 // 系统 - 删除的 - 支出
  "PIN_CATE_CUS_HAS_PAY": "PIN_CATE_CUS_HAS_PAY",                       // 用户 - 添加的 - 支出
  "PIN_CATE_SYS_Has_PAY_SYNCED": "PIN_CATE_SYS_Has_PAY_SYNCED",         // 系统 - 添加的 - 支出 - 未同步(同步后应该为空)
  "PIN_CATE_SYS_REMOVE_PAY_SYNCED": "PIN_CATE_SYS_REMOVE_PAY_SYNCED",   // 系统 - 删除的 - 支出 - 未同步(同步后应该为空)
  "PIN_CATE_CUS_HAS_PAY_SYNCED": "PIN_CATE_CUS_HAS_PAY_SYNCED",         // 用户 - 添加的 - 支出 - 未同步(同步后应该为空)
  "PIN_CATE_CUS_REMOVE_PAY_SYNCED": "PIN_CATE_CUS_REMOVE_PAY_SYNCED",   // 用户 - 删除的 - 支出 - 未同步(同步后应该为空)

  "PIN_CATE_SYS_HAS_INCOME": "PIN_CATE_SYS_HAS_INCOME",                           // 系统 - 添加的 - 收入
  "PIN_CATE_SYS_REMOVE_INCOME": "PIN_CATE_SYS_REMOVE_INCOME",                     // 系统 - 删除的 - 收入
  "PIN_CATE_CUS_HAS_INCOME": "PIN_CATE_CUS_HAS_INCOME",                           // 用户 - 添加的 - 收入
  "PIN_CATE_SYS_Has_INCOME_SYNCED": "PIN_CATE_SYS_Has_INCOME_SYNCED",             // 系统 - 添加的 - 收入 - 未同步(同步后应该为空)
  "PIN_CATE_SYS_REMOVE_INCOME_SYNCED": "PIN_CATE_SYS_REMOVE_INCOME_SYNCED",       // 系统 - 删除的 - 收入 - 未同步(同步后应该为空)
  "PIN_CATE_CUS_HAS_INCOME_SYNCED": "PIN_CATE_CUS_HAS_INCOME_SYNCED",             // 用户 - 添加的 - 收入 - 未同步(同步后应该为空)
  "PIN_CATE_CUS_REMOVE_INCOME_SYNCED": "PIN_CATE_CUS_REMOVE_INCOME_SYNCED",       // 用户 - 删除的 - 收入 - 未同步(同步后应该为空)

  "PIN_ACA_CATE": "PIN_ACA_CATE",                             //  添加类别

  "PIN_BOOK": "PIN_BOOK",                                     // 记账
  "PIN_BOOK_SYNCED": "PIN_BOOK_SYNCED",                       // 记账 - 未同步

  "PIN_SETTING_SOUND": "PIN_SETTING_SOUND",                   // 声音开关
  "PIN_SETTING_DETAIL": "PIN_SETTING_DETAIL",                 // 明细详情

  "PIN_SETTING_SOUND_SYNCED": "PIN_SETTING_SOUND_SYNCED",     // 声音开关 - 未同步
  "PIN_SETTING_DETAIL_SYNCED": "PIN_SETTING_DETAIL_SYNCED",   // 明细详情 - 未同步

  "PIN_TIMING": "PIN_TIMING",                                 // 定时通知
  "PIN_TIMING_HAS_SYNCED": "PIN_TIMING_HAS_SYNCED",           // 定时添加通知 - 未同步
  "PIN_TIMING_REMOVE_SYNCED": "PIN_TIMING_REMOVE_SYNCED",     // 定时删除通知 - 未同步
}

export default class DeviceStorage {
  //初始化
  static initialization = async ()=>{
    // 第一次运行
    const isFirst = await DeviceStorage.load(SAVE.PIN_FIRST_RUN)
    // 初始化
    if (isFirst !== 1) {

      // 支出
      DeviceStorage.save(SAVE.PIN_CATE_SYS_HAS_PAY, cateList.pay)
      // 收入
      DeviceStorage.save(SAVE.PIN_CATE_SYS_HAS_INCOME, cateList.income)

      // 添加类别
      DeviceStorage.save(SAVE.PIN_FIRST_RUN, 1)
    }
  }

  //获取记账分类
  static getCategory = async ()=>{
    var setting = {
			"id": 999,
			"icon_n": "cc_home_tools",
			"icon_l": "cc_home_tools_l",
			"icon_s": "cc_home_tools_s",
			"is_income": 0,
			"is_system": 1,
			"name": "设置"
		}

      var data1 = await DeviceStorage.load(SAVE.PIN_CATE_SYS_HAS_PAY)
      var pay = [...data1, setting]

      var data2 = await DeviceStorage.load(SAVE.PIN_CATE_SYS_HAS_INCOME)
      var income = [...data2, setting]

      return await [pay, income]
  }

  /**
   * 获取
   * @param key
   * @return {Promise<T>|*|Promise.<TResult>}
   */
   static load(key) {
     return AsyncStorage.getItem(key).then((value) => {
       const jsonValue = JSON.parse(value);
       return jsonValue;
     });
  }

  /**
   * 保存
   * @param key
   * @param value
   * @return {*}
   */
   static save(key, value) {
     return AsyncStorage.setItem(key, JSON.stringify(value));
   }
}
