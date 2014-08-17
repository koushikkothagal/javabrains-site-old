---           
layout: post_only
title: Introduction to Web Services
comments: false
redirect_from: 2013/06/ws01-introduction-to-web-services.html
tags: javaee jaxws
category: javaee_jaxws
---

Welcome to this tutorial course on SOAP web services in Java. We'll start with an introduction to web services. We'll understand what they are and how they are useful.

{% include youtube.html param="mKjvKPlb1rA" %}

###Introduction

Welcome to this course on SOAP web services in Java.

There are primarily two types of web services we can write in general. They are:

1. SOAP web services

2. REST web services

In this tutorial series, I will be focusing on SOAP web services, and there will be another series for REST.

In the Java world, there are two different specifications for these two types of web services:

1. JAX-WS specification for SOAP web services

2. JAX-RS specification for REST web services

Since this course is about SOAP web services, we'll be learning JAX-WS.

###What is a web service?

A very simple definition is "a service made available over the web". But this is a bit too simplified for a definition. Because, then isn't everything online a web service? We use e-commerce websites to shop. We use social media websites to connect with people. They are, after all, services that are provided to us over the web. Can they be called web services?

The difference between a standard website and a web service is this: a website is meant for human consumption, while a web service is meant for machine (or code) consumption.

Let's take an example of an e-commerce application. You have written a business service called GetProducts to get a list of products from the database. You can write an MVC layer to call this service and display the list of products to a user as a web page. The user can access a URL and see this page in their browsers. The page will probably have some formatting to make the list look pretty and stylish. Generally appealing to the human eye.

But, now let's say you have a different application that needs to use your business service to display your list of products from your database. How can they access this list? Can the application access the same URL you used to display the products on your browser? It could, but then the code would need to parse through the HTML, ignoring all the styling and alignment information, and then get to the product information. All the formatting and styling that was essential to a human readable web page become an unnecessary burden (that needs to be parsed and ignored) to a piece of code that needs to consume this same information.

The common alternative of sharing code or binaries as a jar is also not possible in this case. You cannot package your GetProducts business service and include it in the application that needs it. Because, the application would probably be running in a different infrastructure on a separate network that has no access to the database that your business service connects to. What would be ideal is if the consuming application could directly call the business service deployed on your server.

That is essentially what a web service does. It allows two different pieces of code running on two different servers to be able to talk to each other and call each other's methods.

###Interoperability

The other advantage of using web services is that it is standard technology. It's not really specific to Java. The JAX-WS specification I mentioned above is the Java way of achieving the web service standard. But the web service technology itself is language neutral. Which means that when you call a web service from an application, you don't care what technology the web service is implemented in. You could be writing a Java program that calls a web service written in .NET. Doesn't matter. It is language independent. And it all works at runtime.

Imagine that! A Java code can call a method written in .NET and deployed on a server somewhere else in the world. And still be able to exchange data and execute each other's code. This ability is called interoperability, which is one of the most important buzz-words and ability of the web service technology and the web service standard itself.

In the next tutorial, we'll try to understand some of the terminologies associated with web services.
