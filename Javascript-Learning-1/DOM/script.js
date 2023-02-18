'use strict';

// DOM

// DOM is document object model. This is basically structured representation of HTML ekements and it allows javascript to manipulate the html elements or code and also allows to manipulate the css styles too . We will be able to change the html text and style too . So basically DOM is a connection pint between html document and the javascript code .

// DOM is already been creted by the browser as soon the HTML page loads and it stored in a tree structure .In this tree structure we have html elements and these html elements can interect with javascript code.

// Document is a special object that we have an acces to javascript and this object works as a entry point to the DOM. For Example we used qurery selector in the down below code to select the elements in html ."document.querySelector" is use to select any element from HTML document.It can be element selector,class or id .To read this we used ".textContent" and it displays into our dev tools console.

console.log(document.querySelector('.right').textContent); //result =>
// Start guessing...
// 💯 Score: 20

//   🥇 Highscore: 0

// As we selected the ".right" which is one of the class in our html document . So we acces that just like we use these classes to make them styling .It means that "document" is an entry point because we start selecting element by this.Whatever is in the html document it would have been in the "DOM" .

// DOM !== javascript
// DOM is not the part of javascript .Js is a part of ecma (ECMAscript) . Dom is part of web Apis . Actually web-apis are the libraries that browser implement and we can acces from our javascript code . Web -Apis are the libraries that are written in javascript language and are available to use for us .
