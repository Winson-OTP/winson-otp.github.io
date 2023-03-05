---
title: 站在 Python 的肩膀上開啟 JavaScript 的大門，用 Py 角度學 JS | Ep. 7 字串處理
author: winsonotp
date: 2023-03-05 16:34:30 +0800
categories: [教學, 程式]
tags: [Python, JavaScript]
---
> 這個系列帶著各位通過Python的角度，開始認識JavaScript這個實用的程式語言。專為曾經學習Python或認識Python，並且想學習JavaScript的人們設計，將會頻繁的提到每一種函式或語法與Python相關之處，便於將理解的知識再次利用，從中學習！

## 前言
在JavaScript中，字串處理是一個常見的任務。JavaScript中提供了許多內置函式，可以讓開發人員方便地處理字串。下面是一些常用的字串處理函式：

1. length：字串長度
2. charAt：指定位置字元
3. concat：字串相連
4. indexOf：指定字串第一次出現位置
5. lastIndexOf：指定字串最後一次出現位置
6. slice：提取指定位置間的字串
7. substr：指定位置開始提取指定位數的字串
8. replace：取代指定字串
9. split：切割字串
10. toLowerCase/toUpperCase：英語大小寫轉換

而在 Python 的類似對應函式如下：

1. len：字串長度
2. [index]：指定位置字元，其中index是整數值
3. +：字串相連
4. index：指定字串第一次出現位置
5. rindex：指定字串最後一次出現位置
6. [start:end]：提取指定位置間的字串
7. [start:start+length]：指定位置開始提取指定位數的字串
8. replace：取代指定字串
9. split：切割字串
10. lower/upper：英語大小寫轉換

接著讓我們來一個一個了解 JavaScript 中每一個字串相關處理函式的用法！

## 字串處理
範例中的 `str` 指的是一個字串，可以是變數或是以 `'` 或 `"` 的字串。
### length() 字串長度
用法：`str.length`

用途：`length()` 函式可以用於取得字串的長度。

範例：
```javascript
const str = "Hello World";
console.log(str.length); // 11
```

### charAt() 指定位置字元
用法：`str.charAt(index)`

`index`：要取字元的位置，由0開始為第一位，以此類推

用途：`charAt()` 函式可以取得字串中指定位置的字元。

範例：
```javascript
const str = "Hello World";
console.log(str.charAt(1)); // e
```

### concat() 字串相連
用法：`str.concat(str1, str2, ..., strX)`

`str1`：一個字串，並且若要相接多個字串可以使用逗號分隔

用途：`concat()` 函式可以將多個字串相連接成一個新的字串。

範例：
```javascript
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // Hello World
```

### indexOf() 指定字串第一次出現位置
用法：`str.indexOf(searchValue, fromIndex)`

`searchValue`：要搜尋的內容
`fromIndex`：指定開始搜索的位置

用途：`indexOf()` 函式可以取得字串中指定字串的第一次出現位置。

範例：
```javascript
const str = "Hello World";
console.log(str.indexOf("o")); // 4
```

### lastIndexOf() 指定字串最後一次出現位置
用法：`str.lastIndexOf(searchValue, fromIndex)`

`searchValue`：要搜尋的內容
`fromIndex`：指定開始搜索的位置

用途：`lastIndexOf()` 函式可以取得字串中指定字串的最後一次出現位置。

範例：
```javascript
const str = "Hello World";
console.log(str.lastIndexOf("o")); // 7
```

### slice() 提取指定位置間的字串
用法：`str.slice(beginIndex, endIndex)`

`beginIndex`：開始搜尋的位置
`endIndex`：結束搜尋的位置

用途：`slice()` 函式可以提取字串中指定位置間的字串。

範例：
```javascript
const str = "Hello World";
console.log(str.slice(0, 5)); // Hello
```

### substr() 指定位置開始提取指定位數的字串
用法：`str.substr(start, length)`

`start`：開始提取的位置
`length`：要提取出的長度

用途：`substr()` 函式可以從指定位置開始提取指定長度的字串。

範例：
```javascript
const str = "Hello World";
console.log(str.substr(6, 5)); // World
```

### replace() 取代指定字串
用法：`str.replace(searchValue, replaceValue)`

`searchValue`：要尋找的字串
`replaceValue`：要取代為的字串

用途：`replace()` 函式可以將字串中的指定字串取代為新的字串。

範例：
```javascript
const str = "Hello World";
console.log(str.replace("World", "JavaScript")); // Hello JavaScript
```

### split() 切割字串
用法：`str.split(separator, limit)`

`separator`：做為分割的依據
`limit`：限制切割後陣列的長度

用途：`split()` 函式可以將一個字串根據指定分隔符號分割成一個陣列，每個分割後的子字串都是陣列中的一個元素。

範例：
```javascript
const str = "Apple,Banana,Mango";
const fruits = str.split(",");
console.log(fruits); // ["Apple", "Banana", "Mango"]
```

### toLowerCase()/toUpperCase() 英語大小寫轉換
用法：`str.toLowerCase()`/`str.toUpperCase()`

用途：`toLowerCase()` 與 `toUpperCase()` 函式分別用於將一個字串轉換成小寫與大寫。

範例：
```javascript
const str1 = "Hello World!";
const str2 = "JAVASCRIPT";
console.log(str1.toLowerCase()); // "hello world!"
console.log(str2.toUpperCase()); // "JAVASCRIPT"
```

## 結語
JavaScript 中的字串處理在程式語言中扮演著非常重要的角色，因為有著非常多的程式都會牽涉到字串的處理。透過這個系列，我們用 Python 的角度學習 JavaScript 中常用的字串處理函式，並且將 Python 中的相關函式做出對應，使得學習者可以更輕易地通過已知的觀念，來了解新的知識。

在本篇文章中，我們介紹了 JavaScript 中的常用字串處理函式，包括 length、charAt、concat、indexOf、lastIndexOf、slice、substr、replace、split 以及 toLowerCase/toUpperCase。並且也提供了 Python 中的相似對應函式，方便學習者可以快速找到參照。

學習程式語言的真諦，並不是僅僅背起所有的語法，更要學會應用的方式。這篇文章中除了介紹每一個函式外，亦各舉出一個例子，方便更好的理解與學習。期望在未來的學習過程中，各位讀者可以更輕鬆地掌握各種 JavaScript 的知識。

最後，字串處理函式只是程式中非常小的一部分，還有許多其他的語法與函式等待各位去探索。希望透過這個系列，可以為學習者的學習之路帶來一些幫助和啟示，也懇請各位多多關注與追蹤，也歡迎留言回饋！
