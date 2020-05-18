# Using the Windows Terminal
If you're not familiar with the terminal, it's a way for you to directly interact with your operating system, and mainly your file system. There's one available on most laptops, and if you plan on using cloud services, you'll usually need a terminal in order to access whatever machine you're spinning up. Windows specifically has a terminal called the command prompt, and this page is a guide on how to use it, along with the most common commands you'll have to know. For every command on this guide, I will list it as "command", but you only need to type command.

## Opening the command prompt
To open the command prompt, hit the search bar in the bottom left and type in **"cmd"**. You should be able to see a "Command Prompt" application, and once it opens, you'll get a black window with a couple letters on the screen. It'll make you look like those hackers from the movies! 

## Important first commands
The first thing to note is that when you open the command prompt, you'll see a file path in white lettering. This is a location in your file system, and it's called the **current directory**. If you ever need to see what directory you are in, simply type in **cd** and hit enter. **cd** stands for current directory if that's all you type. In order to see the files and folders in your current directory, all you have to do is type **dir** and hit enter. If you want to change your current directory into a different folder, type **"cd [folder name]"**, replacing [folder name] with the name of the folder you would like to change to. In this context, **cd** stands for change directory, which can be confusing at first. If you want to change your directory one level up, type **"cd .."** (.. maps to the folder one level above current directory).  

## Creating and deleting folders/directories
Once you have your bearings and can change directories, you can zip around to any point in your file system. When you've found a folder you are comfortable with, you can begin creating or deleting directories. (Side note: the terms "folder" and "directory" are completely interchangeable. They mean exactly the same thing.) Type the command **"mkdir [folder name]"** to create a directory, and you can also type **"rmdir [folder name]"** to delete a directory. Be very careful when doing this: there are no undo commands with a command prompt. Never ever type in a command unless you are fully aware of what it does.

## Creating, reading, and deleting files
Files are a little different from directories, since the easiest way to create them requires you to put some text in them. If you type **"echo some text > file.txt"**, for example, it will create a file called file.txt and place the text "some text" in there. If you want to view the contents of your file from the command line, the command is **"type file.txt"**. Finally, if you want to delete files, simply type **"del file.txt"** and the file is as good as gone. Remember, be careful when deleting files, since there is no undo action in the command prompt.

## Commands summary
* **cd**: outputs the current directory you are in
* **dir**: outputs the files and folders within your current directory
* **cd [folder]**: changes the directory to specified folder
* **mkdir [folder]**: creates a new folder with specified name
* **rmdir [folder]**: deletes specified folder
* **echo text > [file]**: creates a file called "file" and adds "text" to it
* **type [file]**: shows file's contents in command prompt window
* **del [file]**: deletes the specified file
