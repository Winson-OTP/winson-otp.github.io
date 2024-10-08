---
title: 站在 Python 的肩膀上開啟 JavaScript 的大門，用 Py 角度學 JS | Ep. 4 運算符與數學
author: winsonotp
date: 2023-02-27 00:25:30 +0800
categories: [教學, 程式]
tags: [Python, JavaScript]
---

> 這個系列帶著各位通過Python的角度，開始認識JavaScript這個實用的程式語言。專為曾經學習Python或認識Python，並且想學習JavaScript的人們設計，將會頻繁的提到每一種函式或語法與Python相關之處，便於將理解的知識再次利用，從中學習！

## 前言
這篇文章將帶著各位認識 JavaScript 中的運算符號，以及其他數學相關的函式，讓各位能夠通過 JavaScript ，進行數學相關的運算，做出更有特色的作品！

JavaScript 有許多的運算符號，都能夠在 Python 中進行使用。包括但不限於：加、減、乘、除 ( `+`, `-`, `*`, `/` )、取餘數 (`%`)、指數 (`**`)。

## 運算符號
這邊介紹 JavaScript 中含有的六種運算符號，也就是前言中提到的加、減、乘、除 ( `+`, `-`, `*`, `/` )、取餘數 (`%`)、指數 (`**`)。

首先要介紹的是如何使用運算符號，用法為 `值 運算符號 值`，例如我們要將 1 和 2 相加，則使用加法符號，並以此方式排序 `1 + 2` ，並且空格是可以省略的。

此外需要注意的一點， JavaScript 中會遵從先乘除後加減的原則，並且可以使用括號來調整先後的運算順序。

以下將運算符號左側的值稱為a，右側稱為b：

### a + b 加法
加法，也就是將兩個數字加在一起，即a加上b。
```javascript
let a = 1 + 1; // 2
let b = 49 + 51; // 100
let c = 50 + 50 + 50; // 150
```
### a - b 減法
減法，也就是將左側的數字減去右側的數字，即a減去b。
```javascript
let d = 3 - 2; // 1
let e = 100 - 19; // 81
let f = 100 - 10 - 20; // 70
```
### a * b 乘法
乘法，也就是左側的數字乘以右側的數字，即a乘以b。
```javascript
let g = 2 * 3; // 6
let h = 9 * 4; // 36
let i = 2 * 3 * 4; // 24
```
### a / b 除法
除法，也就是將左側的數字除以右側的數字，即a除以b。
```javascript
let j = 3 / 2; // 1.5
let k = 10 / 5; // 2
let l = 9 / 2 / 1.5; // 3
```
### a % b 取餘數
取餘數，也就是將左側的數字除以右側數字後，留下的餘數，即a除以b之餘數，若整除則為0。
```javascript
let m = 3 % 2; // 1
let n = 10 % 5; // 0
let o = 9 % 4 % 3; // 1 (9先與4進行運算，餘數為1，再與3進行運算之結果)
```
### a ** b 指數
指數，也就是左側數字的右側數字次方，即a的b次方。
```javascript
let p = 2 ** 2; // 4
let q = 1 ** 3; // 1
let r = 2 ** 2 ** 2; // 16 (2的2次方先行運算，並且再進行2次方運算之結果)
```

## 運算函式
接下來要介紹的是運算的相關函式，會介紹到的有 `Math.round() 四捨五入`、`Math.ceil() 無條件進位`、`Math.floor() 無條件捨去`、`Math.trunc() 去除小數`、`Math.abs() 絕對值`、`Math.sign() 判斷正負數或0`。

這部分由於與 Python 較為相異，並且主要所需觀念為數學方面的認識，因此暫不介紹與 Python 之間的相關性。

### Math.round() 四捨五入
```javascript
Math.round(3.14) // 3
Math.round(52.3) // 52

// 預設為四捨五入到整數位，可以通過下述方法變更
Math.round(3.14 * 10)/10 // 3.1
```
### Math.floor() 無條件捨去
取比提供參數小或等於參數的最大整數
```javascript
Math.floor(6.5) // 6
Math.floor(9.19) // 9
```
### Math.trunc() 去除小數
捨棄所有小數，僅保留整數位
```javascript
Math.trunc(1.99) // 1
Math.trunc(33.920) // 33
```
### Math.ceil() 無條件進位
取比提供參數大或等於參數的最小整數
```javascript
Math.ceil(6.1) // 7
Math.ceil(10) // 10
```
### Math.abs() 絕對值
若提供參數為負數，將回傳為提供參數的相反數，否則回傳原數字
```javascript
Math.abs(-9) // 9
Math.abs(100) // 100
```
### Math.sign() 判斷正負數或0
回傳提供的參數是正數(1)、負數(-1)或零(0)
```javascript
Math.sign(-3) // -1
Math.sign(0) // 0
Math.sign(10) // 1
```

以上便是本文介紹的所有數學函式！

## 練習
位了讓各位能夠更加了解 JavaScript 中的基本運算符號，以及複習前幾集的相關內容，這邊出一個小小的練習題給大家，歡迎將您的成果留言分享哦！

> **題目**：使用 JavaScript 製作一個簡單的運算符號計算機
> 
> **引導**：
> 1. 設定兩個變數，分別用於作為運算符號前的數字，以及運算符號後的數字
> 2. 讓程式執行時輸出這兩個變數，進行加、減、乘、除四種運算，並且輸出結果
> 
> **舉例**：
> 
> 將第一個變數輸入 2 第二個變數輸入 1 ，輸出的結果將會是
```
3
1
2
2
```

若能夠以不同的形式輸入這樣的參數後，能夠輸出正確的內容，也是正確的做法唷！

歡迎將您的作品在留言區分享，筆者也會抽空留言給予建議哦！

## 結語
這篇文章和各位介紹了幾種 JavaScript 中的運算符號，以及一些常用的數字處理相關函式！希望對大家學習 JavaScript ，或是製作數學相關程式有著多多少少的幫助～

以上便是這篇文章全部的內容囉，感謝您的閱讀！
