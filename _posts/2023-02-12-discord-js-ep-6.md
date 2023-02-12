---
title: 使用 Discord.js v14 開發全能Discord機器人 | Ep.6 製作設定檔
author: winsonotp
date: 2023-02-12 16:28:00 +0800
categories: [教學, 程式]
tags: [Node.js, Discord.js]
---

> 這個系列會帶著您通過Node.js中的Discord.js套件，從0到1開始製作屬於自己的Discord機器人，希望可以幫助大家成為機器人的開發者哦！

## 前言
這篇教學將會帶著大家製作「設定檔」，讓我們製作機器人時可以更清晰地設置相關資料，並且提高安全性。

### 設定檔是什麼？為什麼要製作設定檔？
1. 設定檔是用於設置機器人的相關資料，例如我們曾經提及非常重要的TOKEN，以及機器人的ID，或是之後若有其他需設置頻道或其他資料的內容時，若在設定檔設置，會比在繁瑣的程式碼中設定簡易，也較好更改。
2. 因為在編寫程式遇到問題時若要向他人提供程式碼，或是要將程式碼公開給他人進行檢閱時，若直接提供程式碼，當中或許會包含不能提供的內容(例如：TOKEN)。但若將較私密的內容另外設置，只要在提供檔案時不要給予設置定檔即可。

### 製作設定檔的兩種方法？
製作設定檔常見的方法有兩種，一種是使用 `JSON` 格式的檔案，一種是 `.env` 檔案，在此篇文章中我們會使用格式較清楚且較簡易的 `JSON` 檔案製作設定檔。

## 前置工作
這篇文章的工作會編寫到 `index.js` 以及 `deploy.js` 兩個使用到TOKEN或id的程式碼，並將其id或TOKEN的來源改完從設定檔獲取。並且需要在機器人目錄中創建一個新的檔案 `setting.json`。

## 設定檔 setting.json
首先，我們先來製作機器人的設定檔：
創建一個檔案，命名為 `setting.json`
```json
{
    "token": "此處填入token",
    "id": "此處填入機器人id"
}
```
這個檔案中，紀錄了token和id兩個內容，並且分別有其代表的值。
請將token和id後方的欄位將其值替換為您的機器人的token和機器人id，例如：
```json
{
    "token": "brabrabrabrabrabra",
    "id": "7777777777222222"
}
```

## 調整資料來源 deploy.js / index.js
接下來，我們到這兩個主要的檔案來將資料的來源調整為從 `setting.json` 獲取。

### 匯入JSON資料
```js
const { token, id } = require('./setting.json')
```
通過這段程式，我們會從 `setting.json` 中獲得兩個數值 (token, id) ，並且將其定義為變數。

將這段程式分別放到 `deploy.js` 和 `index.js` 的檔案內最上方(只要在使用前定義即可，筆者為了方便檢視因此建議直接加在第一行)。

### 修改資料來源
#### deploy.js
將原先的
```js
const rest = new REST({ version: '10' }).setToken('您原先的token在這裡');
```
修改為
```js
const rest = new REST({ version: '10' }).setToken(token);
```
此時程式會自動將token這個變數帶入到 `.setToken()` 函數內作為其參數。
並且將
```js
    await rest.put(Routes.applicationCommands('您原先將id放在置'), { body: commands });
```
修改為
```js
    await rest.put(Routes.applicationCommands(id), { body: commands });
```

#### index.js
將這段
```js
client.login('這裡原先是您的token');
```
修改為
```js
client.login(token);
```

將兩個檔案都修改完之後存檔，就可以執行看看是否正常運行囉！

![](https://i.imgur.com/aGdJ0Wr.png)

![](https://i.imgur.com/oyZfotH.png)

筆者的兩個檔案都正常運行囉！
## 總結
這篇文章帶著各位製作了我們機器人的設定檔，讓機器人的參數或資料設置能夠更清晰、更安全的進行設定，期望這篇文章對各位有幫助！

除此之外，本系列所編寫的程式碼在Github開源囉：
https://github.com/Winson-OTP/Discord.js-v14-Tutorial

此開源的程式碼歡迎使用，並且不需標著作者或來源，如願意支持本系列也可以標註為：
```
作者：WinsonOTP
網站：https://winson-otp.github.io/
開源：https://github.com/Winson-OTP/Discord.js-v14-Tutorial
```

下篇文章將會繼續帶給各位更豐富的教學，請各位拭目以待唷！