# Cloud (Google Cloud, AWS, Azure)


## What is Cloud?
Cloud services are a way for us to obtain compute, storage, machine learning, and other functionality by offloading the work onto computers somewhere else, usually at some sort of large server farm. It basically means you can pay a little bit of money to get a small computer or database, which you can use for a specific task. The three big cloud providers are:

* [Amazon Web Services (AWS)](https://aws.amazon.com/)
* [Microsoft Azure](https://azure.microsoft.com/en-us/)
* [Google Cloud Platform (GCP)](https://cloud.google.com/)

All three of these providers have their own consoles, documentation, and services, but they still allow you to do the same thing: buy a computer short-term that resides somewhere far away from you. The biggest types of services that cloud offers are compute and storage. Compute means the ability to buy a computer to perform a specific task, and storage means the ability to buy a database where you can store a large amount of information in a secure manner. All three providers also have services for many other functions such as game development, machine learning, robotics, blockchain, you name it.

### Which provider should I use?
There are many factors to consider when deciding on a cloud provider, but since they all do virtually the same thing, it's just a matter of sticking with one and travelling down its learning curve. If you have credits for a specific provider, which is the case in many hackathons, consider using that one so you don't have to worry about costs. AWS also has a [free tier](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc) for all first-time users that lasts for a whole year, and [Microsoft](https://azure.microsoft.com/en-us/free/) and [Google](https://cloud.google.com/free/) have similar options as well. I myself am partial to AWS, but I recommend doing some exploration and picking the cloud provider that sounds the best to you! Once you choose one, a whole realm of possibilities will be opened to you.

### Documentation
Whenever you have a question about the cloud, the most important place to check for an answer is the documentation. The documentation for the three major providers is linked here:

* [AWS Docs](https://docs.aws.amazon.com/)
* [Azure Docs](https://docs.microsoft.com/en-us/azure/?product=featured)
* [GCP Docs](https://cloud.google.com/docs)

#### Price Warning
Cloud providers are notorious for taking your credit card information and charging you for services you may not know you need to pay for. As such, always make sure to consult the free tier links to make sure the service you are using is available for free. Alternatively, make sure to populate your account with credits **before** you start developing, and make use of budget services like [AWS Budgets](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html) to set up alerts in case your costs go too high. 


## AWS Specific Services
For this section, I'll dive into some of the most helpful AWS services for beginners. While there are plenty of services that anybody can just pick up and use, these are the ones that I feel are most used in the industry, and may be helpful to look into for your project as well.

### Elastic Compute Cloud (EC2)
By far the most important service in the AWS console, [EC2](https://aws.amazon.com/ec2/) allows users to obtain compute power by simply specifying a machine configuration and waiting a few minutes. With this service, you can go in and create a new instance, specifying everything you need in terms of RAM or storage space, just like picking out a new laptop. When you're in the EC2 menu, simply hit **Running instance -> Launch Instance** and follow the prompts. When your instance is done launching, you can just hit the checkbox next to it and click the **Connect** button at the top, follow the prompts, and voila! You now have remote access to a computer somewhere in the world, and you can make it do whatever you like!

### Simple Storage Service (S3)
[S3](https://aws.amazon.com/s3/) is exactly what it sounds like: a simple way to store whatever documents or files you may want to on the cloud. Think of it like a slightly higher-tech Google Drive, except you can access the objects directly by typing in a URL. S3 has a large number of applications in terms of linking with other AWS services, but you can also use it to do many things on its own. For example, you can host an image in a public S3 bucket for use in any website you make, or my favorite use for it is to simply host a static website. In order to do this, you'll need hit **Create bucket** and follow the prompts. When you've created your bucket, click on the name and find the **Permissions** tab. You will need to set the **Access Control List** to allow anyone to publicly access the objects in your bucket, and you will need to change the **Bucket Policy** as well. Feel free to use the bucket policy template in this repo. If you did everything correctly, you should be able to access your website by simply clicking the URL for your HTML page!

### Elastic Beanstalk
[Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) is a service that does basically the same thing as EC2, except it's meant to be a package deal. Instead of manually creating the instance, installing dependencies, running your app, figuring out security/access, and going through all of that hassle, you can simply place your code in a ZIP file and submit it to Elastic Beanstalk. It will take care of creating and configuring the instance for you, and when you want to update your code, all you need to do is upload a new ZIP file formatted the exact same way. It will also provide you with a URL you can use to access your application through the web, and it works with all sorts of popular web frameworks like Flask and Java Spring Boot. This [tutorials](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/tutorials.html) link is very helpful for figuring out how to format your files! Example ZIP files for Python, Java, and Node.js (the most common stacks) are available in this repository folder as well. 

### Route 53
When you've finally created your website, you're probably wondering how you can get a custom URL instead of the long one that AWS provides by default. [Route 53](https://aws.amazon.com/route53/) is the main service to help with that. When you enter this service, you'll need to create a **hosted zone** associated with the domain name you've bought, no matter where you bought it from. AWS will then provide you with some name servers, which you'll need to give to your domain name provider, like GoDaddy or Domain.com. Once you've got this set up, you can go back to the hosted zone screen for your domain and create records. Click **Create Record Set -> Alias (Yes) -> Alias Target** and set the target to whichever S3 or Elastic Beanstalk endpoint you've created. Save the record and wait a few minutes, and you should be able to type in your custom URL to get to your application!
