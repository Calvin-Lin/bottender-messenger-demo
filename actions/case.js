const B = require('bottender-compose');

module.exports = B.series([
  B.sendText('以下是優拓的機器人案例'),
  B.sendGenericTemplate(
    [
      {
        title: '優拓資訊',
        image_url: 'https://www.yoctol.com/images/case_yoctol.png',
        subtitle: '優拓官方客服機器人',
        buttons: [
          {
            type: 'web_url',
            title: '立即體驗',
            url: 'https://m.me/Yoctol',
            webview_height_ratio: 'full',
          },
        ],
      },
      {
        title: '富蘭克林投顧',
        image_url: 'https://www.yoctol.com/images/case_franklin.jpg',
        subtitle: '兼具查詢基金資訊功能的智能客服',
        buttons: [
          {
            type: 'web_url',
            title: '立即體驗',
            url: 'https://m.me/franklin.taiwan',
            webview_height_ratio: 'full',
          },
        ],
      },
      {
        title: 'abc 好車網',
        image_url: 'https://www.yoctol.com/images/case_abccar.jpg',
        subtitle: '能用自然語言找車的功能型機器人',
        buttons: [
          {
            type: 'web_url',
            title: '立即體驗',
            url: 'https://m.me/abccar.tw',
            webview_height_ratio: 'full',
          },
        ],
      },
    ],
    { image_aspect_ratio: 'horizontal' }
  ),
]);
