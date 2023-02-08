---
title: 使用 Discord.js v14 開發全能Discord機器人 | Ep.3 機器人狀態
author: winsonotp
date: 2023-02-07 19:48:00 +0800
categories: [教學, 程式]
tags: [Node.js, Discord.js]
---

> 這個系列會帶著您通過Node.js中的Discord.js套件，從0到1開始製作屬於自己的Discord機器人，希望可以幫助大家成為機器人的開發者哦！

## 前言
這篇教學將會帶著大家設定機器人的狀態，以及狀態消息。


## 上篇回顧
此篇教學將會用到上篇所介紹的官方範例， `index.js` 機器人主程式
```javascript=
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login('token');
```
請開啟前一篇文章所完成的這個檔案後，再繼續進行後續步驟

## 狀態設置
首先，先進行一個小小的互動，請問各位覺得若要讓機器人一啟動就設置狀態，程式要寫在哪裡呢？
> (A) 機器人啟動成功時（onReady）
> (B) 指令創建時（onInteractionCreate）
> (C) 程式碼第一行

答案是A，你答對了嗎？
B選項沒辦法在機器人一啟動就執行，要等到指令發送才可以
而C選項會在client被定義前就進行狀態設置，會發生錯誤喔！

接下來要進入正題囉！來設置機器人的狀態吧
如上所述，今天的狀態設置只會使用到機器人啟動成功時（onReady）的事件，因此只會改變到這段程式喔～

```javascript
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
```

### Step. 1 開啟index.js
雖然前面已經提過，但再次提及，第一步先開啟上篇文章製作的index.js檔案，並找到這段程式

```javascript=4
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
```

### Step. 2 設定狀態
機器人的狀態分為：「狀態」以及「行為」

首先，我們先來設定狀態

狀態是指機器人的「在線、閒置、請勿打擾、離線、直播」（直播為機器人特有的狀態，一般使用者無法選擇）

下圖為一般使用者的狀態列表

![](https://i.imgur.com/DsNhdIr.png)

*NOTE: 機器人不論為任何狀態，只要程式正在運行皆可正常回覆訊息或運作*

設置狀態的方法是通過 `client.user.setStatus()` 函數，而括號內要填入的是字串，可以是：`online`(在線) / `idle`(閒置) / `dnd`(請勿打擾) / `invisible`(離線)
```javascript=3
......前段省略
client.on('ready', () => {
  client.user.setStatus('online'); //設置狀態為在線
  client.user.setStatus('idle'); //設置狀態為閒置
  client.user.setStatus('dnd'); //設置狀態為請勿打擾
  client.user.setStatus('invisible'); //設置狀態為離線（隱形）
  console.log(`Logged in as ${client.user.tag}!`);
});
後段省略......
```
上述程式碼中的四行 `client.user.setStatus` 分別是設置機器人的四種狀態，僅需選擇一種即可，例如：若要設置為線上，即如下設置
```javascript=3
......前段省略
client.on('ready', () => {
  client.user.setStatus('online'); //設置狀態為在線
  console.log(`Logged in as ${client.user.tag}!`);
});
後段省略......
```


### Step. 3 設定行為
設置完狀態後，便要開始設置機器人的行為囉！

行為是指機器人狀態文字的前綴，包括「正在玩、正在聽、正在看、競爭、正在直播......」目前機器人尚無法進行自訂行為

設置機器人的行為需要先修改機器人的第一行程式碼，讓從discord.js中引入的套件加上 `ActivityType`

```diff
- const { Client, GatewayIntentBits } = require('discord.js');
+ const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
```
接著便可以設置機器人的行為
```javascript=3
......前段省略
client.on('ready', () => {
  client.user.setActivity('前綴後面的文字', { type: ActivityType.Watching }); //將機器人的行為設置為正在看
  client.user.setActivity('前綴後面的文字', { type: ActivityType.Listening }); //將機器人的行為設置為正在聽
  client.user.setActivity('前綴後面的文字', { type: ActivityType.Streaming }); //將機器人的行為設置為正在直播
  client.user.setActivity('前綴後面的文字', { type: ActivityType.Playing }); //將機器人的行為設置為正在玩
  client.user.setActivity('前綴後面的文字', { type: ActivityType.Competing }); //將機器人的行為設置為競爭
  console.log(`Logged in as ${client.user.tag}!`);
});
後段省略......
```
同樣僅須擇一行為設置即可，需要注意的是正在直播的文字需填直播連結(twitch)，例如：要設置為正在玩iTHome，則如下設置

```javascript=3
......前段省略
client.on('ready', () => {
  client.user.setActivity('iTHome', { type: ActivityType.Playing }); //將機器人的行為設置為正在玩iTHome
  console.log(`Logged in as ${client.user.tag}!`);
});
後段省略......
```

### Step. 2~3 同時設置狀態與行為
覺得狀態和行為分開設置很麻煩嗎？當然也可以在同一行進行設置喔！但目前已知僅能設置「正在玩」

設置方式如下
```javascript=3
client.user.setPresence({ activities: [{ name: '行為後的文字' }], status: 'idle' });
```

`status: 'idle'` 中的idle可以如剛剛設置狀態一樣替換為其他狀態，而 `activities: [{ name: '正在玩後面的文字' }]` 可以在name欄位中填入要設置的文字

### Step. 4 重新啟動
*NOTE: 機器人每次程式碼修改都需要重新啟動，若要中止正在運行的機器人請在控制台按下`Ctrl` + `C`*

重新啟動index.js程式碼之後就成功囉！
啟動指令是在終端機輸入
```
node index.js
```

成功設置機器人狀態了耶！

![](https://i.imgur.com/XvszEsW.png)


## 總結
此篇文章我們帶著大家設置了機器人的狀態，恭喜您可以讓機器人改變成自己想要的狀態囉，下篇文章再見囉，掰掰！