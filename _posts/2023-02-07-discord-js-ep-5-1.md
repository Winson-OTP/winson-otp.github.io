---
title: 使用 Discord.js v14 開發全能Discord機器人 | Ep.5.1 關於指令「info」－機器人資訊
author: winsonotp
date: 2023-02-07 19:54:00 +0800
categories: [教學, 程式]
tags: [Node.js, Discord.js]
---

> 這個系列會帶著您通過Node.js中的Discord.js套件，從0到1開始製作屬於自己的Discord機器人，希望可以幫助大家成為機器人的開發者哦！

## 前言
這篇文章會帶著大家製作一個指令：bot-info，用途是查看機器人的相關資訊，指令註冊的部分已經在Ep.5.0指導過，若還沒看過的可以先行前往閱讀唷！

## 指令構想
要製作一個新的指令之前，第一步便是構想指令的大致架構，在此分為以下五項：
1. 指令名稱
2. 指令說明
3. 指令用途
4. 回應內容
5. 其他功能

前兩項是在輸入斜線 (/) 時使用者會看到的資訊，通常會讓使用者對於指令的用途和用法一目了然。

而第三～五項是協助您設計指令的程式，讓您有明確的方向製作並供使用者使用。
### 指令名稱
指令名稱已經提及，是bot-info，當然您也可以自行設計名稱，但要注意指令的註冊和回應偵測需使用同樣的名稱，否則會發生錯誤。
### 指令說明
指令是用來得知機器人的相關資訊的，因此我在此使用簡短的文字：「查看機器人的相關資料及資訊」來帶領使用者了解此指令。
### 指令用途
如上所述，指令是用來了解機器人的相關資訊，因此我們在製作或構想時須朝此方向，若偏離太多會導致使用者使用時感到困惑或混亂。
### 回應內容
回應的內容是一大重點，讓我們來構思機器人會有哪些相關資訊：
#### 靜態資訊（不會隨時間改變的資訊）：
* 機器人名稱
* 機器人ID
* 機器人製作者
* 機器人的建立時間
* 機器人邀請連結
#### 動態資訊（會隨著時間或其他因素改變）：
* 機器人的版本
* 機器人所在的伺服器數量
* 機器人上線的時間

順帶一提，在製作指令時不知從何下手時，可以從官方指令翻閱相關內容

#### Discord.js Documentation

![](https://i.imgur.com/FELL998.png)

* 由Discord.js貢獻者與開發者製作
* 用於查詢Discord.js相關函式的用法或是相關資料，可以協助開發。
* 網址：https://discord.js.org/#/docs

### 其他功能
目前的指令上不需要其他功能，因此此部分先省略！
## 指令製作
想好架構了，那就開始製作指令吧，一樣會使用到機器人的主程式 `index.js`：
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
在偵測指令名稱的區域中新增一個判斷式，判斷指令名稱為bot-info的指令

```javascript=11
......前段省略
  if (interaction.commandName === 'ping') {
    const msg = await interaction.reply({
      content: "正在計算延遲......",
      fetchReply: true
    });
    
    const ping = msg.createdTimestamp - interaction.createdTimestamp;
      
    interaction.editReply(`機器人延遲：${ping} ms\nＡＰＩ延遲：${client.ws.ping} ms`) 
  }

  if (interaction.commandName === 'bot-info') {
      
  }
});
後段省略......
```
接下來，我們要撰寫的程式都會在此判斷式中
```javascript=22
......前段省略
  if (interaction.commandName === 'bot-info') {
    
  }
後段省略......
```
既然知道了要找的資訊，那就先來一個一個知道獲取的方法吧！
### 資料獲取
#### 機器人名稱
獲得機器人使用者名稱的方法如下
```javascript
client.user.username
```
ClientUser是指目前登入的客戶端，而username是用於獲取其使用者名稱
#### 機器人ID
機器人ID的獲取方法如下
```javascript
client.user.id
```
同樣是從ClientUser獲得，id即是機器人的ID，和先前複製的ClientID相同
#### 機器人製作者
機器人的製作者建議自行以字串方式填入，在此不多做說明
#### 機器人的建立時間
獲得機器人的建立時間方式如下
```javascript
client.user.createdTimestamp
```
`Timestamp` 是指時間戳記，此處獲得的時間戳記是「以毫秒表示從格林威治標準時間的西元1970年1月1日經過了多少時間」，將會是一串數字，那要如何轉換成~~人話~~呢？

首先，雖然從Discord獲得的為毫秒時間戳記，但用於表示的需使用秒的時間戳記，因此我們先將其除以1000轉換為秒
```javascript
client.user.createdTimestamp/1000
```
接下來，用Discord的時間表示格式進行處理
```javascript
`<t:${client.user.createdTimestamp/1000}:R>`
```
~~但現在還是顯示不出來唷！~~
因為我們現在得到的是一個小數，Discord要求的是一個整數，因此我們使用「\~\~」來將其四捨五入
```javascript
`<t:${~~(client.user.createdTimestamp/1000)}:R>`
```
這樣就得到了一個在Discord會顯示為時間的字串囉！
#### 機器人邀請連結
機器人的邀請連結請從邀請機器人的篇章獲取，將其以字串方式表示，在此補充讓其顯示為文字（超連結）的方法
```javascript
'[要顯示的文字填寫在中括號中](要連結到的網址填在小括號中)'
```
這是一種Markdown的語法，詳細內容可以自行搜尋
#### 機器人的版本
機器人的版本也可以自行以字串方式添加，順便在此介紹版本號碼的一種標準格式

`major`.`minor`.`build`

三個英語單字分別代表一個數字，中間以小數點分隔。
major：在有大型更動時進行變更
minor：在有較大更動但不至於major時變更
build：在有小型更動（像是修正錯誤）時變更

以下是一個維基百科擷取的例子：`1.0`→`1.0.1`→`1.0.2`→`1.1`→`1.1.1`→`2.0`→`2.1`→`2.1.1`→`3.0`
#### 機器人所在的伺服器數量
機器人所在的伺服器數量獲取方式如下
```javascript
client.guilds.cache.size
```
會獲得機器人所在伺服器數量的數字
#### 機器人上線的時間
接下來，獲得機器人上線時間的方式如下（此處指機器人此次上線持續運行的時間）
```javascript
client.uptime
```
將會獲取機器人上線後經過了「幾毫秒」，讓我們來將其~~再次~~轉換為~~人話~~吧！

我們的目標為讓其轉換為HH:MM:SS，也就是時：分：秒的格式，因此我們來建立一個函式，用於執行此功能
```javascript
function msToHMS(ms) {
  let seconds = ms / 1000; //將毫秒轉換為秒
  const hours = parseInt( seconds / 3600 ); //將可以轉為小時的秒轉換為小時
  seconds = seconds % 3600; //去除已轉換為小時的秒
  const minutes = parseInt( seconds / 60 ); //將可以轉為分鐘的秒轉換為分鐘
  seconds = seconds % 60; //去除已轉換為分鐘的秒
  return(`${hours}:${minutes}:${~~(seconds)}`); //回傳轉換後的結果，秒數進行四捨五入
}
```
建議將此函式放到所有程式的最後方（CLIENT.LOGIN後
），方便程式碼的閱讀與整理

這時，我們將剛剛的毫秒uptime丟到裡面進行處理
```javascript
msToHMS(client.uptime)
```
就可以得到我們想要的結果（字串型別）囉！
### 整理為程式碼
接下來，我們將剛剛所獲得的資訊整理到程式碼中吧！
```javascript=22
......前段省略
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
後段省略......
```
此時可以存檔後執行程式碼，並到Discord輸入指令試看看
```
node index.js
```
![](https://i.imgur.com/cPxMP1Z.png)

此時可以看到剛剛的成果出現囉！關於將其美化為嵌入訊息，會在之後的文章進一步說明。

## 總結
此篇文章帶著大家製作了bot-info指令，並加上了許多相關資料，希望對大家有幫助，盡情期待下一篇文章吧，掰掰！