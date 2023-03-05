---
title: 站在 Python 的肩膀上開啟 JavaScript 的大門，用 Py 角度學 JS | Ep. 6 布林值
author: winsonotp
date: 2023-03-05 13:00:30 +0800
categories: [教學, 程式]
tags: [Python, JavaScript]
---
> 這個系列帶著各位通過Python的角度，開始認識JavaScript這個實用的程式語言。專為曾經學習Python或認識Python，並且想學習JavaScript的人們設計，將會頻繁的提到每一種函式或語法與Python相關之處，便於將理解的知識再次利用，從中學習！

## 前言
在 JavaScript 中，布林值是非常重要的一個概念，也是許多程式語言中都會使用到的基本資料型態之一。在 JavaScript 中，布林值只有兩種值，分別是 `true` 和 `false` ，它們通常用來表示某些條件是否成立。

此外，JavaScript 中亦有一個函式 `Boolean()` ，用於將其他的資料型態轉換成對應的布林值，讓我們能夠更靈活地應用布林值。而這個函式在 Python 對應的是 `bool()` 函式，唯獨用法有著微妙卻重要的差異。例如：`{}` 在 Python 中若轉為布林值將會是 False，但若在 JavaScript 將會是 True ，而 `[]` 亦是如此。


在本文中，我們將會深入探討布林值的概念、 `Boolean()` 函式的使用方法，以及布林值在各種情況下的應用。讓我們一起來探索 JavaScript 中布林值的奧秘吧！

## 布林值

### 意義與使用
在 JavaScript 中，布林值可以用於條件判斷、邏輯運算等方面。當一個條件成立時，其對應的布林值為 `true` ，否則為 `false` 。由於與本文有關，因此再次補充幾種可以用於進行比較的符號。

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

以下是一個簡單的例子。

```javascript
let x = 5;
if (x > 3) {
  console.log("x 大於 3");
}
```
在上述代碼中，當 `x` 大於 3 時，條件成立，對應的布林值為 `true`，因此會輸出 `x 大於 3`。若 `x` 小於等於 3，則條件不成立，對應的布林值為 `false`，不會輸出任何內容。而這段程式碼執行後將會輸出 `x 大於 3`。

除了用於條件判斷，布林值還可以進行邏輯運算。在 JavaScript 中，有三種邏輯運算符號，分別是 AND (`&&`)、OR (`||`) 和 NOT (`!`)，並且在 Python 中分別是 `and`, `or`, `not`，其對應的運算規則如下：

**AND (`&&`)**：當兩個值都為 `true` 時，返回 `true`，否則返回 `false`。
**OR (`||`)**：當兩個值中至少有一個為 `true` 時，返回 `true`，否則返回 `false`。
**NOT (`!`)**：將布林值轉換為相反，即 `true` 變成 `false`，`false` 變成 `true`。

這邊有幾個例子：
```javascript
let x = 5;
let y = 10;

// AND
console.log(x > 3 && y > 3); // true
console.log(x > 3 && y < 3); // false

// OR
console.log(x > 3 || y > 3); // true
console.log(x < 3 || y < 3); // false

// NOT
console.log(!(x > 3)); // false
console.log(!(x < 3)); // true
```

### Boolean() 函式
在 JavaScript 中，可以使用 `Boolean()` 函式，將其他資料型態轉換成對應的布林值，其語法如下所示：

```javascript
Boolean(value)
```

其中，value 為要轉換的資料型態。當 value 為以下情況時，轉換後的布林值為 `false`，否則為 `true`。

* `false`
* `null`
* `undefined`
* `0`
* `NaN`
* `''`（空字串）

以下是一些範例：

```javascript
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false

console.log(Boolean(1)); // true
console.log(Boolean('Hello')); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(true)); // true
```

需要注意的是，在 JavaScript 中，`null` 和 `undefined` 並不完全相同。`null` 表示一個空的或不存在的值，而 `undefined` 表示一個未被定義的值。不過當使用 `Boolean()` 函式將這兩種資料型態轉換成布林值時，得到的結果都是 `false`。

在 Python 中，`bool()` 函式的用法也相似，可以將其他資料型態轉換為布林值。但 Python 中的一些資料型態與 JavaScript 的差異，導致 `bool()` 函式在使用上有些許不同。例如 Python 中的空字串、空列表、空元組、空字典、數字 `0`、布林值 `False`、`None` 等都會被轉換為 `False`，而其他資料型態皆為 `True`。

### 應用
布林值在 JavaScript 中有著廣泛的應用，以下是一些常見的用法。

#### 條件判斷
在[迴圈與判斷式](https://winson-otp.github.io/posts/from-python-to-javascript-ep-5/)中我們提到的條件判斷式，便總是會使用到布林值，有著不可分割的密切關係，例如：
```javascript
let x = 5;

if (x > 3) {
  console.log('x 大於 3');
} else {
  console.log('x 小於等於 3');
}

```

#### 迴圈
在迴圈中，也可以被利用作為程式繼續執行的判斷條件，例如：
```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

#### 函式
而後續會介紹到的函式，回傳的值也可以是一個布林值，例如 `Boolean()` 這個函式便會回傳布林值 `true` 或 `false`。

## 結語
本文介紹了 JavaScript 中布林值的概念、使用方法和常見應用。布林值是 JavaScript 中的基本資料型態之一，通常用於條件判斷和邏輯運算。在學習 JavaScript 過程中，掌握布林值的使用將對理解和應用程式有所幫助。希望本文能對您有所啟發，讓您更深入了解 JavaScript 的世界！

感謝您的閱讀，我們下篇文章再見囉，掰掰！
