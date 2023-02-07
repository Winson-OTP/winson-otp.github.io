---
title: 使用 Discord.js v14 開發全能Discord機器人 | Ep.1 建立機器人
author: winsonotp
date: 2023-02-07 19:42:00 +0800
categories: [教學]
tags: [Node.js, Discord.js]
---

> 這個系列會帶著您通過Node.js中的Discord.js套件，從0到1開始製作屬於自己的Discord機器人，希望可以幫助大家成為機器人的開發者哦！

## 前言
這篇文章將會帶著您在 [Discord Developer Portal](https://discord.com/developers/applications) 中建立自己的機器人，並邀請機器人進入自己的伺服器！

## 建立機器人
要建立一個機器人，需到 [Discord Developer Portal](https://discord.com/developers/applications) 網站
### Discord Developer Portal
![](https://i.imgur.com/r95gFVH.png)
* Discord開發者門戶網站
* 涵蓋 創建Discord機器人、建立Discord團隊、查看伺服器的分析資料 等功能
* https://discord.com/developers/applications

### Step. 1 創建機器人應用程式
進入 Discord Developer Portal 網站並點擊右上角的 `New Application`

![](https://i.imgur.com/tOaxvpi.png)

### Step. 2 設定機器人整合系統身分組名稱
在`NAME`輸入框中填入自己的機器人Application名稱，將會作為機器人的整合系統身分組名稱（之後可修改），機器人名稱將於稍後步驟設定，可與此名稱不同

![](https://i.imgur.com/Bt1Srzm.png)

### Step. 3 機器人應用程式相關設定
接下來您會來到到下圖的畫面

![](https://i.imgur.com/ZgtpoCx.png)

由上到下的功能分別是：

| 選項名稱                             | 說明                                                   |
| ------------------------------------ | ------------------------------------------------------ |
| APP ICON                             | 設定機器人應用程式的頭像                               |
| NAME                                 | 設定機器人的應用程式名稱(會成為機器人的整合系統身分組) |
| DESCRIPTION (MAXIMUM 400 CHARACTERS) | 設定機器人的說明(會成為機器人的關於我)                 |
| TAGS (MAXIMUM 5)                     | 機器人的標籤，最多五個                                 |
| APPLICATION ID                       | 應用程式的ID                                           |
| PUBLIC KEY                           | 機器人的公鑰                                           |
| INTERACTIONS ENDPOINT URL            | 設定機器人交互端點以通過HTTP POST來接收指令            |
| TERMS OF SERVICE URL                 | 機器人的服務條款網址                                   |
| PRIVACY POLICY URL                   | 機器人的隱私政策網址                                   |

其中 `APP ICON` 、 `NAME` 、 `DESCRIPTION` 以及 `TAGS` 可以依照個人情況決定是否填寫，其餘若不了解請忽略避免錯誤的設定造成之後的問題。

### Step. 4 建立機器人
接下來，切換到Bot頁面，點擊右上角的 `Add Bot` 建立機器人

![](https://i.imgur.com/dMMGb9V.png)

當網頁詢問 `ADD A BOT TO THIS APP?` （是否確定要於此應用程式建立機器人）時，點擊藍色的Yes, do it!

![](https://i.imgur.com/1DYNJVR.png)

### Step. 5 設定機器人相關資訊
此時我們已經成功創建屬於自己的機器人囉！您將會來到這個畫面

![](https://i.imgur.com/LgHqKOe.png)

由上到下的功能分別是：

| 選項名稱                   | 說明                                                   |
| -------------------------- | ------------------------------------------------------ |
| ICON                       | 設定機器人的頭像                                       |
| USERNAME                   | 設定機器人的使用者名稱                                 |
| TOKEN                      | 機器人的鑰匙                                           |
| PUBLIC BOT                 | 設定機器人是否公開，若取消勾選則只有自己可以邀請機器人 |
| REQUIRES OAUTH2 CODE GRANT | 設定機器人是否需要 OAUTH2 代碼授權                     |
| PRESENCE INTENT            | 設定機器人是否要獲取狀態意圖                           |
| SERVER MEMBERS INTENT      | 設定機器人是否要獲取伺服器成員意圖                     |
| MESSAGE CONTENT INTENT     | 設定機器人是否要獲取訊息內容意圖                       |
| Bot Permissions            | 可以通過勾選，查看指定權限組合的代碼                   |

**其中最重要的是TOKEN，是機器人的鑰匙，只要持有便可以控制機器人的功能或作為，務必謹慎保管不可洩漏，若洩漏務必按下Reset TOKEN，進行重設**

其中的 `ICON` 、 `USERNAME` 可以依照個人情況決定是否填寫，其餘若不了解請忽略。

## 邀請機器人
接下來我們要邀請機器人進入自己的伺服器，首先切換到OAuth2頁面中的URL Genarator

![](https://i.imgur.com/iUBvzEj.png)

SCOPES 建議填寫如下， `bot` 是指您創建的是機器人，而 `applications.commands` 是指機器人將可於伺服器執行或註冊斜線指令

![](https://i.imgur.com/HkPVKct.png)

而 BOT PERMISSIONS 則可依照希望製作的機器人功能進行填寫，若不清楚則建議給予「管理員（Administrator）」權限，以便之後功能皆可運行

![](https://i.imgur.com/izmphaD.png)

最後，您會看到下圖的區塊，點按 `Copy` 即可複製機器人的邀請連結

![](https://i.imgur.com/gMARwl0.png)

進入這個連結，您會看到下圖的畫面， `選擇伺服器` 的選單中可以選擇自己擁有管理權限的伺服器，並邀請機器人至該伺服器，選擇後請點擊繼續

![](https://i.imgur.com/oBExDyH.png)

下一步，您將會被詢問是否確定是否要在該伺服器給予機器人指定權限，若同意請按授權，網頁將會確認您是否為機器人，認證後即可完成邀請！

![](https://i.imgur.com/m59yFW9.png)

![](https://i.imgur.com/8jiSQbV.png)

完成！

![](https://i.imgur.com/BqgQMaz.png)


## 總結

這篇文章帶著大家創建了機器人並邀請，但目前機器人還是離線狀態，下一篇文章就會帶著各位讓機器人上線喔！