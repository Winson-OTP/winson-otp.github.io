---
title: 用 Scratch 製作應用程式？帶您將 Scratch 3.0 專案轉換為 apk 安裝檔！
author: winsonotp
date: 2023-02-21 14:18:30 +0800
categories: [教學, 程式]
tags: [Scratch]
---

> 我們總是會在應用程式商店看到各式各樣、玲瑯滿目的應用程式(APP)，大部分的APP是通過繁複的程式語言來打造。但是，簡單而易懂的Scratch竟然也能製作APP？！筆者將帶您將 Scratch 的 sb3 檔案，轉換為 Android 的 apk 安裝檔案。

## 前言
這篇文章，將會帶著各位將 Scratch 3.0 的專案，也就是 `sb3` 檔案，轉換為安卓手機所支援的安裝檔案 `apk`。Scratch 3.0 的專案檔案，若分享予他人，他人便會同時得到 **程式碼** 與 **可運行的內容** ，此外必須使用 Scratch 編輯器才能開啟，既不適合分享又不適合啟動。而倘若我們將Scratch檔案轉換為apk安裝檔，我們便能輕鬆的用手機來啟動程式，也無法檢視到程式的原始碼。

![](https://i.imgur.com/N5yH70n.png)

## 實際操作
接下來，我們言歸正傳，開始進行轉換的操作吧！

### 第一步：將 Scratch 專案轉換為 HTML 格式
首先，由於筆者沒有找到較為安全可靠的直接轉換方式，因此此篇文章會通過如下的轉換步驟來進行：`sb3` -> `html` -> `apk` 。因此，我們要先將專案程式轉換為HTML格式

這邊我們使用 TurboWarp 進行轉換
#### TurboWarp Packager

![](https://i.imgur.com/OuIJYVX.png)

- 可將專案匯出為多種格式的檔案
- 頁面底部可切換為多國語言，包含繁體中文
- TurboWarp 網頁子網域
- 並非由Scratch官方營運或開發
- https://packager.turbowarp.org/

使用上的詳細教學可以查看我的另一篇文章：

#### 讓精心製作的 Scratch 3.0 專案轉換為 HTML 網頁，再也不怕透漏程式碼！
- 這篇文章將指導您將Scratch的專案 (.sb3) 轉換為HTML程式碼，不但可以在不分享程式碼的情況下分享專案，更可以在未安裝或開啟Scratch編輯器的情況下使用！
- https://hackmd.io/@winsonOTP/scratch-to-html

### 第二步：安裝 Website 2 APK 軟體
接下來要安裝一個軟體，用於將 `html` 檔案轉換為 `apk` 檔案。

#### Website 2 APK
![](https://i.imgur.com/3Oq8TY6.png)
- 轉換 html 檔案為 apk
- 可以調整各種APP的設定
- 無廣告且轉換快速
- https://websitetoapk.com/

進入網頁後點按下載按鈕。

![](https://i.imgur.com/x4Mi5EH.png)

點按 Free Download 進行免費的下載(亦可[點此](https://github.com/praveshagrawal/Website-2-APK-Builder/releases/download/v5.1.0.1/Website.2.APK.Builder.v5.1.0.1.Installer.exe)直接下載)。

![](https://i.imgur.com/bQksema.png)

下載完成安裝檔後執行，開始安裝後首先出現的會是條款的顯示，須同意後點擊 Next。

![](https://i.imgur.com/HV9su2V.png)

接著會詢問是否要新增桌面捷徑，可依照個人喜好設置。

![](https://i.imgur.com/2uHtrQf.png)

接著會和您確定安裝的設置，沒問題就可以繼續安裝。

![](https://i.imgur.com/N3i1Ysb.png)

安裝完成會出現此畫面，若要直接開啟可以勾選選項後點按Finish。

![](https://i.imgur.com/Oth4IZv.png)

這樣就安裝好囉！

### 第三步：設置輸出時的設定
接著，讓我們開始使用 Website 2 APK 轉換 html 檔案為 apk 檔案。

開啟剛剛安裝好的 Website 2 APK，你將會看到這個畫面。

![](https://i.imgur.com/xxLvMgC.png)

您需要先將這個設置勾選為左側的選項，代表您會使用本地的 html 檔案來進行轉換。

![](https://i.imgur.com/GQm9g6q.png)

接著請在左下方的這個設置調整您的檔案路徑，也可以通過右邊的按鈕直接進行選擇

![](https://i.imgur.com/zXrWQZN.png)

> 註：您需要將 html 檔案放置到一個專屬的資料夾，並且將 html 檔案命名為 `index.html` ，才能順利讀取。

此時，您已經調整好了 html 檔案的抓取路徑，接下來將逐一介紹主要的設置的用途與意義：

APP標題：

![](https://i.imgur.com/DNvC5yT.png)

輸出路徑：

![](https://i.imgur.com/PC6Hbl9.png)

分享文字與離開前的確認文字：

![](https://i.imgur.com/UURqEiA.png)

右側勾選的欄位是一些基礎或進階的設定，建議不要調整進階的設定，避免影響正常運行，尤其是這一個

![](https://i.imgur.com/zNDmsHw.png)

若取消勾選，可能會導致專案無法運行。

其他設定在此由於篇幅限制先不進行介紹，歡迎自行摸索嘗試！

### 第四步：將檔案進行輸出
接下來請點擊右下角的建立APK按鈕，進行匯出的動作。

![](https://i.imgur.com/9AXue2Q.png)

您會看到軟體出現的確認窗口，點按確定即可繼續。

![](https://i.imgur.com/ygQt23j.png)

接著軟體會開始進行檔案的輸出，輸出後會出現完成的字樣。

![](https://i.imgur.com/FqfKXN8.png)
![](https://i.imgur.com/rVRhARS.png)
![](https://i.imgur.com/AZ1iCZz.png)

您的檔案此時已經成功輸出到您設置的 Output Directory 囉！
可以將檔案傳輸到手機進行安裝，也可以分享給您的親朋好友哦！

## 結語
這篇文章指導各位進行 sb3 -> html -> apk 的轉換，感謝各位的閱讀，希望您閱讀此篇文章後能夠順利的進行轉換！

謝謝您閱讀完畢這篇文章，之後還會持續推出更多好文給大家，文章編撰不易，每一步驟皆親自實踐避免出錯，請務必多多支持，多多追蹤與分享！
