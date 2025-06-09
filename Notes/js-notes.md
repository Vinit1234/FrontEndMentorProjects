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