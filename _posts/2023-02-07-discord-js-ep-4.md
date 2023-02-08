---
title: 使用 Discord.js v14 開發全能Discord機器人 | Ep.4 查看延遲「ping」
author: winsonotp
date: 2023-02-07 19:50:00 +0800
categories: [教學, 程式]
tags: [Node.js, Discord.js]
---

> 這個系列會帶著您通過Node.js中的Discord.js套件，從0到1開始製作屬於自己的Discord機器人，希望可以幫助大家成為機器人的開發者哦！

## 前言
這篇教學將會帶著大家為機器人新增一個指令：

* ping
查看機器人延遲數值

### 為什麼要知道機器人的延遲數值呢？
1. 方便使用者了解機器人目前的運行狀況，在遇到使用上的狀況時也可以知道是否是因為延遲過高而造成的。
2. 方便製作者除錯，機器人的製作者得到了機器人的延遲，同樣可以了解自己的機器人當前的運行情形，也可以知道機器人是否適合在當前的環境運行。

## 前置工作
這篇文章的工作會編寫到 `index.js` 以及 `deploy.js` 分別用於執行機器人以及註冊指令。

## 註冊指令 deploy.js

```javascript=2
......前段省略
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];
後段省略......
```

首先，要製作 `deploy.js`－註冊斜線指令，由於我們所使用的官方範例已經有註冊一個指令叫做「ping」，因此我們只要修改他的敘述即可，將 `description: 'Replies with Pong!'` 的引號中改為您想為這個指令設置的資訊，例如：

```javascript=2
......前段省略
const commands = [
  {
    name: 'ping',
    description: '得知機器人的延遲資訊',
  },
];
後段省略......
```
編寫完後存檔，並在控制台輸入以下指令執行程式碼：
```
node deploy.js
```
等待運作完成且控制台顯示如下後，即完成註冊指令！

![](https://i.imgur.com/8OXL9Ra.png)

此時到Discord輸入斜線 (/) 會發現機器人的 `ping` 指令的敘述已經成功修改（倘諾未出現可能是延遲問題，稍待片刻即可）

![](https://i.imgur.com/M9Eok1r.png)

## Ping 延遲查看
接下來，就可以開始編寫程式囉！要編寫的是機器人主程式 `index.js` 的 onInteractionCreate 事件
```javascript=8
......前段省略
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});
後段省略......
```
這裡也已經有了偵測ping使用的事件，因此我們直接對裡面的內容進行修改即可！

機器人的延遲分為「機器人延遲」以及「API延遲」，機器人延遲為機器人對於指令處理的延遲，而api延遲是官方Discord API的延遲數值，皆以毫秒(ms)顯示

*Note: 1000毫秒 = 1秒*

###  機器人延遲
首先，我們先讓機器人回應機器人延遲，獲得方式如下（解釋皆以註解方式寫在程式碼中，`//` 後的文字可以刪除或修改）：
```javascript
//對使用者進行回應，告訴使用者我們正在測量延遲，同時讓此訊息用於計算機器人回應的延遲時間
const msg = await interaction.reply({
    content: "正在計算延遲......", //設定訊息的內容
    fetchReply: true //告訴API我們將會對這個指令做出進一步的回應
});
//將ping變數設定為「成功回應的時間」與「指令發送的時間」之間隔
const ping = msg.createdTimestamp - interaction.createdTimestamp;
```
將其套用到我們的程式碼即為如此：
```javascript=8
......前段省略
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    const msg = await interaction.reply({
      content: "正在計算延遲......",
      fetchReply: true
    });
    
    const ping = msg.createdTimestamp - interaction.createdTimestamp;
      
    interaction.editReply(`機器人延遲：${ping} ms`) 
    //editReply是指修改回覆，使用此函數是因為我們先前已經發送過指令，若用reply會發生錯誤
  }
});
後段省略......
```
*Note: 兩個\`中包住的字串，可以放入${}，大括號中包入變數或函數，顯示出的即為該值*

將此段程式碼存檔後運行
```
node index.js
```
等待準備好開始運行後，至Discord輸入指令，即可獲得機器人的延遲！

![](https://i.imgur.com/fsmYR01.png)

![](https://i.imgur.com/Aqme2rZ.png)

### API延遲
接著，要得知的是API延遲，方式如下：
```javascript
client.ws.ping
```

比剛剛的機器人延遲簡單了許多，直接將其套入到程式碼中：

```javascript=8
......前段省略
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    // 機器人延遲獲取
    const msg = await interaction.reply({
      content: "正在計算延遲......",
      fetchReply: true
    });
    
    const ping = msg.createdTimestamp - interaction.createdTimestamp;
      
    // 告知用戶延遲
    interaction.editReply(`機器人延遲：${ping} ms\nＡＰＩ延遲：${client.ws.ping} ms`) 
    // \n 是指換行
  }
});
後段省略......
```

存檔後重新啟動就完成囉！
再次使用指令（兩指令的時間隔了四分鐘，是筆者因為方便截圖，實際運行不會唷！）：

![](https://i.imgur.com/WoOad6a.png)

![](https://i.imgur.com/Xfmww1X.png)


## 總結
### 此篇成品
```javascript=8
......前段省略
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    const msg = await interaction.reply({
      content: "正在計算延遲......",
      fetchReply: true
    });
    
    const ping = msg.createdTimestamp - interaction.createdTimestamp;
      
    interaction.editReply(`機器人延遲：${ping} ms\nＡＰＩ延遲：${client.ws.ping} ms`) 
  }
});
後段省略......
```

這篇文章帶著大家製作了我們的第一個手作指令：ping，希望這篇教學可以幫助到您！下篇文章再見囉，掰掰～