---
title: 站在 Python 的肩膀上開啟 JavaScript 的大門，用 Py 角度學 JS | Ep. 5 迴圈與判斷式
author: winsonotp
date: 2023-02-27 18:12:30 +0800
categories: [教學, 程式]
tags: [Python, JavaScript]
---
> 這個系列帶著各位通過Python的角度，開始認識JavaScript這個實用的程式語言。專為曾經學習Python或認識Python，並且想學習JavaScript的人們設計，將會頻繁的提到每一種函式或語法與Python相關之處，便於將理解的知識再次利用，從中學習！

## 前言
這篇文章和各位介紹兩個內容
1. 迴圈：讓一段程式重複運行，可以將多行相同的程式整合，或是將一串重複使用的程式整合。
2. 判斷式：判斷一個條件，若條件成立 (`true`) 則執行一段程式，若條件不成立 (`false`) 則執行另一段程式。

## 判斷式
這邊先讓各位看看 Python 與 JavaScript 的判斷式的差異：

```python
# Python

if condition1: # 首先判斷第一種情況
    statement1 # 若成立則執行情況一的程式
elif condition2: # 否則判斷第二種情況
    statement2 # 若成立則執行情況二的程式
else: # 若情況皆不成立
    statement3 # 則執行皆不成立時的程式
```

```javascript
// JavaScript

if (condition1) { // 首先判斷第一種情況
  statement1; // 若成立則執行情況一的程式
} else if (condition2) { // 否則判斷第二種情況
  statement2; // 若成立則執行情況二的程式
} else { // 若情況皆不成立
  statement3; // 則執行皆不成立時的程式
}
```

可以發現雖然兩者的程式語法，符號方面有著相當的差別，但是使用方法大同小異。

接著便要著重於 JavaScript 的判斷式和各位介紹囉！

### if 判斷式
if 判斷式是 JavaScript 中的其中一種判斷式，也是最常用的一種，由 `如果...否則如果...否則...` 的形式組成。

這是包含完整功能的判斷式形式

```javascript
if (condition1) { // 首先判斷第一種情況
  statement1; // 若成立則執行情況一的程式
} else if (condition2) { // 否則判斷第二種情況
  statement2; // 若成立則執行情況二的程式
} else { // 若情況皆不成立
  statement3; // 則執行皆不成立時的程式
}
```

其中的 `else if` 和 `else` 都是可以省略的，例如：

一個只判斷一種情況的判斷式

```javascript
if (condition1) { // 判斷第一種情況
  statement1; // 若成立則執行情況一的程式
}
```

一個判斷一種情況與否則的判斷式：

```javascript
if (condition1) { // 判斷第一種情況
  statement1; // 若成立則執行情況一的程式
} else { // 若情況不成立
  statement2; // 則執行不成立時的程式
}
```

一個判斷兩種情況的判斷式：

```javascript
if (condition1) { // 首先判斷第一種情況
  statement1; // 若成立則執行情況一的程式
} else if (condition2) { // 否則判斷第二種情況
  statement2; // 若成立則執行情況二的程式
}
```

並且其中的 `condition` 是判斷的情況，需是會回傳布林值，也就是 `true` 和 `false` ，並且若需要判斷兩個條件同時符合，可以在兩個條件之間使用 `&&` ，而若要判斷兩個條件其中一個符合，則使用 `||`。

此外，若 `condition` 只有一行，亦可以省略大括號，以這種形式撰寫

```javascript
if (condition1) statement1;
```


| 符號 | 意義 |
| --- | ----- |
| && | 且 (And) |
| \|\| | 或 (Or) |

這邊也和各位補充一些可以用於比較數字的符號，使用方法為 `值 比較符號 值`，例如 `3 > 1` 會回傳 true。

| 符號 | 意義 |
| --- | --- |
| > | 大於 |
| < | 小於 |
| >= | 大於或等於 |
| <= | 小於或等於 |
| == | 相等 (一般) |
| === | 相等 (嚴謹) |
| != | 不等於 (一般) |
| !== | 不等於 (嚴謹) |

舉一個實作的例子，請使用 VSCode 開啟您的專案資料夾，並且創建一個檔案為 `ep5-001.js`，輸入以下內容

```javascript
let a = 10;
if (10 === 11) {
    console.log('10等於11');
} else if ( 1 + 1 > 2) {
    console.log('1加1大於2');
} else {
    console.log('都不成立');
}
```

存檔後執行

```
node ep5-001.js
```

可以發現順利的出現了「都不成立」的輸出結果！

![](https://i.imgur.com/llmjxEO.png)

由於每一個條件的執行程式都只有一行，我們也可以將程式簡化為這樣

```javascript
let a = 10;
if (10 === 11) console.log('10等於11');
else if ( 1 + 1 > 2) console.log('1加1大於2');
else console.log('都不成立');
```

執行後發現出現了相同的結果！

![](https://i.imgur.com/ZKz2H0i.png)


## 迴圈
首先，讓各位閱讀 Python 與 JavaScript 的迴圈差異：

```python
# Python

# while 迴圈
while condition: # 
    statement

# for 迴圈
for x in sequence:
    statement
```

```javascript
// JavaScript

// while 迴圈
while (condition) {
    statement
}

// for 迴圈
for (init value; condition; action) {
    statement
}
```

### While 迴圈
while 迴圈通常用在迴圈要執行的次數不明確時，使用方式如下

```javascript
while (condition) {
    statement
}
```

程式在每次執行 `statement` 前皆會判斷 `condition` 是否成立，若成立則會執行，否則會繼續執行後續的程式。

這邊舉一個實作的例子，讓各位能夠更加了解 While 迴圈

```javascript
// 定義一個變數為0
let i = 0;

while (i<10) { // 當變數小於十
    i = i + 1; // 將變數數值加1
    console.log(i); // 輸出該變數的值
}
```

開啟一個新的檔案，命名為 `ep5-002.js` 並將此段程式碼貼入，存檔後執行，會得到這樣的結果

![](https://i.imgur.com/r82XQea.png)

可以發現迴圈在變數 i 小於 10 時持續執行，並且執行會將變數加 1 後輸出，因此重複執行了十次，最後一次將變數改變為 10 並輸出後，程式便終止執行。

### For 迴圈
接下來要介紹的是 For 迴圈，通常用於執行次數較清楚時，使用方式如下
```javascript
for (init value; condition; action) {
    statement
}
```

- `init value` 初始定義一個變數，需使用第二集提到定義變數的方法，例如 `let i = 10`
- `condition` 是讓迴圈持續執行的條件，與 while 迴圈中的條件意義相同，例如 `i >= 1`
- `action` 是每次迴圈執行完畢時，會執行的動作，例如 `i=i-1`
- `statement` 是迴圈會重複執行的內容，例如 `console.log(i)`

這邊舉的例子，可以組成程式碼如下

```javascript
for (let i=10; i>=0; i=i-1) {
    console.log(i);
}
```

亦可以寫做

```javascript
for (let i=10; i>=0; i=i-1) console.log(i);
```

請將這段程式碼開啟一份新檔案 `ep5-003.js` 並貼入，並且執行，將回得到以下的結果

![](https://i.imgur.com/e0PzBDW.png)

i 變數一開始被定義為 10 ，並且由於符合條件 i>=0 因此會進行執行，而輸出10。每次執行後都會將 i 變數改變 -1，因此輸出到 0 時 i 便被改變為 -1 ，而不符合 i>=0 的條件，因此停止運作。

以上便是本文對於迴圈介紹的內容囉！

## 結語
這篇文章和各位介紹了 JavaScript 中的 if 判斷式，以及 While 迴圈與 For 迴圈，希望對各位有所幫助！迴圈與判斷式是 JavaScript 中非常重要的一環，應用在非常多的情況中，務必多多複習！

也別忘了多多追蹤這一系列的文章，也歡迎留言回饋自己學習的心得或問題哦！下篇文章再見囉！掰掰～
