# Back-end Development
Back-end development, as I mentioned earlier, is the process of coding an information base for the front-end. It's main purpose is to respond to the front-end whenever it receives a **request**, while also running any data calculations or logic. Most websites have a back-end that is split into two sections; a **middleware** section and a **database** section. Databases have their own folder in this guide, so I will go into middleware here.

## Popular Libraries
There are plenty of popular ways to create HTML backends, so much so that your favorite language probably has a method for doing so. Old sites rely on **PHP**, while newer ones rely on more robust languages like **Java** and **Python**. I've attached links here for all of my favorite back-end libraries, but keep in mind there are plenty more than this.

* [PHP](https://www.w3schools.com/php/DEFAULT.asp)
* [Flask (Python)](https://flask.palletsprojects.com/en/1.1.x/tutorial/)
* [Spring Boot (Java, somewhat complicated)](https://spring.io/guides/gs/spring-boot/)

As usual, it never hurts to know more than one of these, but I think it's wisest to pick one and stick with it until you get really good at it. Flask is a perfect middle-ground for beginners: it is lightweight and easy to use, but has the same structure as many back-ends across the tech industry.

## Basic Flask Structure
I've placed a hello world Flask file in this folder, and there are a couple key things to note. The following line is what defines the url to go to.

```python
@app.route('/hello')
```

This line basically says: "When someone types in "localhost:5000/hello" in to their browser, you will return the following code." The rest of the code defines what to return. While it's a simple String for now, it can be any sort of data structure in a JSON format, and you'll find more information on this in the Flask tutorials. 

### Running your Flask app
Once you've got the hello world file saved, running your app is relatively easy. Find the file in your command prompt or terminal. If you need help doing this, check out the getting-started-terminal folder in this guide. Once you're there, you need to set the environment variable FLASK_APP to be the name of your python file. For example, if you called your file **hello.py**, you need to write either **set FLASK_APP=hello.py** into the windows terminal or **export FLASK_APP=hello.py** in a Linux terminal. Finally, just type the command **flask run**, and you should be able to see the following output:

```
 * Serving Flask app "application.py"
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

If you see this, congratulations! You've successfully run your Flask app. All you need to do to see it is go to http://127.0.0.1:5000/hello or whatever URL you were given in a browser like Chrome, and you should be able to see your returned message.
