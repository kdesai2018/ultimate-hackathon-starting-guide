# Mobile Development (iOS, Android, Cross-Platform)
## First things first...should you make a mobile app or stick with a website?
A mobile platform is a great space to develop your ideas for, but it’s usually not easiest the place to start. Creating a website is usually much simpler for getting an idea up and running, for a variety of reasons.
1. You may need minimal setup to start developing a website. Especially if you’re creating a static site with only a frontend, the languages you’ll probably be using (HTML, CSS, JavaScript) are already understood by whichever browser you’re using, and any other tools you might need are quick to setup. Mobile development on the other hand might involve the lengthy process of downloading a whole new IDE.
2. Testing is faster for a website. It’s as simple as refreshing the page in your browser. Testing on mobile simulators and physical devices can take a while to start up, and if you choose a native approach, you may end up having to restart your app each time you make a code change.
3. Some parts of mobile development are difficult to get around without the right resources; for example, if you want to make an iOS app, you will need a computer running macOS. Web development tools generally run on all major platforms, thus making collaboration easier as well.

That being said though, there are several times where you might be designing a product that is intended for a mobile device. Here are a few reasons when it's better to create a mobile app. 
1. If it’s important to notify your users of events even when they are not actively using your product. Mobile apps can send push notifications to display information in real time. Websites can do this too, but for users on the go, it’s more likely they’ll be able to check their phones instead of their laptops.
2. If all your content does not require an internet connection. Mobile apps are able to retrieve new content when an internet connection is present, but they may still be able to show some other content without it. On the other hand, you’ll always need to be online to access any part of a website. 
3. If user and world interaction is important. Sharing information with contacts or taking and uploading photos to a social media account are usually much quicker to do on a phone than on a computer.
4. If you need to access specific features. You may need to access the camera, photo library, flashlight, current location, accelerometer, microphone, or something else. There are a great selection of mobile development APIs for working with specific devices on your phone.

Ultimately, it’s your call. We generally won't judge you based on the platform you use, so if you're just interested in learning how to develop a mobile app, that's enough reason to justify making one!

## Native vs. Cross Platform
The second thing to decide is whether to design a native or cross-platform app. **Native apps** can only run on a specific type of device; for example, a native iOS app won’t run on Android. **Cross-platform apps** can run on multiple types of devices. React-Native is the cross-development platform that we discuss, and apps written with this framework can run on both Android and iOS devices. Both approaches have their pros and cons, and we have a few of them listed below.
1. Coding time: Developing natively might require two separate implementations to run for each Android and iOS. Cross-platform allows you to write the code once, and let the framework take care of the rest in compiling and running on each device type.
2. Performance and UI: Native development wins here. With cross-platform, emphasis is on generalizability, and as a result, UI features not common to both Android and iOS might not easily be available. This might be especially apparent when designing the UI. In addition, your code may no longer be able to make certain performance optimizations because it has to prioritize being able to run on several device types. 
3. Designing the UI: Native development IDES have nice drag-drop interfaces for designing your UIs and implementing constraints. With React-Native, you will have to code it up in HTML and CSS and repeatedly test. 
4. Languages: Writing in React Native uses HTML, CSS, and a special library for JavaScript called React JS. If you already feel comfortable with web development, this might require less of a learning curve than going the native route. In addition, these are all tools commonly used in the industry, so learning them now might give you an edge in your job applications! Native development for Apple in particular requires you to use iOS or Objective-C, and you might not see yourself using these skills too frequently after the hackathon. 
5. Setting up: Native development will require you to download an IDE: either Android Studio or Xcode. For React-Native development, you may be able to get away with just downloading a few command-line tools which takes considerably less time. 

For most hackathon projects, we recommend taking the cross-platform path with React-Native just because its quicker. If you run into a point where a feature you want is not available, there are ways around this as well. That being said, it’s your choice. You will not be expected to have your app running on a variety of devices, so if you would rather tailor to one platform, that is just as fine.

## Setting Up
### Native iOS:
Xcode is the official IDE for developing software for all Apple devices, which includes iOS. It bundles a variety of tools, including Swift and Objective-C compilers, user interface builder, and iOS simulators. It is only available on computers running macOS, and it can be downloaded from the App Store. Swift and Objective-C are the supported languages for development, although Swift is cleaner to write in and now the recommended choice by Apple. If you already have prior experience with Java or Python, Swift might feel similar. Objective-C at one point used to be the only language for development, and as a result, a lot of code bases still use it. Most features at this point should now have Swift counterparts, but there might be rare instances where you will have to mix a bit of Objective-C code in. <br/>
Here are some tutorials for getting Xcode set up and running your first mobile app. We have also attached the official Swift language guide from Apple for reference.  
***Setting Up Tutorials:***<br/>
https://codewithchris.com/xcode-tutorial/#10-ios-simulator   
https://www.appcoda.com/learnswift/build-your-first-app.html  
***Swift Language Guide:***<br/>
https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html

### Native Android:
Android Studio is the official IDE for developing software for Android devices. It bundles a variety of tools, including Kotlin and Java compilers, a user interface builder, and Android simulators. It is available for download from the link below. Kotlin and Java are the primary languages for development, with the first now being the preferred choice by Google. Kotlin is cleaner to code, but if you already have experience with Java, we recommend sticking with that. <br/>
Here are some tutorials for getting Android Studio set up and running your first mobile app. We have also attached the official Kotlin guide for reference.<br/>
***Download Android Studio:***<br/>
https://developer.android.com/studio <br/>
***Setting Up Tutorials:***<br/>
https://codelabs.developers.google.com/codelabs/android-training-hello-world/index.html?index=..%2F..index#0 <br/>
***Kotlin Language Guide:***<br/>
https://kotlinlang.org/docs/reference/

### Cross Platform with React-Native:
React-Native is a cross-platform development framework developed by Facebook that targets both iOS and Android devices. There are two flavors for development: using Expo or the React-Native CLI. 
Expo is a toolchain built around React-Native, and you can think of it as a wrapper that simplifies your development. It is quicker to set up and test on, and the documentation is friendly enough to serve as the tutorials. The Expo SDK comes with support for many features like a camera, scanner, map view, and much more. One of the biggest benefits of using Expo comes with testing. Expo has phone simulators that run through your browser so you don't need Xcode or Android Studio. In addition, both the iOS App Store and Google Play Store have an Expo Client app that allow you to scan the QR Code of a project you are working on and have it run on your device without needing a physical connection to your computer. The main disadvantages with Expo are the lack of flexibility in adding third-party packages as well as strange problems that might show up much later into the development cycle (usually once the app is published). Even with these disadvantages, **we still recommend using Expo in most cases because of the ease in setting up and testing. If you plan on releasing your app or iterating on it much further beyond the hackathon, then the next approach is probably better.**

The React-Native command line interface allows you to develop vanilla React-Native apps without the wrappers like Expo on top. Using React-Native is ultimately the best long-term approach as you can integrate most third-party packages with it. However, a lot of the abstractions that Expo would otherwise take care of no longer exist. Packages designed for Expo will not work for vanilla React-Native. And to test on a physical device, you will need a connection with your computer to transfer the app over. Probably most inconvenient, you will need to download Android Studio and Xcode as well so that you can have access to the phone simulators as well as the software responsible for transfering the app to your device. <br/>
***Expo Documentation (how to set up)***<br/>
https://docs.expo.io<br/>
***Expo SDK (all the features and how to set them up...amazingly clean to read)***<br/>
https://docs.expo.io/versions/latest/<br/>
***React-Native CLI Setup (make sure to use the React Native CLI Quickstart)***<br/>
https://reactnative.dev/docs/environment-setup

## Adding Dependencies
There might be some point in your project where you need to add a third-party library or package. Most of these packages will be already registered with a **dependency manager** that is configured as part of the during the setting up stage. All you have to do is specify a list of the package names and versions that you want, and the dependency manager takes care of finding and installing them. 
1. Native iOS: CocoaPods is the dependency manager provided by Xcode, and you specify the packages you need in a Podfile. You can browse through the many registered packages, called Pods, to find what you might need.
2. Native Android: Gradle handles dependency management in Android Studio (among many other things), and you specify the packages you need in a build.gradle file.
3. React Native: The two most popular dependency manager tools are Node Package Manager (npm) and Yarn. You specify the packages you need in a package.json file. You can browse through the packages in the npm registry (linked below) to find what you need.
***CocoaPods Pod Registry***<br/>
https://cocoapods.org<br/>
***Npm Package Registry***</br>
https://npmjs.com<br/>
***How to Add Pods to a Podfile***</br>
https://guides.cocoapods.org/using/using-cocoapods.html<br/>
***How to Add Android Dependencies***</br>
https://developer.android.com/studio/build/dependencies
***Adding Packages to React Native Project***</br>
https://reactnative.dev/docs/linking-libraries-ios

## Designing the UI
Both Android Studio and Xcode support nice visual interface builders that let you drag and drop objects how you would want them to appear on the screen. You also have the ability to modify your layout through code if you prefer. React Native does not come with a visual interface builder, so instead, you design your UI through JavaScript XML (JSX) and CSS code. You can think of JSX as a wrapper language that allows us to write HTML style-code in React. This might be a disadvantage in the sense that you will have to constantly tweak your code to get the perfect UI you want. You can speed things up by setting up **Watchman** with your files. If you have your app already running, everytime you save a code change, the app will automatically be reloaded without you having to manually restart it. 
