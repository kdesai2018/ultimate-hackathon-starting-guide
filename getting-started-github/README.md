# Getting started with Github

![XKCD Git Comic](https://imgs.xkcd.com/comics/git.png "Source: xkcd.com)

## What is Github?
**Git** is a distributed version-control system created by Linux Torvalds (creator of the Linux OS). **GitHub** is a company headquartered in San Francisco, CA that provides end-to-end git hosting. Knowing the difference between these two isn't integral, but might prevent you from making an embarassing mistake. 

Programmers use Git to store multiple versions of their code (hence the name Version Control System (VCS)). Github is the most popular platform to host these revisions. In fact, you're looking at this code on a Github repository right now! Github will allow you to share your code, collaborate with other developers and test certain aspects of your codebase! There are competitors to Github out there (like Bitbucket), but since I haven't used them, I won't comment on their functionality/usefulness. For hackathon purposes, Github can be really useful for collaborating with teammates and making sure changes don't get lost.

## How is Github organized?
Your code lives in this object called a **repository** (repo). Within that repository, you can have branches, issues, pull requests and a LOT more. Don't get overwhelmed though, for a hackathon you don't need to use all these features. Just follow along with this guide, and we'll have you and your team up and running in no time. 

## How do I set it up on my computer?
Quick side note: [This official tutorial](https://help.github.com/en/github/getting-started-with-github/set-up-git) is pretty good at explaining how to use certain features of Github. However, I didn't really think it was very useful when I was a beginner. I'll do my best to break down essential steps in this guide, but refer to the tutorial to see specific buttons to click on. 

First of all, register for an account on the [website](github.com). Next, if you are a new to git, I'd recommend downloading the desktop version of github just to help you get everything on a GUI (Graphical User Interface). As you get more advanced, you might find yourself ditching the GUI all together in favor of the terminal/command line, but we don't need to worry about that yet. 

Once you have Github Desktop installed, we can get started. Create a repository on the website (github.com) when you're logged in. Once you have created it, you should **clone** it to your computer using the Github desktop program. **Clone** means to copy the code exactly as it is on the Github server to your local computer. Once you clone it, you should be able to navigate back to it on your computer and make changes locally. 

Go ahead and add a file. It doesn't have to be code, Github supports uploading almost any type of file (.pdf, .py, .o, etc.). Once you have added a file to the repository folder, navigate back to Github Desktop. You need to **commit** your changes. Ideally, you want to commit ever so often when you are working on a project. Think of it like hitting "save" on a word document. That's not what really happens behind the scenes at all, but its a pretty basic analogy that lets you get past this initial hurdle. You will also have to enter a commit message on the desktop app. This isn't always required, but usually it helps your teammates know what changes you made. This might also come in handy if (or when) you accidentally save a bug, and need to **revert** back to an older version. Check out the "Where can I learn more?" section for a couple resources for this.

Once you have committed your changes, you should **push** them. **Pushing** is when you send the changes you have made to the remote git repository. Remember this order - first you **commit**, then you **push**.

You're done! You just made a file, committed it, and pushed it to the remote repository. If you refresh the browser page that holds your online repo, you should see the file you made along with your unique commit message. 

## How does my team work together?
This is a little bit of an advanced topic, but its integral if you are working on a team. The obvious flaw with the method I described earlier is if multiple people attempt to push conflicting changes to the same repository at the same time. **Branches** solve this problem in a pretty elegant way. To understand them way better than I could ever explain, read [this](https://codesource.io/understanding-branching-in-git/). 

For my teams, we have one repo and everyone is added on as a [collaborator](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository). Next, we have everyone make their own branch and we keep the **master** branch separate. This makes sure no one pushes untested code directly to our current product. Everyone pushes their changes to their own branch (as detailed above), and then makes a **pull request** to master. To learn how to do this, follow [this](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request). This way, everyone can review the proposed changes before **merging** (combining) the changes with the main master branch. 

Remember to **pull** changes from the remote branch to your local copy whenever your teammate makes a change. This ensures that everyone has the most up to date version of the code, and no one is working on an already solved bug. 

## What are "Merge Conflicts and how do I fix them?
First of all, take a deep breath. While merge conflicts may look complex, they're actually caused by a pretty simple reason. This is when your teammate and you both push conflicting changes to the same branch. A couple cases:
(You are "you" and your teammate is A)

1. Both of you are working on the master branch. There is a file - app.py - already checked into github. A changes function foo() in app.py, and pushs this change to the remote master branch (seen on your browser). However, you don't realize they pushed this change (aka you don't **pull** their changes), and delete function foo(). When you attempt to push your change, the Github server will spit out a "merge conflict...." error.

2. Both of you are using pull requests and merge requests (like real hackers). However, if A merges a change to foo(), and then you attempt to merge a pull request where you delete foo(), you will once again see a merge conflict. 

It's a lot easier to fix merge conflicts if you're using a git-integrated IDE. Luckily for you, most modern IDE's are integrated with git, and you can also get git plugins for vim and emacs (eew). I'm going to let [this tutorial](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github) explain how to fix merge conflicts in the second case above. 

However, if you both are working on master, its not so easy to fix. [This tutorial](https://rollout.io/blog/resolve-github-merge-conflicts/) does a pretty good job explaining the official ways to fix your merge conflicts. However, if you aren't used to git on the terminal this might get a little complicated. 

A (very hacky) way of fixing the first case of merge conflicts is as follows. For larger edits, you're better off using the last tutorial I posted (with the terminal instructions). However, here's a quick shortcut for smaller conflicts. 
1. Copy your modified code in app.py into a new file (eg: temp.py), that is untracked by github
2. Open up a terminal and navigate to the relevant git repository. 
3. Run the command: 'git stash' 
4. Run the command: 'git pull' when you are in the same repository. 
5. Manually reapply the changes you copied over to temp,py.
6. Run the typical commands: 'git add .', 'git commit -m "fixing merge conflicts"', 'git push'

Note that this solution is only useful if you've made very minor changes to app.py, and you have some basic familiarity with the [terminal](https://github.com/kdesai2018/ultimate-hackathon-starting-guide/blob/master/getting-started-terminal/README.md). If this looks too daunting, your best bet may be to ask a mentor at the hackathon or attempt to follow one of the guides above. 


## Where can I learn more?
This is only the tip of the iceberg when it comes to Git and Github. Once you gain experience and confidence, you'll find yourself using git functions like rebase, fetch, diff, tag and config. To learn more about these, here are a couple tutorials I'd recommend. 

1. [Good slideshow for complete beginners] (https://www.slideshare.net/HubSpot/git-101-git-and-github-for-beginners) and the [corresponding blog post](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)
2. [Pretty comprehensive tutorials on git, but no github specific info](https://www.atlassian.com/git/tutorials). If you're using github, then these mostly serve to help you learn the theory behind git. 
3. Cool interactive [tool](https://learngitbranching.js.org) hosted on....Github! HIGHLY RECOMMENDED for people confused by my rambling tutorial. 

Before hopping too deep into any of these though, I'd recommend just going up and asking a mentor/company rep for help. Odds are that they use Github (or another git hosting service) at work, and can probably solve your problem within minutes. This will give you more time to focus on building.
