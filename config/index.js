export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxe4e3d44f0df1fa03",
    // 公众号appSecret
    appSecret: "495db0ff7a4c28851c8862270a1c43ab",
    // 模板消息id
    templateId: "x5Z7JpMLWKgjWV2lL5A-GbfT-nXGi-FtFU7nnfaz6ic	",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["o5QO857GBeJ8kZEfVfe3d1o_f_BY","o5QO852vSY1gaLVcSIjqkjOkTzkw","o5QO85-0xQ86qrxZ6suY8cB_vDi0"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "江苏",
    // 所在城市
    city: "南京",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "小吴", "year": "2000", "date": "10-15", "type": 'new'},
      {"name": "小陈", "year": "1994", "date": "07-04", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2021-11-01",
    
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
