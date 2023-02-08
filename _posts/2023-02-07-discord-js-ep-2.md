---
title: 使用 Discord.js v14 開發全能Discord機器人 | Ep.2 官方範例操作
author: winsonotp
date: 2023-02-07 19:45:00 +0800
categories: [教學, 程式]
tags: [Node.js, Discord.js]
---

> 這個系列會帶著您通過Node.js中的Discord.js套件，從0到1開始製作屬於自己的Discord機器人，希望可以幫助大家成為機器人的開發者哦！

## 前言
這篇文章將帶著大家從[Discord.js 官方範例](https://discord.js.org/#/docs/discord.js/main/general/welcome)開始了解Discord.js的撰寫方式，並讓機器人上線運作！

此文採取之範例取自Discord.js官方文檔： https://discord.js.org/#/docs/discord.js/main/general/welcome

## 前置工作
首先，我們要準備好寫機器人的資料夾與檔案。

### Step. 1 建立資料夾
建立一個用於製作機器人的資料夾，並在程式編輯器中開啟，下圖為VSCode中的開啟方法，開啟檔案頁籤後點按 `開啟資料夾`

![](https://i.imgur.com/8ZB5Z3l.png)

### Step. 2 安裝套件
接著開啟終端機，VSCode的開啟方法如下，開啟終端機頁籤並點按 `新增終端`
*NOTE: 若終端機的路徑不是機器人的資料夾，請在終端機輸入 `cd 要切換到的資料夾` ，可以是絕對路徑或相對路徑*

![](https://i.imgur.com/82cKR9F.png)

在終端機內輸入下方指令，用於安裝 `discord.js` npm套件，用於編寫機器人

```
npm install discord.js
```

![](https://i.imgur.com/XhH5gEk.png)

若成功安裝，您將會發現資料夾中多了許多檔案或資料夾，說明如下：

| 檔案或資料夾名稱  | 用途                     |
| ----------------- | ------------------------ |
| package.json      | 紀錄專案中使用的所有套件 |
| package-lock.json | 鎖定使用套件的版本       |
| node_modules      | 下載的套件將會存放其中   |


### Step. 3 建立檔案
然後在機器人的資料夾中新增兩個檔案，分別是 `deploy.js` 和 `index.js`，deploy意即「部署」，是讓機器人用來註冊斜線指令的檔案，而index意味著索引，即是機器人的主程式

此時，資料夾中應為如此配置

![](https://i.imgur.com/ev0K37O.png)

恭喜您完成前置的準備工作囉！接下來就要編寫程式了

## 範例學習
官方範例如同剛剛所述，分為註冊指令的檔案以及主程式，將會一行一行向各位解析含意。

### 註冊斜線指令 deploy.js
#### 官方範例
```javascript=
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('token');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
```
#### 程式解析
```javascript=1
const { REST, Routes } = require('discord.js');
```
這行程式碼是引入discord.js中向Discord發送請求並註冊斜線指令的套件，require意即要求
```javascript=3
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];
```
這段程式碼是將機器人的指令儲存於一個清單內，並用於之後註冊
```javascript=10
const rest = new REST({ version: '10' }).setToken('token');
```
此行程式碼將會建立一個新的REST，其中`.setToken('token')`中的token需替換為自己的機器人Token，獲取方式如下：
1. 進入上篇教學曾提到的 [Discord Developer Portal](https://discord.com/developers/applications)
網址：https://discord.com/developers/applications
2. 開啟自己的機器人應用程式，並選擇 `Bot` 頁籤
![](https://i.imgur.com/4z3jg5N.png)
3. 頭像旁有一欄位為 `TOKEN` ，點擊藍色的 `Reset Token` 按鈕
![](https://i.imgur.com/RnXsXQ8.png)
4. 接著會看到這個提示框，提醒您若您的機器人正在運作中更換Token將會終止運作，直到您替換程式碼中的Token，請點擊 `Yes, do it!` 進行確定
![](https://i.imgur.com/tDm4PGn.png)
5. 此時您會看到一長串的英語、數字與符號的組合，這就是您的機器人Token，點擊 `Copy` 即可複製

:::danger
此Token請勿向他人洩漏，若他人持有機器人Token將可操作機器人進行任何行為，務必謹慎保管
:::

```javascript=12
(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
```
這段程式碼是用來進行註冊斜線指令的動作，將會嘗試向Discord API發送註冊斜線指令「至指定伺服器」的請求，若成功會在控制台發送成功註冊的訊息，若失敗則會發送錯誤內容。

其中的 `CLIENT_ID` 需改成自己機器人的CLIENT_ID（在 [Discord Developer Portal](https://discord.com/developers/applications) 中的機器人應用程式 > OAuth2 > General）

![](https://i.imgur.com/5Nx2s43.png)

【複製的CLIENT_ID在程式碼中需為字串，因此需用引號包裹，例："935330155109445730"】

`GUILD_ID` 需改為要註冊指令的伺服器ID，取得方式如下

1. 開啟 [Discord](https://discord.com/channels/@me)，並從左下角的個人名稱右側開啟 `使用者設定` 
2. 向下滑動並找到「應用程式設定 > 進階」
![](https://i.imgur.com/mAj6HGS.png)
3. 開啟「開發者模式」
![](https://i.imgur.com/jRgP5A4.png)
4. 關閉設定回到Discord頁面，對要複製ID的伺服器點擊右鍵
![](https://i.imgur.com/w9Dz5F0.png)
5. 最下方的按鈕為「複製ID」，點擊後即可複製伺服器ID

【複製的GUILD_ID在程式碼中需為字串，因此需用引號包裹，例："935330155109445730"】

#### 但有些機器人的指令所有伺服器皆可看到，是一個一個註冊的嗎？
有些機器人會將斜線指令註冊為「全域指令」，凡是註冊即可在任何授予機器人斜線指令功能的伺服器中註冊，不需將所有伺服器逐個註冊！

方法也非常簡單，將上述程式碼的第16行
```javascript=16
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
```
改為如下所述即可，而因為是全域指令，因此不需GUILD_ID，所以省略
```javascript=16
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
```
#### 實際執行
要執行剛剛寫好的程式碼，請存檔後在終端機輸入此指令
```
node deploy.js
```
node是用於執行node.js程式碼，而deploy.js即為要執行的檔案名稱

![](https://i.imgur.com/eiVstFA.png)

若成功註冊終端機將會呈現這兩行文字，在Discord輸入/，即會發現機器人已經有了註冊的斜線指令

![](https://i.imgur.com/epquB0E.png)

目前機器人的斜線指令還是無法運作的，需要有了運作機器人的程式碼來回應指。

![](https://i.imgur.com/wEu8O6o.png)

接下來，我們要讓機器人可以接收這個指令並運作！

### 運作機器人 index.js
#### 官方範例
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
#### 程式解析
```javascript=1
const { Client, GatewayIntentBits } = require('discord.js');
```
此行程式碼引入了discord.js套件中我們所需的功能，Client是用於偵測並處理事件，而GatewayIntentBits用於得知所需指定意圖的代碼
```javascript=2
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
```
這行程式碼定義了client，並告訴Discord我們所需的意圖，讓我們在後續可以偵測事件的發生或處理
```javascript=4
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
```
這段程式碼是偵測ready事件的發生，ready事件發生在機器人登入成功並上線時，因此我們會讓機器人在控制台紀錄上線成功
```javascript=8
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});
```
此段程式碼偵測interactionCreate事件的發生，interactionCreate是指指令創建，而此事件不僅會發生在斜線指令使用時，還會發生在其餘任何形式的指令，像是按鈕

由於許多情境會造成interactionCreate觸發，因此在第9行，「若指令不是斜線指令便不做處理直接跳出」

若是斜線指令則會進行後續處置，第11－13行，「若指令名稱是ping，就對指令回覆Pong!」
```javascript=16
client.login('token');
```
這行程式碼會讓機器人登入，token需替換為機器人token（前一段落有提及獲取方法）
#### 實際執行
完成程式碼後且存檔後一樣使用node.js，並在終端機輸入指令運行index.js
```
node index.js
```
若成功運行控制台將會顯示此字樣

![](https://i.imgur.com/mVE8VWn.png)

此時您的機器人將會成功上線！

![](https://i.imgur.com/0TKJx5C.png)

接著在聊天室輸入 `/ping` 並送出，如果機器人回覆Pong!就成功囉！

![](https://i.imgur.com/vx1xxIB.png)

（若要關閉機器人請在控制台按下 `Ctrl + C`，且當您關閉電腦或停止運行程式碼機器人即會下線，後續將會帶著各位讓機器人24/7上線！）
## 總結
這篇教學帶著大家從官方的範例程式碼，學習製作屬於自己的機器人，並成功第一次上線，恭喜各位製作出了屬於自己的機器人！接下來的文章將會讓各位製作更多更有趣的功能，盡請期待！