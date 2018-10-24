require('dotenv').config();

const B = require('bottender-compose');
const { MessengerBot, MongoSessionStore } = require('bottender');
const { createServer } = require('bottender/express');

const yoctolCase = require('./actions/case');
const config = require('./bottender.config.js').messenger;
const welcome = require('./actions/welcome');

const bot = new MessengerBot({
  accessToken: config.accessToken,
  appSecret: config.appSecret,
  verifyToken: config.verifyToken,
  sessionStore: new MongoSessionStore(
    'mongodb://localhost:27017/bottender-messenger-demo'
  ),
});

bot.setInitialState({ quiet: false });

bot.onEvent(
  B.condition([
    [B.isPayloadMatch('__GET_STARTED__'), welcome],
    [B.isPayloadMatch('__RESTART__'), B.series([B.resetState(), welcome])],
    [
      B.isTextMatch('講話'),
      B.series([
        B.setState({ quiet: false }),
        B.sendText('呼，終於可以講話了'),
      ]),
    ],
    [B.hasStateEqual('quiet', true), B.sendText('...')],
    [
      B.isTextMatch('安靜'),
      B.series([B.setState({ quiet: true }), B.sendText('好，我閉嘴')]),
    ],
    [
      B.isPayloadMatch('__BOTTENDER__'),
      B.sendButtonTemplate('以下是 Bottender 的相關資源', [
        {
          type: 'web_url',
          title: 'Bottender 官網',
          url: 'https://bottender.js.org/',
          webview_height_ratio: 'full',
        },
        {
          type: 'web_url',
          title: 'Bottender Github',
          url: 'https://github.com/Yoctol/bottender',
          webview_height_ratio: 'full',
        },
      ]),
    ],
    [
      B.isPayloadMatch('__JOIN_YOCTOL__'),
      B.sendButtonTemplate(
        '歡迎寄信至 jobs@yoctol.com 應徵，查看職缺內容請點下方按鈕',
        [
          {
            type: 'web_url',
            title: '優拓職缺',
            url: 'https://www.yoctol.com/career',
            webview_height_ratio: 'full',
          },
        ]
      ),
    ],
    [B.isTextMatch(/優拓.*案例/), yoctolCase],
    [
      context => true,
      B.random([B.sendText('我聽不懂這句'), B.sendText('我不知道該怎麼回')]),
    ],
  ])
);

const server = createServer(bot);

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`server is running on ${port} port...`);
});
