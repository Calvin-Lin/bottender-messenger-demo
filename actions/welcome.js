const B = require('bottender-compose');

module.exports = B.series([
  B.sendImage('https://www.yoctol.com/images/case_yoctol.png'),
  B.sendText('歡迎光臨 :)'),
  B.sendButtonTemplate(
    '需要什麼服務呢？',
    [
      {
        type: 'postback',
        title: 'Bottender 相關',
        payload: '__BOTTENDER__',
      },
      {
        type: 'web_url',
        title: '優拓官網',
        url: 'https://www.yoctol.com',
      },
    ],
    {
      quick_replies: [
        {
          content_type: 'text',
          title: '我想加入優拓',
          payload: '__JOIN_YOCTOL__',
        },
      ],
    }
  ),
]);
