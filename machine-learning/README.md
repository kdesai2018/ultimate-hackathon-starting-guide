# Machine Learning (Keras, PyTorch, Tensorflow)

## What is Machine Learning and Why Would I Use it?
Machine Learning is a broad umbrella for methods of developing artificial intelligence, which is generally used to find patterns in large data sets based on mathematical and statistical calculations. This becomes very useful when a phenomena cannot be modeled by a deterministic algorithm.   

Before proceeding with this guide, check out [this](https://docs.google.com/presentation/d/1EImakverhNq-WhJwd-WIx2H04ZnCyUxsFk-9UcKoubQ/edit?usp=sharing) presentation made by Freetail Hackers. It's a quick overview about what AI is and a couple useful subfields within this space.

In the context of a Hackathon, Machine Learning is designed to target a single problem with specific input parameters that can then be consistently replicated on a large scale and thus is most commonly used to develop an market solution tailored to a **specific company challenge or a specific social problem.** 

The great thing about Machine Learning is that it is applicable to most modern day problems. This ranges from economics, where ML is being used to developing models to predict stock prices (quantitative analysis, a very lucrative field), to the medical field, where ML is being used to analyze X-Rays to determine if a patient has cancer.

ML can be applied to solve a problem faster and more efficiently anywhere we would normally use our intuition to predict a pattern!

## Example Projects
Here are some cool ML hackathon projects as inspiration to get started!

1. [NavAssistAI](https://devpost.com/software/navassistai) - This project won the Tensorflow World 2.0 Challenge, and attempts to help visually impaired individuals cross the street using machine learning. I like this project because its very applicable and usable in real life. 

2. [Coughvid](https://devpost.com/software/coughvid-ai-based-app-for-covid-19-screening-using-coughing) - This project placed 3rd at LauzHack for COVID. It uses ML to analyze coughing sounds and symptoms to predict if a patient has COVID-19.

3. [ColorMe](https://devpost.com/software/colorme-50fz68) - A unique project which uses Image Analysis to predict what color palettes for clothing would look best on the user.

4. [GazePay](https://devpost.com/software/gazepay) - A project from nwHacks 2018 that uses neural networks for facial recognition to make paying easier.

There are a lot more! Browse [devpost](https://devpost.com) to see more cool projects. 

## Tools and libraries to get you started
If you're gonna do any kind of ML project, I'd highly recommend Python. Many common Python ML libraries such as Keras, PyTorch, and Tensorflow abstract a lot of the process (math) for you so that you can focus on the bigger picture! This is especially good for beginners who may not understand everything that is going on behind the scenes just yet. C++ and Java are also pretty popular options, but I can't speak to their usability.

Keras, PyTorch, and Tensorflow have a whole bunch of documentation out there for how to set them up, and how to use them. I'll link a couple python tutorials I found really useful down below. The best part about this library is that it works right out of the box (for the most part), allowing you to quickly move right on integrating it with the rest of the project.

You will most likely have to look into these frameworks to decide which one is the right fit for your project, but here are some general differences as a starting point:

Keras (Recommended for beginners and small datasets):
  - High level API (Abstracts things more)
  - Slower runtimes(Shouldn't matter too much in this context)
  - Simplest to use
  - Least lines of code
  - Less accurate models
  - Simple models with minial debugging  
  
Tensorflow (Recommended for experienced users and high performance models despite smaller datasets):
  - High and Low level API's
  - Faster runtimes
  - Harder to use
  - Reduced code needed
  - Accurate models
  - Hard to debug  
  
 PyTorch (Recommended for machine learning gods and high performance models with large datasets):
  - Low Level API
  - Faster runtimes
  - Hardest to use
  - Most lines of code needed
  - Extremely accurate models
  - Good debugging support
  

## Pros and Cons
While ML is indeed very flashy, it also has some not-so-flashy aspects, which I will cover so you can consider if incorporating ML into your project is a good fit  
Pros:
  - Very relevant in the field of software development
  - Very flashy
  - Very powerful libraries
  - Generally beginner friendly
  - Applicable to many projects  
  
Cons:
  - Long installation (You'll probably spend more time installing dependancies and libraries than actually working on your project)
  - Needs large dataset (Machine Learning generally needs extremely large datasets to be accurate. In most cases, I have found myself without enough resources or enough time to create a custom dataset. It is also usually disappointing when your model doesn't correctly predict the category in front of the judges)
  - Reading thick documentation (Because of how powerful these libraries are, you will need to take some time to figure out which tools are the ones you need and which ones you don't)

## Takeaways
Machine Learning is a really useful tool for many hackathon projects if used effectively. 

## Resources I promised to link
1. [Official Tensorflow and Keras tutorial](https://www.tensorflow.org/tutorials)
2. [Keras Walkthrough](https://medium.com/@cyrilivargarcia/tensorflow-and-keras-a-beginners-tutorial-by-a-beginner-abd4c90f814f)
3. [Public Datasets](https://medium.com/towards-artificial-intelligence/the-50-best-public-datasets-for-machine-learning-d80e9f030279)

These sites are just a starting point - there is no substitute for getting your hands messy quickly. Fire up a venv or conda env (see note below) and get started! 

### Where should I code this?

When you're working on a large python project, you often have multiple dependencies (modules that your code needs to run). These dependencies may conflict with other programs on your computer, forcing you to spend time debugging. Venv (python's virtual environment library) and anaconda (data science python based platform) environments help take the stress out of handling your dependencies. A virtual environment has its own version of python, pip (pythons default package manager) and all modules that you installed. This ensures that your versions don't conflict with each other. In an ideal world, if all your team members have an identical virtual environment set up, then there should be no differences between running the code. 

You can use either conda environments, or virtual environments. Conda is more stable, so preferred for larger projects. However, virtualenv is typically easier to get set up (in my experience). I'll link resources to installing and running both below. 

#### Virtualenv
[virtualenv tutorial](https://www.pythonforbeginners.com/basics/how-to-use-python-virtualenv) - just follow the instructions on your terminal
[official python docs](https://virtualenv.pypa.io/en/latest/)

#### Anaconda
[installing conda](https://docs.conda.io/projects/conda/en/latest/user-guide/install/) - installing miniconda works too, especially if you don't need all the features 

[conda](https://stackoverflow.com/questions/45421163/anaconda-vs-miniconda), but I'd recommend insalling the full anaconda package to make your life easier. 

[setting up conda env](https://uoa-eresearch.github.io/eresearch-cookbook/recipe/2014/11/20/conda/)
