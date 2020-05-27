# Authentication 
## Introduction

This tutorial will introduce the basics of authentication, implemented for both websites and mobile applications.  The code and ideas presented here **should only be used in a hackathon environment**.  In a production environment, most of the tatics listed here would not be secure enough, and may leave ways for determined hackers to access sensitive information.  The code here utilizes mostly Javascript and MongoDB.

## Basics
Authentication is the process of verifying the identity of users to protect their data.  The code presented here is used to create users, validate them (log in), access secure data, and log them out.  Authentication should only be added in cases where there are unique users each with their own, sensitive data or access to sensitive data.  For instance, suppose we had a website where some sort of administrator panel was necessary (like a hackathon registration website).  In this case, we would use authentication to ensure that a user trying to access administrator function is actually an administrator.  An example where authentication is not necessary is storing the high scores in a simple game (ex. Tetris).  Since none of the users are storing sensitive data nor able to access sensitive data, authentication may not be necessary in this case.  
  
Both systems of authentification utilize the same system to register users.  However, the implementation of login/logout will differ between platforms.   

Registering users is a relatively simple process, mostly involving collecting all of the users data in some sort of form then inserting all of this data into the database.  However, there is one main issues: storing passwords.  Prior to storing the passwords, it is important to salt and hash them for the safety of the users.  ```bcrypt``` should take care of this process.  

As for logging in and logging out users, this process is slightly more involved.  Another form will be used here, with one field for a username (this can be an actual username, an email, an id, etc.) and one for a password.  This time, after receiving a request, the server will do two things.  Firstly, the server will determine whether a user exists given the username.  Afterward, the server will compare the hashed versions of the submitted password and the one stored in the database. However, what happens after will be platform dependent.

## Website Specific Authentication

For authentication with websites, we will rely on using node.js sessions (cookies).  These sessions are necessary to ensure that after a user is logged in, the user "stays logged in."  After verifying a user trying to log in, the next step is to save some unique field of the user to the session.  In our case, we will use MongoDB's "_id" field.  After storing this data, we will rely on express.js middleware to constantly fetch and update the user information while the user is logged in.  Any routes that may require authentification will utilize middleware in order to ensure that a user is logged in prior to accessing those routes.  Upon logging out of a website, we will destroy the session.

## Mobile Specific Authentication

Mobile authentification adds a twist.  On mobile, node.js sessions will not work, thus we will rely on JWT (JSON Web Token) to facilitate authentification.  This token will be physically stored on the device (ex. ```async-storage``` for React Native), and will be sent to the server when any routes involving user sensitive information.  Upon validation of this token, the server will then be able to return user sensitive data.  Thus, it is important to treat authentification tokens as if there were passwords, as they essentially follow the same function.

