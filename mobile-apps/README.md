# Mobile Development (iOS, Android, Cross-Platform)
## First things first...should you make a mobile app or stick with a website?
A mobile platform is a great space to develop your ideas for, but it’s usually not easiest the place to start. Creating a website is usually much simpler for getting an idea up and running, for a variety of reasons.
1. You may need minimal setup to start developing a website. Especially if you’re creating a static site with only a frontend, the languages you’ll probably be using (HTML, CSS, JavaScript) are already understood by whichever browser you’re using, and any other tools you might need are quick to setup. Mobile development on the other hand might involve the lengthy process of downloading a whole new IDE.
2. Testing is faster for a website. It’s as simple as refreshing the page in your browser. Testing on mobile simulators and physical devices can take a while to start up, and if you choose a native approach, you may end up having to restart your app each time you make a code change.
3. Some parts of mobile development are difficult to get around without the right resources; for example, if you want to make an iOS app, you will need a computer running macOS. Web development tools generally run on all major platforms, thus making collaboration easier as well.

That being said though, there are several times where you might be designing a product that is intended for a mobile device. Here are a few reasons when it's better to create a mobile app. 
1. If it’s important to notify your users of events even when they are not actively using your product. Mobile apps can send notifications to display information in real time. Websites can do this too, but for users on the go, it’s more likely they’ll be able to check their phones instead of their laptops.
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
### Native iOS
Xcode is the official IDE for developing software for all Apple devices, which includes iOS. It bundles a variety of tools, including Swift and Objective-C compilers, user interface builder, and iOS simulators. It is only available on computers running macOS, and it can be downloaded from the App Store. Swift and Objective-C are the supported languages for development, although Swift is cleaner to write in and now the recommended choice by Apple. If you already have prior experience with Java or Python, Swift might feel similar. Objective-C at one point used to be the only language for development, and as a result, a lot of code bases still use it. Most features at this point should now have Swift counterparts, but there might be rare instances where you will have to mix a bit of Objective-C code in. <br/>
Here are some tutorials for getting Xcode set up and running your first mobile app. We have also attached the official Swift language guide from Apple for reference.

***Setting Up Tutorials:***<br/>
https://codewithchris.com/xcode-tutorial/#10-ios-simulator   
https://www.appcoda.com/learnswift/build-your-first-app.html  
***Swift Language Guide:***<br/>
https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html

### Native Android
Android Studio is the official IDE for developing software for Android devices. It bundles a variety of tools, including Kotlin and Java compilers, a user interface builder, and Android simulators. It is available for download from the link below. Kotlin and Java are the primary languages for development, with the first now being the preferred choice by Google. Kotlin is cleaner to code, but if you already have experience with Java, we recommend sticking with that. <br/>
Here are some tutorials for getting Android Studio set up and running your first mobile app. We have also attached the official Kotlin guide for reference.

***Download Android Studio:***<br/>
https://developer.android.com/studio <br/>
***Setting Up Tutorials:***<br/>
https://codelabs.developers.google.com/codelabs/android-training-hello-world/index.html?index=..%2F..index#0 <br/>
***Kotlin Language Guide:***<br/>
https://kotlinlang.org/docs/reference/

### Cross Platform with React-Native
React-Native is a cross-platform development framework developed by Facebook that targets both iOS and Android devices. There are two flavors for development: using Expo or the React-Native CLI.<br/>
Expo is a toolchain built around React-Native, and you can think of it as a wrapper that simplifies your development. It is quicker to set up and test on, and it comes with support for many features like a camera, scanner, map view, and much more. Another big benefit comes with testing. Expo already has phone simulators running that you can use through your browser so you don't need Xcode or Android Studio. In addition, both the iOS App Store and Google Play Store have an Expo Client app that allow you to scan the QR Code of a project you are working on and have it run on your device without needing a physical connection to your computer. The main disadvantages with Expo are the lack of flexibility in adding third-party packages as well as strange problems that might show up if you decide to publish your app. **For most cases, we recommend using Expo because of the ease in setting up and testing. If you plan on releasing your app or iterating on it much further beyond the hackathon, then the next approach is probably better.** <br/>
The React-Native command line interface allows you to develop vanilla React-Native apps without the wrappers like Expo on top. Using React-Native is ultimately the best long-term approach as you can integrate most third-party packages with it. However, a lot of the abstractions that Expo would otherwise take care of no longer exist. Packages designed for Expo will not work for vanilla React-Native. And to test on a physical device, you will need a connection with your computer to transfer the app over. Probably most inconvenient, you will need to download Android Studio and Xcode as well so that you can have access to the phone simulators as well as the software responsible for transfering the app to your device. <br/>
Both approaches use React Js, JSX, and CSS as languages for development. React JS is a JavaScript library developed by Facebook that is designed for "building user interfaces". And you can think of JSX as a wrapper language that allows you to write HTML-style code in React. We have included a tutorial below that walks through the basics of React.

***Expo Documentation (how to set up)***<br/>
https://docs.expo.io<br/>
***Expo SDK (all the features and how to set them up...amazingly clean to read)***<br/>
https://docs.expo.io/versions/latest/<br/>
***React-Native CLI Setup (make sure to use the React Native CLI Quickstart)***<br/>
https://reactnative.dev/docs/environment-setup<br/>
***React Introduction Tutorial***<br/>
https://reactnative.dev/docs/intro-react

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
https://developer.android.com/studio/build/dependencies<br/>
***Adding Packages to React Native Project***</br>
https://reactnative.dev/docs/linking-libraries-ios

## Designing the UI
Both Android Studio and Xcode support nice visual interface builders that let you drag and drop objects how you would want them to appear on the screen. You also have the ability to modify your layout through code if you prefer. React Native does not come with a visual interface builder, so instead, you design your UI through JavaScript XML (JSX) and CSS code. You can think of JSX as a wrapper language that allows us to write HTML style-code in React. This might be a disadvantage in the sense that you will have to constantly tweak your code to get the perfect UI you want. You can speed things up by setting up **Watchman** with your files. If you have your app already running, everytime you save a code change, the app will automatically be reloaded without you having to manually restart it.<br/>

***Native iOS UI Example App (very good official resource, although Swift syntax slightly outdated)***<br/>
https://developer.apple.com/library/archive/referencelibrary/GettingStarted/DevelopiOSAppsSwift/<br/>
***Native Android UI Example App (official resource)***</br>
https://developer.android.com/training/basics/firstapp/creating-project<br/>
***React-Native UI Example App***</br>
https://www.raywenderlich.com/485-react-native-tutorial-building-ios-apps-with-javascript<br/>

## ...And that's all the major stuff
With what we've discussed so far, you should have a working environment set up, have a basic app running, know where to learn language-specifics you might need, be comfortable designing a UI, and know how to add dependencies. We think you're ready to start implementing your own ideas, so feel free to stop here! Remember that for all the unanswered questions you have, StackOverflow is your friend. And to explore all the things that you can do, check out the official documentation!

***Native iOS Official Documentation***<br/>
https://developer.apple.com/documentation/<br/>
***Native Android Official Documentation***<br/>
https://developer.android.com/guide<br/>
***React Native Official Documentation***<br/>
https://reactnative.dev/docs/getting-started<br/>
***Expo Documentation (Same as earlier)***<br/>
https://docs.expo.io

## Other Features
The remainder of this document discusses some common features that get used in mobile apps, and we include tutorials on how to go about setting them up. All React Native resources should generally be assumed to be for the React Native CLI since the Expo documentation already does a great job with examples. 
### Navigation
One of the first things you will probably want to design is the flow of your app. This refers to how you can navigate to different screens, and what actions trigger transitions. All three forms of developments have components to simplify your navigation, such as tab bars, sliding drawers, navigation bars, and a variety of transitions effects. There is much to explore, but here are some tutorials to get started.

***Creating Tab Bar Application in Native iOS***<br/>
https://codewithchris.com/ios-tab-bar-app/<br/>
***Create Navigation Drawer for Android App***<br/>
https://code.tutsplus.com/tutorials/how-to-code-a-navigation-drawer-in-an-android-app--cms-30263<br/>
***React Native Navigation Tutorial***<br/>
https://wix.github.io/react-native-navigation/docs/before-you-start

### Notifications
Notifications are the standard way to inform your users of events while your app is running in the background. There are two types of notifications: ***Local*** where your app triggers the notification itself; for example, maybe a timer running in the app goes off. ***Remote*** notifications, commonly called push notifications, on the other hand are written to an outside source and then read by your app. One example of this might be having someone write an inspirational quote to a database each day, having your app check for a write, and then send a push notification to your user. Local notification types must be hardcoded into the app by the time it is running. But with remote notifications, your app only needs to know how to read and display a message, making this much more flexible. 
For setting up remote notifications, we recommend using Google Firebase’s Cloud Messaging Service (FCM). It allows you to register apps to be notified of any messages you publish through the FCM console. You can also customize settings like the time a message should be delivered. 
One particular hassle with remote notifications is that they can only be tested on physical devices, not simulators. And for iOS devices, the Apple Push Notifications Service (APNS) acts as a middle-man which intercepts sent messages and delivers them to the appropriate app. In order to communicate with the APNS, you will need to set up a developer’s account which costs upwards of $100. If push notifications are an essential part of your app, we strongly suggest using Android development. 
Here are some tutorials to help get you started.

***Native iOS Notifications***<br/>
*Local:* https://www.hackingwithswift.com/books/ios-swiftui/scheduling-local-notifications<br/>
*Remote:* https://www.iosapptemplates.com/blog/ios-development/push-notifications-firebase-swift-5<br/>
***Native Android Notifications***<br/>
*Local:* https://developer.android.com/training/notify-user/build-notification<br/>
*Remote:* https://www.androidauthority.com/android-push-notifications-with-firebase-cloud-messaging-925075/<br/>
***React Native Local Notifications***<br/>
*Local:* https://dev.to/edmondso006/react-native-local-ios-and-android-notifications-2c58<br/>
*Remote:* https://www.codementor.io/@uokesita/react-native-push-notifications-with-firebase-2019-10on0z19t6

### Maps
If your app needs to show a user’s current location or find a route to a destination, you might consider embedding a map view. There is a great amount of documentation available here, and Google even has an SDK that allows you to incorporate Google Maps on iOS devices if you prefer. There are ways to “fake” your location when testing in a simulator, but again, we recommend testing on a physical device.

***Native iOS MapKit***<br/>
https://www.raywenderlich.com/7738344-mapkit-tutorial-getting-started<br/>
***Google Maps Tutorial for Native iOS***<br/>
https://www.raywenderlich.com/7363101-google-maps-ios-sdk-tutorial-getting-started<br/>
***Native Android Maps SDK (scroll to tutorials section)***<br/>
https://developers.google.com/maps/documentation/android-sdk/intro<br/>
***Maps in React Native***<br/>
https://www.freecodecamp.org/news/how-to-integrate-maps-in-react-native-using-react-native-maps-5745490fe055/<br/>


### Accessing the Camera and Photos
If uploading and downloading content to and from your app is important, then you might need to access a user’s camera and photo library. This is a feature that requires explicit permission from your users, so if you’re designing a fully-fledged app, make sure to have a backup route through your app in case permission isn’t granted. 

***Native iOS Tutorial***<br/>
https://www.zerotoappstore.com/how-to-access-camera-photo-library-in-swift.html<br/>
***Make a Camera App in Swift (official Resource)***<br/>
https://developer.apple.com/documentation/avfoundation/cameras_and_media_capture/avcam_building_a_camera_app<br/>
***Native Android Tutorial***<br/>
https://www.c-sharpcorner.com/UploadFile/e14021/capture-image-from-camera-and-selecting-image-from-gallery-o/<br/>
***React Native Tutorial***<br/>
https://www.positronx.io/react-native-pick-images-from-camera-gallery-example/<br/>

### Making HTTP Requests
Your app might need to make API requests at some point. Or maybe your app is a client that talks to a server that you’ve set up. In either case, you’ll need to make use of HTTP requests for communication. We strongly recommend making asynchronous requests (as opposed to synchronous) so that new content is fetched in the background while the rest of your app continues to run. 

***Native iOS Tutorial***<br/>
https://learnappmaking.com/urlsession-swift-networking-how-to/<br/>
***Native Android Tutorial***<br/>
https://developer.android.com/training/volley<br/>
***React Native Request Examples***<br/>
https://reactnative.dev/docs/network<br/>

### Storing Data Locally
In some cases, your app might need to store local data that pertains only to the user of your app. You can use a local database for this, and there a variety of options listed below.  If you only need to store a few properties as key-value pairs, manipulating a list of user preferences is a much lighter option than creating a fully-fledged database.<br/>
Keep in mind that if you want your user’s data to be easily accessible by other users or by other applications, using an online database is a much better solution. Check out our database section on options for getting this set up. 

#### Database Options 
These are just a few of the many database options available to use.<br/>
***Native iOS Core Data Documentation: Core Data is Apple's official local database solution***<br/>
https://developer.apple.com/documentation/coredata<br/>
***Native iOS Core Data Tutorial***<br/>
http://www.brianadvent.com/build-simple-core-data-driven-ios-app/<br/>
***Native iOS Realm Swift Documentation (a more beginner-friendly alternative to Core Data)***<br/>
https://realm.io/docs/swift/latest/<br/>
***Native iOS Realm Swift Tutorial***<br/>
https://learnappmaking.com/realm-database-swift-getting-started/#getting-data-from-realm-database
***Native Android Tutorial***<br/>
https://developer.android.com/training/data-storage/room<br/>
***React Native Tutorial Realm Documentation***<br/>
https://realm.io/docs/javascript/latest/<br/>
***React Native Realm Tutorial***<br/>
https://aboutreact.com/example-of-realm-database-in-react-native/#Code-for-Realm-Database<br/>

**User Preference Options**<br/>
***Native iOS UserDefaults Tutorial***<br/>
https://medium.com/better-programming/userdefaults-in-swift-4-d1a278a0ec79<br/>
***Native Android Preferences Tutorial***<br/>
https://developer.android.com/training/data-storage/shared-preferences<br/>
***React Native AsyncStorage Tutorial (scroll to README)***<br/>
https://github.com/react-native-community/async-storage
