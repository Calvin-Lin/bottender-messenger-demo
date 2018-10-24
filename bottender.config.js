require('dotenv').config();

module.exports = {
  messenger: {
    accessToken: process.env.ACCESS_TOKEN,
    verifyToken: process.env.VERIFY_TOKEN,
    appId: process.env.APP_ID,
    appSecret: process.env.APP_SECRET,
    profile: {
      get_started: { payload: '__GET_STARTED__' },
      greeting: [
        {
          locale: 'default',
          text: 'Hi! {{user_full_name}}～',
        },
      ],
      persistent_menu: [
        {
          locale: 'default',
          composer_input_disabled: false,
          call_to_actions: [
            {
              title: '巢狀選單',
              type: 'nested',
              call_to_actions: [
                {
                  title: '優拓粉絲頁',
                  type: 'web_url',
                  url: 'https://www.facebook.com/Yoctol/',
                  webview_height_ratio: 'full',
                },
                {
                  title: '優拓職缺',
                  type: 'web_url',
                  url: 'https://www.yoctol.com/career',
                  webview_height_ratio: 'full',
                },
                {
                  title: 'Bottender',
                  type: 'web_url',
                  url: 'https://bottender.js.org/',
                  webview_height_ratio: 'full',
                },
              ],
            },
            {
              type: 'postback',
              title: '重新開始對話',
              payload: '__RESTART__',
            },
            {
              title: 'Powered by YOCTOL',
              type: 'web_url',
              url: 'https://www.yoctol.com/',
              webview_height_ratio: 'full',
            },
          ],
        },
      ],
      whitelisted_domains: ['https://www.yoctol.com', 'https://yoctol.com'],
    },
    fields: ['messages', 'messaging_postbacks'],
  },
};
