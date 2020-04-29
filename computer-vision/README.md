# Computer Vision (OpenCV)

## What is Computer Vision and when do I need it?
Computer Vision (CV) is a rapidly evolving field with applications in robotics, artificial intelligence and many other fields. For the purposes of a hackathon, computer vision projects typically include some type of real world video data (captured from a webcam). 

CV projects at hackathons are not usually centered around vision related tasks. The best projects combine video data with some other form of analysis (eg: audio simulation, ML, image processing, etc). Therefore, make sure that your team doesn't solely focus on the CV aspect and lose sight of the bigger picture.

CV projects don't have to be limited to video! I've seen cool projects that work with photo segmentation, filter overlays and much more. If your project is aimed at solving a real-world problem, CV might be appropriate for your project. This can range over everything from accessibility hacks, utilities and games. Good luck!

## Example Projects
Here are a couple of the coolest hackathon CV related projects I've seen (in no particular order). This is by no means a complete list, so feel free to suggest any updates you would like to see :)
1. [NavAssistAI](https://devpost.com/software/navassistai) - This project won the Tensorflow World 2.0 Challenge, and attempts to help visually impaired individuals cross the street using [machine learning](https://github.com/kdesai2018/ultimate-hackathon-starting-guide/blob/master/machine-learning/README.md). I like this project because its very applicable and usable in real life. 

2. [BEVO](https://devpost.com/software/bevo-blindenvironmentvisualizationoperations) - This was a really fun project to make (shameless self-plug, I know) at TamuHack 2020. It takes in input from a webcam (simulating eyes), and continuously runs an object recognition algorithm on the video to locate a specific object along with the users hand. This project uses a variety of different topics ranging from NLP (on Google Cloud), object recognition (using Tensorflow) and CV (using OpenCV). 

3. [fingerpaint](https://devpost.com/software/fingerpaint-skux6y) - A really cool project by a couple friends of mine at HackMIT 2019. They used OpenCV to simulate a drawing tool (similar to MS Paint), but with your finger as the paintbrush. 

4. [StickyAR](https://devpost.com/software/stickyar) - Fun game built at HackMIT that takes a more light-hearted approach to CV. These hackers used OpenCV to detect sticky notes in a frame, and let the end user play a game using those sticky notes!

There are a lot more! Browse [devpost](https://devpost.com) to see more cool projects. 

## Tools and libraries to get you started
If you're gonna do any kind of CV project, I'd highly recommend python. There is a lot of documentation/tutorials for common CV related libraries online. C++ and Java are also pretty popular options, but I can't speak to their usability (if you can, please contribute!).

If you haven't been able to tell yet, the most popular CV library is [OpenCV](opencv.org). There's a whole bunch of documentation out there for this, I'll link a couple python tutorials I found really useful down below. The best part about this library is that it works right out of the box (for the most part), allowing you to get the video data you need quickly and move right on integrating other technologies. 

Another super useful (python) package to check out is the [face-recognition](https://github.com/ageitgey/face_recognition) package on PyPI. Again, this module works out of the box, allowing you to get the data you need quickly. The easiest things to do using this library are finding/recognizing known faces. With a little practice and digging though, you can delve deeper and get different facial "landmarks" (Landmarks is just a fancy term referring to the various features on a face - eyes, nose, mouth, stuff like that). The best resource for using this library is the examples folder in their github. For hackathon purposes, its usually easiest to copy one of their examples and add your own modifications. 

I built a cool little project using facial landmarks to detect if the person in front of the camera has fallen asleep ([drowsy-driver](https://github.com/kdesai2018/drowsy-driver)). Again, this project puts together a bunch of technologies - Google Maps API, arduino controlled hardware and the python VLC library for audio. 

## Takeaways
Computer Vision is a really useful tool for any hackathon project. However, it works best in conjuction with another technology, so finding a cool way to integrate it is key. One caveat, however, is that CV might not be necessary for your project, especially if there is existing data on the internet that can serve your needs. Good luck!

## Resources I promised to link
1. [Official OpenCV tutorial](https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_tutorials.html)
2. [Walks you through how to set up environment - for absolute beginners](https://towardsdatascience.com/computer-vision-for-beginners-part-1-7cca775f58ef?gi=b8f07802223d)
3. [one of the most useful blogs I've found about advanced OpenCV + Python operations](https://www.pyimagesearch.com). Navigate this site using the "Topics" dropdown. 

These sites are just a starting point - there is no substitute for getting your hands messy quickly. Fire up a venv or conda env (see note below) and get started! 

### What is venv and/or conda env
Good question. We'll definitely try to include a more thorough explanation somewhere else in this repo, but heres the gist of it. 

When you're working on a large python project, you often have multiple dependencies (modules that your code needs to run). These dependencies may conflict with other programs on your computer, forcing you to spend time debugging. Venv (python's virtual environment library) and anaconda (data science python based platform) environments help take the stress out of handling your dependencies. A virtual environment has its own version of python, pip (pythons default package manager) and all modules that you installed. This ensures that your versions don't conflict with each other. In an ideal world, if all your team members have an identical virtualenvironment set up, then there should be no differences between running the code. 

You can use either conda environments, or virtual environments. Conda is more stable, so preferred for larger projects. However, virtualenv is typically easier to get set up (in my experience). I'll link resources to installing and running both below. 

#### Virtualenv
[virtualenv tutorial](https://www.pythonforbeginners.com/basics/how-to-use-python-virtualenv) - just follow the instructions on your terminal
[official python docs](https://virtualenv.pypa.io/en/latest/)

#### conda
[installing conda](https://docs.conda.io/projects/conda/en/latest/user-guide/install/) - installing miniconda works too, especially if you don't need all the features [conda](https://stackoverflow.com/questions/45421163/anaconda-vs-miniconda), but I'd recommend insalling the full anaconda package to make your life easier. 

[setting up conda env](https://uoa-eresearch.github.io/eresearch-cookbook/recipe/2014/11/20/conda/)



