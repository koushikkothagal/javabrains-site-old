---
layout: post
title:  "Server side Java"
date:   2013-11-27 22:32:24
tags: javaee_intro
---
In this tutorial, we'll understand one of the basic forms of Java on the server side - as a servlet container.

#### Going server side

For a course on Java EE, we have gone on long enough with Java SE! Let's switch gears and move to server side now. 

We've already learnt that an enterprise application needs to work with different users, possibly in different locations, operating on different functionality, exchanging and sharing data between them. For an application like this, a single machine runtime environment will no longer work. We will need a Java program that runs on a *server* and different users access the application as *clients*. Yes, a good old client-server application!

####Web server

Before we proceed, you'll need to understand what a web server is. Web server is a program that serves web requests with web responses. It need not even be Java. This concept spans multiple languages and multiple implementations.

<img class="img-responsive pull-right" src="img/courses/javaee/intro/02.jpg" />
A web server is a simple program that runs on a server and listens to HTTP requests. It has a set of static HTML files that are deployed on it. When there is a valid request from a client, who is most likely a person accessing a URL from a browser, the web server checks if there is a HTML file available at that path. If yes, it returns that HTML file's contents in the response. This is not the dynamic web as we know it today. This is static HTML files being served over the network. Not too exciting, I know, but this is what started it all!

####Enter Java

Java started its life on the server to enable server driven applications. The idea is, instead of having static HTML files, why not have an application that runs on the server and *generates* HTML files dynamically? Of course, Java was in no way the first to do this. There were existing technologies that did this already. But Java did enter this space, doing things a bit differently. In the Java implementation, the Java code that ran on the server and generated this HTML dynamically was called *Servlets*.

####In a world without servlets

Let's say you had to implement this functionality on your own using Core Java. Say you were given a standard desktop application and you were asked to make this a dynamic server application that responds to HTTP requests with HTTP responses. What are the things you'd need to do?

Firstly, you would need some Java code to listen to HTTP requests. The web server part of it that we saw before. 

Would it be possible? Well, you would need to write code to run on a server machine that constantly listens to HTTP requests

