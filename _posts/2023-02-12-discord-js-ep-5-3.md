---
title: 使用 Discord.js v14 開發全能Discord機器人 | Ep.5.3 關於指令「info」－伺服器資訊
author: winsonotp
date: 2023-02-12 00:30:00 +0800
categories: [教學, 程式]
tags: [Node.js, Discord.js]
---

> 這個系列會帶著您通過Node.js中的Discord.js套件，從0到1開始製作屬於自己的Discord機器人，希望可以幫助大家成為機器人的開發者哦！

## 前言
時隔六個月，筆者決定繼續來更新這個系列的文章。主要是因為過了這半年多的時間，仍然發現網路上的Discord.js v14教學不多，並且自己的文章也得到越來越多的迴響，決定藉此機會繼續更新，帶給大家更豐富的教學！

今天這篇文章將會帶著大家為Discord.js的機器人製作一個指令： `server-info`，用於得知伺服器的相關資訊，讓我們開始實作吧！

## 指令構想
在製作`server-info`指令前，先來構想一下指令的相關架構：
### 指令名稱
如上述，使用 `server-info` 作為指令的名稱，簡短且方便辨識。
### 指令說明
在前導文章曾經提到，將使用「查看伺服器的資訊」作為其說明文字。

### 指令用途
指令的用途是在使用者使用時，回傳當前伺服器的相關資料和資訊。
### 回應內容
那接下來就來確定要加上的資料有哪些吧！
#### 靜態資訊（不會隨時間改變的資訊）：
- 伺服器名稱
- 伺服器ID
- 伺服器創建的時間
- 伺服器簡介
- 伺服器擁有者
- ~~伺服器頭像~~（將會等講解嵌入後再教學）

#### 動態資訊（會隨著時間或其他因素改變）：
- 伺服器人數

這次的資料內容與上一篇文章的類似，並且有了更多資料。

### 其他功能
目前此指令只是一個單純的server-info指令，因此尚無其他功能。

## 指令製作
接下來要正式開始製作指令的程式碼囉，將會修改到機器人的主程式 `index.js`：
```js
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

  if (interaction.commandName === 'user-info') {
    interaction.reply(
      `使用者名稱：${interaction.user.username}\n`+
      `使用者ＩＤ：${interaction.user.id}\n`+
      `使用者創建時間：<t:${~~(interaction.user.createdTimestamp/1000)}:R>\n`+
      `是否為機器人：${interaction.user.bot? '是':'否'}\n`
    )
  }
});
後段省略......
```

### 資料獲取
首先，我們先一個一個了解資料該如何取得，並且在後續整理為完整的程式碼。在許多資料的獲取方式中，我們會看到 `interaction.guild` 這個物件，這個物件會指向指令所使用所處在的伺服器，因此在此將多次使用到這個物件。接下來讓我們來獲取資料吧！

#### 伺服器名稱
獲取方式如下：
```js
interaction.guild.name
```

#### 伺服器ID
獲得方式如下：
```js
interaction.guild.id
```

#### 伺服器創建的時間
獲得的方式如下：
```js
interaction.guild.createdTimestamp
```
但是通過這種方式獲得的內容將會是一串數字，也就是時間戳記，難易閱讀，因此需要經過處理：
```js
`<t:${~~(iinteraction.guild.createdTimestamp/1000)}:R>`
```
這樣我們就可以以正常的時間標示格式來檢視伺服器的建立時間囉！

#### 伺服器簡介
伺服器的簡介獲取方式如下，為了避免該伺服器沒有簡介，我們使用 `??` 讓其在簡介不存在時顯示為無
```js
interaction.guild.description ?? "無"
```

#### 伺服器擁有者
伺服器的擁有者獲取後將會以id方式傳回，因此我們使用 `<@` 和 `>` 包裹讓他會顯示為標記的使用者。
```js
`<@${interaction.guild.ownerId}>`
```

#### 伺服器人數
伺服器的人數會數字方式傳出，為了讓其成為字串，我們使用 \` 將其包住：
```js
`${interaction.guild.memberCount}`
```

### 整理為程式碼
接下來，我們將上述資訊整理為程式碼來運行：
```js
......前段省略
  if (interaction.commandName === 'server-info') {
    interaction.reply(
      `伺服器名稱：${interaction.guild.name}\n` +
      `伺服器ＩＤ：${interaction.guild.id}\n` +
      `伺服器創建時間：<t:${~~(interaction.guild.createdTimestamp/1000)}:R>\n` +
      `伺服器簡介：${interaction.guild.description ?? "無"}\n` + 
      `伺服器擁有者：<@${interaction.guild.ownerId}>\n` +
      `伺服器人數：${interaction.guild.memberCount}\n`
    )
  }
後段省略......
```

將此檔案存檔後執行：

```
node index.js
```

到Discord就可以使用指令囉！

![](https://i.imgur.com/C8NBoGx.png)

這樣第五集的所有分支文章就完結囉！

## 總結
以上就是這篇文章的所有內容囉！也感謝您用心閱讀完畢了這篇文章。之後的文章，由於指令數量愈來愈多，會先以指令各自分檔案的教學為優先，除此之外也會介紹各種大大小小的功能，引導大家更深入Discord.js套件唷！

謝謝您的閱讀，我們下篇文章再見囉！