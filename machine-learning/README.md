# Machine Learning (Keras, PyTorch, Tensorflow)

## What is Machine Learning and Why Would I Use it?
Machine Learning is a means of developing artificial intelligence, which is when a computer performs mathematical and statistical calculations to find patterns in large data sets. This becomes useful when datasets become too large for humans to analyze or patters become too obscure for humans to find.   

Before proceeding with this guide, check out [this](https://docs.google.com/presentation/d/1EImakverhNq-WhJwd-WIx2H04ZnCyUxsFk-9UcKoubQ/edit?usp=sharing) presentation made by Freetail Hackers. It's a quick overview about what AI is and a couple useful subfields within this space.

In the context of a Hackathon, Machine Learning is designed to target a single problem with specific input parameters that can then be consistently replicated on a large scale and thus is most commonly used to develop an market solution tailored to a **specific company challenge or a specific social problem.** 

The great thing about Machine Learning is that it is applicable to most modern day problems. This ranges from economics, where ML is being used to developing models to predict stock prices (quantitative analysis, a very lucrative field), to the medical field, where ML is being used to analyze X-Rays to determine if a patient has cancer.

ML can be applied to solve a problem faster and more efficiently anywhere we would normally use our intuition to predict a pattern!

## How do I know if I should use Machine Learning in my Project?

It is important to keep in mind that ML is not a solution for every problem. Many times, there will be a way to develop a robust solution without needing to use ML. Here are the general questions you should be asking yourself to decide if ML is right for your project:

1. Can I hard-code the rules? Many human tasks cannot be solved by using a simple rule-based solution, as there are usually a large number of factors that influence the outcome. A good example is determining if an email is spam or not; it is hard to claim that all spam emails follow a definitive rule. Thus, when the outcome depends on too many factors, Machine Learning should be considered as it is effective at accounting for a large number of factors.

2. Can I easily scale without ML? Many times, an idea will work at a small scale, but becomes tedious at a large scale. Coming back to the spam email example, while you might be able to click through a hundred emails and sort which ones are spam, doing this for millions of emails would be quite unreasonable. Thus, if scaling your task is tedious, Machine Learning should be considered as it is effective at handling large-scale problems.

If the answer to at least one of these questions is "No," Machine Learning might be the way to go. Some classic examples of such problems where machine learning is being applied today include: natural language processing, facial recognition, and image classification. If any of these sound interesting to you, feel free to go down a Google rabbit-hole and learn about these awesome applications!

## Example and Projects

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

[Keras](https://keras.io/) (Recommended for beginners and small datasets):
  - High level API (Abstracts things more)
  - Slower runtimes(Shouldn't matter too much in this context)
  - Simplest to use
  - Least lines of code needed
  - Less accurate models
  - Simple models with minial debugging  
  

[Tensorflow](https://www.tensorflow.org/) (Recommended for experienced users who need high performance models despite smaller datasets):
  - High and Low level API's
  - Faster runtimes
  - Harder to use
  - Reduced code needed
  - Accurate models
  - Hard to debug  
  
 [PyTorch](https://pytorch.org/) (Recommended for machine learning gods who need high performance models and have large datasets):
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
