---
title: 讓精心製作的 Scratch 3.0 專案轉換為 HTML 網頁，再也不怕透漏程式碼！
author: winsonotp
date: 2023-02-14 21:09:30 +0800
categories: [教學, 程式]
tags: [Scratch]
---

> 這篇文章將指導您將Scratch的專案 (.sb3) 轉換為HTML程式碼，不但可以在不分享程式碼的情況下分享專案，更可以在未安裝或開啟Scratch編輯器的情況下使用！

## 前言
Scratch 3.0 是一個適合程式初學者或國中小學生的程式啟蒙語言，不包含繁瑣的程式碼或繁複難記的指令，取而代之的是簡單的模塊，以積木的方式拼接，以達到想要的效果。並且即使操作簡單，寫出來的程式也並不一定~~樸實無華且~~枯燥，也能做出如同熱門遊戲般的效果。

若自己製作出了精美的程式，又想和他人分享，卻因為Scratch無法僅限分享執行檔的限制而止步嗎？這篇文章將帶著您將檔案通過外部網頁匯出成 HTML，再也不怕程式碼外洩給他人！

HTML是一種標記語言，極其廣泛的用於網頁開發領域。

讓我們開始今天的主軸，轉換檔案吧！

## 實作
接下來，讓我們開始進行實際的操作。

今天的操作主要將會使用 TurboWarp Packager 這個網頁，不須註冊登入即可免費使用。

#### TurboWarp Packager

![](https://i.imgur.com/OuIJYVX.png)

- 可將專案匯出為多種格式的檔案
- 頁面底部可切換為多國語言，包含繁體中文
- TurboWarp 網頁子網域
- 並非由Scratch官方營運或開發

### 第一步：前往TurboWarp Packager網頁
首先，請先開啟 [TurboWarp Packager](https://packager.turbowarp.org/) 網頁，您將會來到這個畫面

![](https://i.imgur.com/sznPMif.png)

### 第二步：匯入要匯出的專案
接著，您可以通過三個方法中的其中一個來匯入您的Scratch專案

![](https://i.imgur.com/9fZOo8k.png)

Scratch專案ID或網址是在 https://scratch.mit.edu 中公開分享的專案，可以貼上專案首頁的網址或是專案網址後的一段數字，也就是專案ID。

選取專案後點擊載入專案。

![](https://i.imgur.com/umHT4xn.png)

### 第三步：調整專案設定與其他參數
檔案載入完成後，會出現許多設定，接下來將與您一一講解：

![](https://i.imgur.com/RIb8Kgf.png)

此處是調整專案的顯示設定、限制突破與用戶名稱的參數，可以依照個人需求設定，亦可直接使用預設值。

![](https://i.imgur.com/c7SNsPv.png)

介面設定中，標題將會是顯示在網頁標題的文字，而圖示是網頁的圖標。
載入畫面為專案仍在載入時，顯示的畫面設定，可以輸入文字或圖片來做為載入時的顯示物件。
控制欄中設定的是有關於Scratch的介面中控制按鈕，也就是綠旗、中止、全螢幕這些按鈕的功能或顯示設定。

![](https://i.imgur.com/eNgNV7X.png)

此處可以調整專案的網頁顯示出的相關色系，或是變數/列表顯示器的顏色。

![](https://i.imgur.com/i5PaOgQ.png)

輸入，可以調整鼠標的輸入相關設置。

![](https://i.imgur.com/KpghKCD.png)

雲端變數，也就是Scratch中僅限Scratcher的功能，可以在此處設定存取的方式。

![](https://i.imgur.com/0jguC3u.png)

進階設定由於較難理解，也不需要使用於較簡單的專案，在此不進行說明。
封裝選項請選擇HTML，以便後續的教學。

![](https://i.imgur.com/ZX1U173.png)

若您想在下次使用此網頁時繼續保存剛剛調整的所有設定，請點擊 Export Settings，並在下次要使用時點按Import Settings選擇上次所下載的設定檔。Reset All Settings會將剛剛所有調整的設定重設。~~誤按的話保證後悔~~

### 第四步：預覽所製作的專案並下載
![](https://i.imgur.com/N4v8flV.png)

![](https://i.imgur.com/vltODRq.png)

您可以點擊預覽來開啟新分頁檢視您的作品惠出的成果，或是點擊封裝或是下方的檔案名稱超連結，來下載您的匯出檔案。

## 結語
這篇文章用短短的四個步驟，指導各位將自己的Scratch作品轉換為HTML格式，既方便分享又保護程式碼~~簡直一舉兩得~~。希望這篇文章對各位有幫助，感謝您的閱讀！
