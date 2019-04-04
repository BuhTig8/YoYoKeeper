import DeviceStorage, { SAVE } from '~/utils/DeviceStorage'

export default class RecordModel {
  id = 0                //id
  category_id = 0       //分类id
  price = 0             //价格
  year = 0              //年
  month = 0             //月
  day = 0               //日
  mark = ''             //备注
  cModel = undefined    //分类模型
}
