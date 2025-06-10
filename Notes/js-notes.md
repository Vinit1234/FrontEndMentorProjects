## Why JavaScript?

It's probably not very controversial to say that JavaScript is not the best coding language ever written. 
In fact, it was written in the 90s by a single developer, Brendon Eich, in just ten days. 
The first release of JavaScript had several quirks and idiosyncrasies that made it a little unpredictable. 
Over the years things have slowly improved, but it's still very loose as far as coding languages go.

So why should you learn it? 
Because it's the only language that allows us to create interactions on websites. Yes, really.

JavaScript is unique in that it is an event-based language. With most other coding languages, 
you start a process with a command that runs linearly from start to finish. 
Think of it like a washing machine cycle: you set the parameters at the start (temperature, material, spin speed, etc.), 
load the clothes and the detergent, and hit start. 
The machine then runs a series of steps from start to finish. 
You cannot change it once it's started.

JavaScript, on the other hand, responds in real-time to user interactions. 
This is more like a video game. To do this, JavaScript can perform actions when a user triggers an event. 
That event might be clicking a button, scrolling the page, moving the mouse, or pressing a key on the keyboard. 
Basically, any interaction that you can perform on a web page triggers an event that you can use to perform some action with JavaScript.

Not only that, but more recently, JavaScript frameworks like React, Vue, and Angular 
have become the de facto tools for building entire websites and web applications.

Every website you've been on uses JavaScript in some way, so it's 
essential for front-end web developers to have a good grasp of the language.




```js
const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

```

## Event listener

```js
const button = document.querySelector('button');

// Option 1: direct assignment
button.onclick = function() {
  console.log('You clicked me!');
}

// Option 2: using the `addEventListener` method
button.addEventListener('click', function() {
  console.log('You clicked me!');
});
```

## Function definition vs arrow function

```js
button.addEventListener('click', function() {
  console.log(this); // `this` refers to `button`
});

button.addEventListener('click', () => {
  console.log(this); // `this` is undefined with arrow functions
});
```

If you want to access the button with an arrow function, 
you must pass an argument to the event listener, which refers to the event itself.

```js
button.addEventListener('click', (event) => {
  console.log(event.target); // `event.target` is the element that was clicked
  console.log(event.currentTarget); // `event.currentTarget` is `button`
});
```

`event.target` refers to the actual element that was clicked. Most of the time that would be the element that the event listener was assigned to, but if the element has children and the user clicks one of the children, then event.target would be that child element.

`event.currentTarget` always refers to the element to which the event listener was assigned.

Let’s take a look at an example:

```html
<button>Click me <em>Go on, it'll be fun</em></button>
```

```js
button.addEventListener('click', (event) => {
  console.log(event.target); // This could be the `button` or the `em`, depending what the user actually clicked on
  console.log(event.currentTarget); // This will always be the button
});
```

Sometimes, we want to assign the same event listener to multiple elements. Let’s say we wanted to set the background color of a div based on a button click:

<div id="screen"></div>

<button id="red">Red</button>
<button id="green">Green</button>
<button id="blue">Blue</button>

```html
<div id="screen"></div>

<button id="red">Red</button>
<button id="green">Green</button>
<button id="blue">Blue</button>
```

```js
const screen = document.getElementById('screen');
const redBtn = document.getElementById('red');
const greenBtn = document.getElementById('green');
const blueBtn = document.getElementById('blue');

redBtn.addEventListener('click', (e) => {
  screen.style.backgroundColor = 'red';
}

greenBtn.addEventListener('click', (e) => {
  screen.style.backgroundColor = 'green';
}

blueBtn.addEventListener('click', () => {
  screen.style.backgroundColor = 'blue';
}
```

But we can do the same thing in a couple of lines of code by grabbing all the buttons at once and looping over them:

```js
const buttons = document.querySelectorAll('button');

// with a for loop
for(let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', (e) => {
    screen.style.backgroundColor = e.target.id;
  });
}

// with a for .. in loop
for(const i in buttons) {
  buttons[i].addEventListener('click', (e) => {
    screen.style.backgroundColor = e.target.id;
  });
}

// with a for .. of loop
for(const button of buttons) {
  button.addEventListener('click', (e) => {
    screen.style.backgroundColor = e.target.id;
  });
}

// with a forEach loop
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    screen.style.backgroundColor = e.target.id;
  });
});
```

<hr>


## map() and filter()


```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

```
Here we pass a function into cats.map(), and map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array. In this case the function we provide converts the item to uppercase, so the resulting array contains all our cats in uppercase


<hr>

You can use filter() to test each item in a collection, and create a new collection containing only items that match:
js
```js

function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

 Using function expressions we could rewrite the example above to be much more compact:

```js

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

> **Calculating squares using for loop**

Let's look at a real example so we can visualize what these do more clearly.

```js

const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));

```
```
O/P:
CalculateBtn Clearbtn

1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81

Finished!
```

<hr>

> **Exiting loops with break**

<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>

```

```js
nst contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});
```

> **Skipping iterations with continue**

<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

```js
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});
```

## Events
[See more events here](https://en.wikipedia.org/wiki/DOM_event)

`Event:`	Event is fired
- `click:`	When you press down and release the primary mouse button. Used to track buttons and clickable elemennts

- `mousemove:`	When you move the mouse cursor
- `mouseover:`	When you move the mouse cursor over an element. It's like the CSS hover state
- `mouseout:`	When your mouse cursor moves outside the boundaries of an element
- `dblclick:`	When you click twice
- `DOMContentLoaded:`	When the DOM content is fully loaded
- `keydown:`	When you press a key on your keyboard
- `keyup:`	When you release a key on your keyboard
- `submit:`	When a form is submitted


## on[event] vs addEventListener()

- the addEventListener() method also allows you to attach multiple listeners to the same element as follows:

```html
<body>
  <button id="myBtn">Click Me!</button>
  <script>
    const myBtn = document.querySelector('#myBtn');

    myBtn.addEventListener('click', handleClick);

    myBtn.addEventListener('click', handleClickTwo);

    function handleClick() {
      console.log('Run from handleClick function');
    }

    function handleClickTwo() {
      console.log('Run from handleClickTwo function');
    }
  </script>
</body>
```

When you click on the button above, JavaScript will execute both event listeners.

This is not possible with the onclick property because you can only assign one function as a reference at a time.



## Removing listeners

If you've added an event handler using addEventListener(), you can remove it again using the removeEventListener() method. For example, this would remove the changeBackground() event handler:
js

```js 
btn.removeEventListener("click", changeBackground);
```

Event handlers can also be removed by passing an AbortSignal to addEventListener() and then later calling abort() on the controller owning the AbortSignal. For example, to add an event handler that we can remove with an AbortSignal:

```js

const controller = new AbortController();

btn.addEventListener("click",
  () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal } // pass an AbortSignal to this handler
);
```
Then the event handler created by the code above can be removed like this:

```js

controller.abort(); // removes any/all event handlers associated with this controller
```
For simple, small programs, cleaning up old, unused event handlers isn't necessary, but for larger, more complex programs, it can improve efficiency. Also, the ability to remove event handlers allows you to have the same button performing different actions in different circumstances: all you have to do is add or remove handlers.

## Event object properties

Some event objects add extra properties that are relevant to that particular type of event. For example, the keydown event fires when the user presses a key. Its event object is a KeyboardEvent, which is a specialized Event object with a key property that tells you which key was pressed:
html

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

```js

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
```
## Preventing Default Behavoir

As a developer, you want to prevent the submission to the server and give an error message saying what's wrong and what needs to be done to put things right. Some browsers support automatic form data validation features, but since many don't, you are advised to not rely on those and implement your own validation checks. Let's look at an example.

First, a simple HTML form that requires you to enter your first and last name:
html
```html
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <input id="submit" type="submit" />
  </div>
</form>
<p></p>
```

Now some JavaScript — here we implement a very simple check inside a handler for the submit event (the submit event is fired on a form when it is submitted) that tests whether the text fields are empty. If they are, we call the preventDefault() function on the event object — which stops the form submission — and then display an error message in the paragraph below our form to tell the user what's wrong:
```js

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});
```
Obviously, this is pretty weak form validation — it wouldn't stop the user from validating the form with spaces or numbers entered into the fields, for example — but it is OK for example purposes


## Retrieving elements from the DOM

The most efficient way of selecting an element is by ID, so you should favor using IDs on your DOM elements where possible.

 `getElementById()` is extremely fast because all elements are indexed by their ID in the DOM. `querySelectorAll()` is slower because it has to traverse the DOM tree to make sure it finds all the elements that match the selector.

 We should always be mindful of how we are retrieving elements from the DOM. We should aim to be as efficient as possible:

- Use `getElementById()` where possible.
- Reduce the size of the DOM tree by searching it from a previously retrieved element rather than document.

- Storing elements in variables

Once you have retrieved the elements you want to work with, you should store them in variables to modify them without having to re-retrieve them from the DOM. Remember: DOM traversal is relatively inefficient and should be done as little as possible.


## Reading and modifying the tree
[See more on DOM Manipulation in this link](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces)


```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <input type="button" value="Change this document." />
    <h2>Header</h2>
    <p>Paragraph</p>
  </body>
</html>
```
```js
document.querySelector("input").addEventListener("click", () => {
  // document.getElementsByTagName("h2") returns a NodeList of the <h2>
  // elements in the document, and the first is number 0:
  const header = document.getElementsByTagName("h2").item(0);

  // The firstChild of the header is a Text node:
  header.firstChild.data = "A dynamic document";

  // Now header is "A dynamic document".

  // Access the first paragraph
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "This is the first paragraph.";

  // Create a new Text node for the second paragraph
  const newText = document.createTextNode("This is the second paragraph.");

  // Create a new Element to be the second paragraph
  const newElement = document.createElement("p");

  // Put the text in the paragraph
  newElement.appendChild(newText);

  // Put the paragraph on the end of the document by appending it to
  // the body (which is the parent of para)
  para.parentNode.appendChild(newElement);
});
```

## Creating a tree

You can create the above tree entirely in JavaScript too.
```js

const root = document.createElement("html");
root.lang = "en";

const head = document.createElement("head");
const title = document.createElement("title");
title.appendChild(document.createTextNode("My Document"));
head.appendChild(title);

const body = document.createElement("body");
const header = document.createElement("h1");
header.appendChild(document.createTextNode("Header"));
const paragraph = document.createElement("p");
paragraph.appendChild(document.createTextNode("Paragraph"));
body.appendChild(header);
body.appendChild(paragraph);

root.appendChild(head);
root.appendChild(body);
```

> Other example: 

The following code is a modified version in which each cell of the second column is hidden and each cell of the first column is changed to have a red background. Note that the style property was set directly.

```js
const myBody = document.getElementsByTagName("body")[0];
const myTable = myBody.getElementsByTagName("table")[0];
const myTableBody = myTable.getElementsByTagName("tbody")[0];
const myRow = myTableBody.getElementsByTagName("tr")[1];
const myCell = myRow.getElementsByTagName("td")[1];

// first item element of the childNodes list of myCell
const myCellText = myCell.childNodes[0];

// content of currentText is the data content of myCellText
const currentText = document.createTextNode(myCellText.data);
myBody.appendChild(currentText);
```

## Some more DOM manipulation methods

- `element.classList.replace('oldClass', 'newClass');`
```js
const p = document.querySelector('.myParagraph');

// add a class to the element
p.classList.add('color-primary');

// replace a class
p.classList.replace('color-primary', 'color-secondary');

// remove a class
p.classList.remove('color-secondary');
```

- At times, you might need to apply CSS directly to the DOM element you selected.

```js
const p = document.querySelector('.myParagraph');

p.style.fontWeight = '700'; // set font weight
p.style.textTransform = 'uppercase'; // set to uppercase
p.style.color = '#007bff'; // set color
p.style.border = '1px solid black';

```
If you want to remove an element, you can call the remove() method from the element you want to remove.
`element.remove()`


- element.insertBefore(new_elem, existing_elem)

```js

let p2 = document.createElement('p');

p2.innerText = 'The second paragraph';

let body = document.querySelector('body');
let p1 = document.querySelector('#first');

body.insertBefore(p2, p1);

```
- You use the append() method to insert an element at the last position, and if you want to control the position, use the insertBefore() method.

- use both setAttribute() and getAttribute() methods to interact with any HTML attributes.

- If you want to delete an attribute, use the removeAttribute() method.


```js
// Select the div
let myDiv = document.querySelector('#intro');

// Access the dataset property
console.log(myDiv.dataset.session) // 2022

// Use camelCase when your data attribute is more than one word
console.log(myDiv.dataset.attributeTheme) // light

```
## Favour style updates rather than modifying the DOM

Often, we want to add or remove some elements from the screen. Adding and removing DOM elements is less efficient than simply setting display: none or display: block on an element that already exists in the DOM tree.

You can also modify an element’s styles by adding or removing classes that have CSS styles associated with them in a stylesheet:

```js
button.className = 'hidden'
```
However, this will override existing classes, so you must be careful not to remove classes added for base styling. Instead, we can use the classList property, which has the following methods:

    add: add a class (if it’s not already there).
    remove: remove a class (if it is already there).
    toggle: remove the class if it’s there and add it if not.

This makes managing classes with JavaScript a lot easier:

```js
button.className = 'active' // className is 'active'
button.classList.add('hidden') // className is 'active hidden'
button.classList.add('hidden') // className is still 'active hidden'
button.classList.toggle('active') // className is 'hidden'
button.classList.toggle('alert') // className is 'hidden alert'
button.classList.remove('hidden') // className is 'alert'
```

## Modifying Styles


```js
// Select div
const div = document.querySelector('div');

// Apply style to div
div.setAttribute('style', 'text-align: center');
```

**NOTE**: However, this will remove all existing inline styles from the element. Since this is likely not the intended effect, it is better to use the style attribute directly.

```js
div.style.height = '100px';
div.style.width = '100px';
div.style.border = '2px solid black';

// Make div into a circle and vertically center the text
div.style.borderRadius = '50%';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
```


## Function definition vs arrow function

```js
button.addEventListener('click', function() {
  console.log(this); // `this` refers to `button`
});

button.addEventListener('click', () => {
  console.log(this); // `this` is undefined with arrow functions
});
```

If you want to access the button with an arrow function, you must pass an argument to the event listener, which refers to the event itself.

```js
button.addEventListener('click', (event) => {
  console.log(event.target); // `event.target` is the element that was clicked
  console.log(event.currentTarget); // `event.currentTarget` is `button`
});
```