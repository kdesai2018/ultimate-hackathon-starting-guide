## Front-end Development
The distinction between front-end and back-end is crucial. Front-end code refers to what creates the webpage that users see, and the primary languages used in front-end development are **HTML, CSS, and Javascript (JS)**. HTML, or HyperText Markup Language, is what defines the content on a webpage, while CSS, or Cascading Style Sheets, is what helps format it to make it look nice. Using just these two, you can make some really cool looking sites, but they won't actually be able to interact with running code unless you make use of JavaScript. While there are plenty of frameworks and tools to make front-end development easier, knowing these three is vital to becoming a good web developer. I've linked some helpful tutorials for each of these 3 below. I recommend starting with HTML, and then moving on to CSS and JavaScript when you feel comfortable.

* [HTML 1](https://www.w3schools.com/html/), [HTML 2](https://html.com/), [HTML 3](https://www.tutorialspoint.com/html/index.htm)
* [CSS 1](https://www.w3schools.com/css/), [CSS 2](https://www.tutorialspoint.com/css/index.htm), [CSS 3](https://www.csstutorial.net/)
* [JS 1](https://www.w3schools.com/js/), [JS 2](https://javascript.info/)

One important thing to remember, which may seem rather trivial, is to ensure you have the correct file types for each type of file. HTML files should use the **.html** extension, and CSS/JS files should use **.css** and **.js** respectively. Without these, your website will not know which files to look in for which information, and stuff won't work properly.

### Linking HTML, CSS, and JavaScript
The best way to use these three languages is to have them in their own files, and link them through the header of your HTML file. Each HTML file should have a <head> tag somewhere towards the top, and inside this tag, you'll want to link your CSS and JavaScript like this:

```html
<link rel="stylesheet" type="text/css" href="[NAME OF CSS FILE HERE]"/>
<script src="[NAME OF JS FILE HERE]">
```

If you need your files linked in a specific order, make sure to get the order right so they can find the correct information. Also, the most common names for files are **index.html, style.css, and app.js**, which you may find all over the tutorials.

### CSS Warning
One of the most common bugs beginners face in front-end development cycles is updating CSS but it not showing up on the HTML page you have pulled up, even if you refresh. This is usually because your web browser went ahead and stored your old CSS file so it wouldn't have to access it all over again from the file system, and is therefore not seeing any changes you recently made. If you want to force your browser to pull the new CSS file, you'll need to delete its cache/memory by doing a hard refresh, which is **Ctrl + f5**, at least on Windows.
