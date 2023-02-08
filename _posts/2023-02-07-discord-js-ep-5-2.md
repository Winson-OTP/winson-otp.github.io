---
title: 使用 Discord.js v14 開發全能Discord機器人 | Ep.5.2 關於指令「info」－使用者資訊
author: winsonotp
date: 2023-02-07 19:55:00 +0800
categories: [教學, 程式]
tags: [Node.js, Discord.js]
---

> 這個系列會帶著您通過Node.js中的Discord.js套件，從0到1開始製作屬於自己的Discord機器人，希望可以幫助大家成為機器人的開發者哦！

## 前言
此篇文章將會帶著各位為自己的Discord.js機器人製作一個指令：user-info，用於獲得使用者的資料，指令註冊的部分已在前導文章完成囉！若需要的話可以先行前往閱讀。 

## 指令構想
### 指令名稱
指令名稱在此設定為user-info，亦可以自行設定名稱。

*Note: 指令的註冊和回應偵測需使用同樣的名稱，否則會發生錯誤。*

### 指令說明
指令是用於得知使用者的相關資料，在此使用「查看指定使用者的資訊」來作為指令的說明文字。

### 指令用途
綜上所述，指令是用來了解使用者的相關資訊，因此我們在製作或構想時須朝此方向，若偏離太多會導致使用者使用時感到困惑或混亂。

### 回應內容
讓我們來構思並列出一個使用者會有哪些相關資訊：

#### 靜態資訊（不會隨時間改變的資訊）：
* 使用者名稱
* 使用者ID
* 使用者創建的時間
* 使用者是否是機器人
* ~~使用者頭像~~（將會等講解嵌入後再教學）

#### 動態資訊（會隨著時間或其他因素改變）：
* ~~想不到~~

可以注意到這次的資訊和機器人資訊不同，這次幾乎沒有動態的資料？
因為使用者基本上~~屬於一個比較穩定的實體~~，沒有啟動的時間、版本號碼等資訊。

之所以加上是否為機器人，是因為我們之後會將此指令做為可以「查看指定使用者的資料」，而非只有自己。

### 其他功能
目前此指令只是一個單純的user-info指令，因此尚無其他功能。

## 指令製作
接下來要開始製作指令囉，將修改機器人的主程式 `index.js`：
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

  if (interaction.commandName === 'bot-info') {
    interaction.reply(
      `機器人名稱：${client.user.username}\n`+
      `機器人ＩＤ：${client.user.id}\n`+
      `機器人製作者：自行填寫\n`+
      `機器人建立時間：<t:${~~(client.user.createdTimestamp/1000)}:R>\n`+
      `機器人邀請連結：自行填寫\n`+
      `機器人版本：自行填寫\n`+
      `機器人所在伺服器數量：${client.guilds.cache.size}\n`+
      `機器人上線時間：${msToHMS(client.uptime)}`
    )
  }
});
後段省略......
```
首先，新增一個用於判斷指令的判斷式，用來處理user-info指令
```javascript=35
......前段省略
  if (interaction.commandName === 'user-info') {
    
  }
後段省略......
```
接下來就要進入正題囉！

### 資料獲取
首先，先了解各個資料的獲取方式，由於我們要取得資訊的是使用指令的使用者，因此之後有許多資料都會以 `interaction` 開頭，例如：`interaction.user` 即為指令的使用者
#### 使用者名稱
獲取方法如下：
```javascript
interaction.user.username
```
#### 使用者ID
獲得的方法如下：
```javascript
interaction.user.id
```
#### 使用者創建的時間
要獲得使用者創建時間的方式如下，和前篇文章bot-info的機器人創建時間相同，會以毫秒時間戳記，因此需要進行轉換，方式與上篇文章相同因此不多做論述：

原始型態
```javascript
interaction.user.createdTimestamp
```
處理後的Discord時間戳記型態
```javascript
`<t:${~~(interaction.user.createdTimestamp/1000)}:R>`
```
#### 使用者是否是機器人
得知方法如下（將會傳出布林值）：
```javascript
interaction.user.bot
```
為了方便辨識，在此轉換為字串
```javascript
interaction.user.bot? '是':'否'
```
此用法將會判斷判斷式是否成立，若成立則回傳冒號左側的值，否則回傳右側的值。

### 整理為程式碼
接下來，就要整理成程式碼放入程式中囉！
```javascript=35
......前段省略
  if (interaction.commandName === 'user-info') {
    interaction.reply(
      `使用者名稱：${interaction.user.username}\n`+
      `使用者ＩＤ：${interaction.user.id}\n`+
      `使用者創建時間：<t:${~~(interaction.user.createdTimestamp/1000)}:R>\n`+
      `是否為機器人：${interaction.user.bot? '是':'否'}\n`
    )
  }
後段省略......
```
存檔後執行
```
node index.js
```
到Discord執行程式碼即可正常使用指令囉！

![](https://i.imgur.com/7Pn3v8j.png)

成功囉！
之後會找機會帶著各為讓此訊息變成更加美觀的「嵌入訊息」，請拭目以待吧！

## 總結
此篇文章帶著大家製作了user-info指令，並告訴各位許多相關資料的獲取方法，希望可以對於大家開發機器人提供協助，下篇文章再見囉，掰掰！