# Database (SQL, Firebase)

## Introduction
Databases are a unique and essential part of the development world. As with many areas of computer science, there are plenty of options for database usage, but they all of the same function. They provide the very essential **storage** service, meaning they allow you to place whatever information you want in huge quantities and a secure location. There are two main types of databases, depending on whether or not they make use of **Standard Query Language**, or **SQL** for short. 

## SQL vs. NoSQL
SQL databases are the ones that make use of SQL to interact with them, while NoSQL databases usually have some different method of interaction. SQL databases are generally larger and more stable, while NoSQL databases are generally easier to use and more intuitive. Whichever one you use is up to you as well as the kind of app you are making, so choose carefully. This [article](https://www.thorntech.com/2019/03/sql-vs-nosql/) is helpful in figuring out which type is the best choice for your application. I'll go over SQL and NoSQL databases a little more in depth below.

## SQL Databases and the Standard Query Language
As I mentioned earlier, SQL databases are the ones that make use of the standard query language, which is named quite appropriately. It's the standard for database interaction across the industry, and almost every company will have some sort of SQL storage where it stores user, internal, or external data. As such, SQL itself is important to learn for interacting with a database, and its syntax is famously very different from that of other coding languages. I'll go over some helpful commands, but you'll also need to know which environment or database type you'd like to use. They all do effectively the same thing, so I've linked some of the most common ones here:

* [MySQL](https://www.mysql.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [MariaDB](https://go.mariadb.com/download-mariadb-server-community.html?utm_source=google&utm_medium=ppc&utm_campaign=MKG-Search-Google-Branded-NA-bd-Server-DL&gclid=CjwKCAjw5Ij2BRBdEiwA0Frc9QzRkkaIZS2Nw8uB_mOvE-4HCa5jifynBtazrux6jLnNEQ74wVCWqBoCyjwQAvD_BwE0)
* [Amazon RDS](https://aws.amazon.com/rds/)

### Databases and Tables
Whenever you download a SQL database server, you will have access to a number of databases that are hosted on some port within your computer. You are free to create, modify, and delete databases as allowed by your database service, but what you'll really be interacting with are **tables**. Each database has a number of tables, which you'll be storing more specific information in. For example, if you wanted to store user profile information for your app, you may have a table called "Users".

### General SQL Syntax
SQL statements look like the following line. This is one of the most important SQL commands you'll use:

```SQL
SELECT * FROM Users;
```

SQL statements are often portrayed with caps lock commands, which is what makes them look so distinct. Here, **SELECT** is the command, which tells SQL to return the appropriate data. The * tells SQL you'd like to get all attributes, and the **FROM Users** tells SQL you are pulling from the Users table in your database. You can add other things after your commands like sorting or filtering the output, but the base command structure will look much like this.

### Important Commands
* **SELECT**: Returns data from the table as specified by the query
* **UPDATE**: Updates data using a specifier as part of the query
* **DELETE**: Removes records from a database
* **INSERT INTO**: Inserts new data into a database, as specified by the query
* **CREATE DATABASE**: Makes a new database
* **ALTER DATABASE**: Modifies database
* **CREATE TABLE**: Creates a table
* **ALTER TABLE**: Modifies a table
* **DROP TABLE**: Deletes a table
