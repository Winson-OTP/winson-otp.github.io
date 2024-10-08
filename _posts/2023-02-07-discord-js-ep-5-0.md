---
title: 使用 Discord.js v14 開發全能Discord機器人 | Ep.5.0 關於指令「info」－前導與註冊指令
author: winsonotp
date: 2023-02-07 19:52:00 +0800
categories: [教學, 程式]
tags: [Node.js, Discord.js]
---

> 這個系列會帶著您通過Node.js中的Discord.js套件，從0到1開始製作屬於自己的Discord機器人，希望可以幫助大家成為機器人的開發者哦！

## 前言
這及教學將會帶著大家為機器人新增三個指令！分別是：

* bot-info
查看機器人的相關資料及資訊

* user-info
查看指定使用者的資訊

* server-info
查看伺服器的資訊

由於擔心篇幅太長造成學習效果不良，因此將每個指令分為單篇文章，請逐一觀看唷！

### 為什麼要製作這些指令呢？
製作機器人的初衷，無非就是為使用者提供一個更有趣、更多功能的Discord環境，而現今市面上的知名多功能機器人（例如：CarlBot、MEE6）、管理機器人，甚至是音樂機器人（例如：~~Groovy~~、~~Rythm~~），幾乎都包含info指令。

*Note: Groovy和Rythm機器於近年相繼停止運作，詳細原因會於另外的文章進行敘述*

**但是通過Discord不就可以直接看到使用者、伺服器等等的資訊了嗎？**
是的，但有些資訊難以取得甚至是無法取得，譬如說第一集中的「取得伺服器ID」用來作為註冊指令的資料，便需要從設定一步步開啟「開發者模式」，一般的使用者若要查看不一定會知道需開啟該功能。

除此之外還有一個或許許多使用者好奇的資訊：「帳號創建的時間」，目前以知直接從Discord似乎沒有途徑獲取。這些資訊通過機器人皆可通過一個指令，耗費不到一秒的時間獲得！

綜上所述，讓我們開始製作吧！

## 目錄
### bot-info
> 文章標題：使用 Discord.js v14 開發全能Discord機器人 | Ep.5.1 關於指令「info」－機器人資訊
> 文章連結：https://hackmd.io/@winsonOTP/discord-js-v14-ep5-1

### user-info
> 文章標題：使用 Discord.js v14 開發全能Discord機器人 | Ep.5.2 關於指令「info」－使用者資訊
> 文章連結：https://hackmd.io/@winsonOTP/discord-js-v14-ep5-2

### server-info
> 文章標題：使用 Discord.js v14 開發全能Discord機器人 | Ep.5.3 關於指令「info」－伺服器資訊
> 文章連結：https://hackmd.io/@winsonOTP/discord-js-v14-ep5-3

## 註冊指令
在此將會先帶著各位註冊這三個指令，方便接下來的文章進行：

註冊指令同樣會用到先前製作的 `deploy.js` ，請先開啟。

由於前篇文章註冊ping指令的部分以及官方範例講解已經詳細解釋註冊指令的程式，因此在此不會對程式碼多做闡述

在註冊程式碼的程式中對於 `commands` 陣列中加上三個新的物件，`name` 是指令名稱，`decription` 請自行設置說明文字

```javascript
......前段省略
const commands = [
  {
    name: 'ping',
    description: '得知機器人的延遲資訊',
  },
  {
    name: 'bot-info',
    description: '查看機器人的相關資料及資訊',
  },
  {
    name: 'user-info',
    description: '查看指定使用者的資訊',
  },
  {
    name: 'server-info',
    description: '查看伺服器的資訊',
  }
];
後段省略......
```
存檔後於終端機輸入此指令運行，即可成功註冊指令
```
node deploy.js
```

*Note: 是否注意到每篇文章運行前都強調要先存檔？存檔在程式設計中是非常重要的一環，若不存檔就運行可能會運行前次存檔的版本，需特別注意。*

註冊後就可以在Discord中找到指令囉，若成功註冊但未看到可能是由於延遲問題，等待一段時間後即可！
## 總結
此篇文章先帶著各位註冊了斜線指令，若要查看指令的教學請參照目錄的各篇文章唷！
