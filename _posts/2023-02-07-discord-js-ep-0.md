---
title: 使用 Discord.js v14 開發全能Discord機器人 | Ep.0 前置配備
author: winsonotp
date: 2023-02-07 19:32:00 +0800
categories: [教學]
tags: [Node.js, Discord.js]
---

> 這個系列會帶著您通過Node.js中的Discord.js套件，從0到1開始製作屬於自己的Discord機器人，希望可以幫助大家成為機器人的開發者哦！

## 前言
這篇文章將會讓您開始準備編寫機器人，並安裝所需的軟體，為開發機器人鋪路！
### Discord機器人是什麼？
Discord機器人讓使用者可以更加方便的使用Discord或是體驗到Discord不包含的功能，機器人將會以一個使用者的身分處於伺服器或是使用者的私訊中，姓名旁會標註「機器人」。常見的機器人功能包括：管理伺服器成員、在語音頻道撥放音樂、讓使用者玩到特色的小遊戲。

Discord機器人除了用Node.js開發以外，亦可使用Python、Java......，可以選擇自己熟悉的程式語言。

## 前備基礎
開始開發機器人前，建議先備下列能力之一：
1. 略懂JavaScript或Node.js
2. 熟悉其他程式語言（例如：Python、C#）

除此之外，開發機器人需要花費一定的精力，不免會遇到許多瓶頸、困難，我們平常所見到的機器人就算看起來功能簡單，也是通過開發者耗費心力編輯而成的。

## 程式編輯器
要開始製作機器人前，您需要一個用於編輯程式的程式編輯器，本系列文章所使用的為微軟開發的 [Visual Studio Code](https://code.visualstudio.com/)，亦可使用 [Atom](https://atom.io/) 或其他習慣的軟體。

### Visual Studio Code
![](https://i.imgur.com/CeklCm7.png)


* 由[微軟](https://www.microsoft.com/zh-tw)開發
* 支援Windows、Linux、macOS作業系統
* 支援偵錯、內建Git版本控制功能、同時也具有開發環境功能、支援用戶自訂組態（改變主題顏色、鍵盤捷徑等各種屬性和參數）、內建擴充程式管理功能
* 安裝網址：https://code.visualstudio.com/download

### Atom
![](https://i.imgur.com/E7p9ppk.png)

* 由[GitHub](https://github.com/)開發
* 支援Windows、Linux、macOS作業系統
* 具備智慧型自動完成功能、內建套件和佈景主題功能、強調極高自訂性
* 安裝網址：https://atom.io/

## Node.js
![](https://i.imgur.com/DMOzCa0.png)

Node.js能夠在伺服器端運行JavaScript，通過事件驅動、非阻塞和非同步輸入輸出模型等技術來提高效能，優化應用程式的傳輸量和規模，常用於資料密集的即時應用程式。

![](https://i.imgur.com/Ze5H0N3.png)

安裝Node的同時會附帶NPM（Node Package Manager），用於管理專案中的模組，通過簡單的指令即可安裝模組，也可以簡單的複製其他專案的模組。

Discord.js的機器人即是使用Node.js編寫，因此我們要安裝Node.js

* 原作者：瑞安·達爾、由[Node.js開發者](https://github.com/ry/node/blob/master/AUTHORS)、[Joyent](https://www.joyent.com/)及其他貢獻者開發
* 支援macOS、Linux、Windows、FreeBSD、OpenBSD作業系統
* 安裝網址：https://nodejs.org/zh-tw/download/

## 總結
這篇教學就到這裡結束，準備好前置的配備後，下篇教學就要開始邁入機器人開發囉！