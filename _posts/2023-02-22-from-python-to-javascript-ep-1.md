---
title: 站在 Python 的肩膀上開啟 JavaScript 的大門，用 Py 角度學 JS | Ep. 1 行前準備
author: winsonotp
date: 2023-02-22 09:28:30 +0800
categories: [教學, 程式]
tags: [Python, JavaScript]
---

> 這個系列帶著各位通過Python的角度，開始認識JavaScript這個實用的程式語言。專為曾經學習Python或認識Python，並且想學習JavaScript的人們設計，將會頻繁的提到每一種函式或語法與Python相關之處，便於將理解的知識再次利用，從中學習！

## 前言
這篇文章將會帶著各位一步一步，進行要開始學習的相關準備，方便後續文章的操作。我們將會帶您安裝 `Visual Studio Code` 這個實用的程式編輯器，而 `Chrome` 由於較為普遍因此僅介紹安裝的網址，若未曾安裝的話亦可使用其他瀏覽器嘗試。唯獨文章中會有使用到瀏覽器中的檢查工具，各瀏覽器之間會有細微的差異，需要自行留意。除此之外，也會帶著各位安裝JavaScript的運行環境： `Node.js` 。

## 安裝 Visual Studio Code
Visual Studio Code 由微軟開發，是一個極為廣泛且實用的程式編輯器，有著廣大的社群，以及各種實用的擴充套件。內建了命令工具與 Git 的版本控制系統，對於程式工程師來說也是相當的好用。並且在2019在一份 Stack Overflow 的調查中被認為是最受開發者歡迎的編輯器，近乎一半的受訪者表示曾經使用。

#### Visual Studio Code
![](https://i.imgur.com/nWd6083.png)
- 支援 Windows、OS、Linux 等作業系統
- 可以切換為各國語言，使用更加方便
- 支援近乎所有主要的程式語言
- 官方網頁：https://code.visualstudio.com/

### 第一步：前往官網下載安裝檔
首先，前往[VSCode的官網](https://code.visualstudio.com/)

![](https://i.imgur.com/HdMltqB.png)

選擇您的裝置所適合的安裝檔下載

![](https://i.imgur.com/BrpHcjm.png)

接著會自動跳轉到文檔的畫面，並且開始下載

![](https://i.imgur.com/IJqtKc3.png)

下載完成後便可以進行下一個步驟

### 第二步：執行安裝檔案
接下來，請執行下載完成的安裝檔案，這邊以Windows進行示範。
條款頁面請詳細閱讀條款並勾選同意後，繼續進行下一步

![](https://i.imgur.com/8snnlrn.png)

如有出現安裝路徑的詢問，建議可以不用修改，如要修改請依照個人喜好進行設置。

![](https://i.imgur.com/gWKTTFG.png)

而接著會進入安裝的相關配置，除了桌面圖示以外的設定建議不要更改，避免造成後續運作問題

![](https://i.imgur.com/59WYiEw.png)

VSCode將和您確認您要安裝的配置，若無問題即可點按安裝繼續

![](https://i.imgur.com/eIMmYPx.png)

如出現這個畫面，則按照自己喜好進行調整或直接繼續

![](https://i.imgur.com/kQR8fqC.png)

接著將開始進行一連串的安裝

![](https://i.imgur.com/MZIBw6M.png)

### 第三步：安裝完成

安裝完成後就可以啟動囉！

![](https://i.imgur.com/n61bKDU.png)

## Chrome 瀏覽器安裝
Chrome是一個由Google開發的瀏覽器，有著各種強大的工具能夠輔助瀏覽的使用，也有著十分可靠的安全性，給您安全又方便的環境！相信不少讀者現在所使用的瀏覽器便是Chrome。

如未曾安裝Chrome，可以到官方網頁下載安裝

#### Google Chrome
![](https://i.imgur.com/6rMKN3I.png)
- 出色的網路瀏覽器
- 網路安全為您輕鬆掌握
- 使用順暢且風格多樣
- https://www.google.com/intl/zh-TW/chrome/

## Node.js 安裝
Node.js是一個能夠運行JavaScript原始碼的執行環境，同時擴增了做為網路伺服器的其他相關功能。為了讓我們接下來能夠順利的進行操作，我們在此先行安裝Node.js。

#### Node.js
![](https://i.imgur.com/vS7BcWJ.png)
- 用於運作JavaScript的執行環境
- 支援原生JS以外的其他功能
- https://nodejs.org/zh-tw/

### 第一步：前往官網下載安裝檔

首先，請先到Node.js的官方網站，並進入[下載頁面](https://nodejs.org/zh-tw/download/) 。

選擇適合裝置的安裝檔案，並下載後安裝，版本方面建議不用做切換，下載LTS即可，可以確保比較穩定的運作。

下載安裝檔後便可以開始安裝，這邊以Windows做示範。

### 第二步：執行安裝檔並進行安裝

安裝檔經過允許並且偵測環境過後，開始執行時，您將會看到這個開始安裝的畫面，請點擊下一步以繼續安裝

![](https://i.imgur.com/elpwrGL.png)

接著會來到條款頁面，閱讀後勾選同意，並點擊下一步即可繼續安裝

![](https://i.imgur.com/m4JPVCR.png)

當出現確認安裝路徑時，可以直接點按繼續，亦可調整為其他適合的路徑進行安裝

![](https://i.imgur.com/LDkMNDW.png)

設置好路徑後，會來到安裝的設置項目相關配置階段，建議全部不進行調整，避免影響正常運行

![](https://i.imgur.com/5CITjp7.png)

這個步驟同樣建議各位勾選後繼續執行安裝

![](https://i.imgur.com/ApDlSvk.png)

將開始進行安裝，若安裝所有檔案前跳出視窗需允許進行安裝，如要繼續安裝請點選是，接著便會開始進行安裝的程序。

![](https://i.imgur.com/3WYWRjh.png)

當顯示出這個畫面後，便是安裝完成

![](https://i.imgur.com/GrkH1oz.png)


## 結語
以上便是所有需要安裝的軟體囉！這篇文章帶著大家安裝VSCode，並且介紹了安裝Chrome的方法，並且指導各位安裝Node.js。期望讓大家在開始學習JavaScript前能夠做好準備。

筆者為了能夠帶大家從零開始配置VSCode，也解除安裝了自己的VSCode，懇請各位多多支持鼓勵。

![](https://i.imgur.com/CUOhRKj.png)

希望這篇文章對各位有幫助，下篇文章再見囉！
