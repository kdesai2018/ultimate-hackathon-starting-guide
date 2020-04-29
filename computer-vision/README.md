# Computer Vision (OpenCV)

## What is Computer Vision
Computer Vision (CV) is a rapidly evolving field with applications in robotics, artificial intelligence and many other fields. For the purposes of a hackathon, computer vision projects typically include some type of real world video data (captured from a webcam). 

CV projects at hackathons are not usually centered around vision related tasks. The best projects combine video data with some other form of analysis (eg: audio simulation, ML, image processing, etc). Therefore, make sure that your team doesn't solely focus on the CV aspect and lose sight of the bigger picture. 

## Example Projects
Here are a couple of the coolest hackathon CV related projects I've seen (in no particular order). This is by no means a complete list, so feel free to suggest any updates you would like to see :)
1. [NavAssistAI](https://devpost.com/software/navassistai) - This project won the Tensorflow World 2.0 Challenge, and attempts to help visually impaired individuals cross the street using [machine learning](https://github.com/kdesai2018/ultimate-hackathon-starting-guide/blob/master/machine-learning/README.md). I like this project because its very applicable and usable in real life. 

2. [BEVO](https://devpost.com/software/bevo-blindenvironmentvisualizationoperations) - This was a really fun project to make (shameless self-plug, I know) at TamuHack 2020. It takes in input from a webcam (simulating eyes), and continuously runs an object recognition algorithm on the video to locate a specific object along with the users hand. This project uses a variety of different topics ranging from NLP (on Google Cloud), object recognition (using Tensorflow) and CV (using OpenCV). 

3. [fingerpaint](https://devpost.com/software/fingerpaint-skux6y) - A really cool project by a couple friends of mine at HackMIT 2019. They used OpenCV to simulate a drawing tool (similar to MS Paint), but with your finger as the paintbrush. 

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

These sites are just a starting point - there is no substitute for getting your hands messy quickly. Fire up a venv (or conda env) and get started! 

