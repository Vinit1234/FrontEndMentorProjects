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