---
layout: post
title:  "The Specifications"
date:   2013-11-27 20:32:24
tags: javaee_intro
---
In this tutorial, we'll understand what the specifications mean in the Java world, and how they influence the Java development process.

#### Java SE elements

Before we get into Java EE, let's look at Java SE in a little bit more detail. When someone talks about Java SE, or Core Java as it is so often called, they are most likely referring to a simple Java environment, running typically on a desktop or laptop. The Java SE platform itself consists of two important elements.

1. The Java Development Kit
2. The Java Virtual Machine

Before you start writing Java code, you need a *Java Development Kit* (or JDK) installed on your machine. This kit includes the Java compiler, among other things, that let you write and compile Java code. 

Once you are done writing and compiling code, you need a *Java Virtual Machine* (or JVM) to run it. Well, a JDK usually comes bundled with a JVM, because obviously, someone writing code would surely need to test it by running it. So why make them download the JVM separately? So, these are the two important pieces of any Java development process. One to write programs and another to run them on.

What is interesting to note, that a lot of new comers don't realize, is that there are multiple options to choose from for these two elements. So, you want to download a JDK. Which JDK? Yes, that is valid question. There is no one standard de-facto JDK to use. There are many! Of course, there is the official Oracle JDK from Oracle. Which is what you'd most likely use. I think that's the most popular one. But you don't *have* to use that. 

Here is the list of JDKs from Wikipedia:

**In development or in maintenance mode:**

- OpenJDK / IcedTea
- GNU's Classpath and GCJ
- Aicas JamaicaVM
- IBM J9 JDK
- Oracle Corporation's JRockit JDK

**Not being maintained or discontinued:**

- Apache Harmony
- Apple's Mac OS Runtime for Java JVM/JDK for Classic Mac OS
- Blackdown Java

As for JVMs, the list is *huge*. Go to [this Wikipedia page] (http://en.wikipedia.org/wiki/List_of_Java_virtual_machines) for all available Java Virtual Machine implementations. That's quite a list, huh? The best part is, you can actually write your own JDK or JVM if you'd like. And if it's good, people might end up using it! It would only take about 20 years of your life to implement it, but if you decide to do it, then good luck!

####What would you trust?

This brings up a question. Let us say I asked you to pick a random JDK and a random JVM and then write and run some Java code using them. How comfortable would you be while using them? Especially if it's a name you do not recognize! How would you know they works exactly like you expect them to? If you write a simple line of code in Java like `i++`, what's the guarantee that it actually post-increments `i` and not do something crazy like multiply `i` by `1000`?

Thankfully none of the JDKs and JVMs would do something crazy like this. And yes, they do guarantee it. The guarantee comes in the form of standard Java specifications.

####The way it works

We know Java. We know how the syntax works. When you see a piece of code, you can tell what the code does. And anyone else who knows Java would provide the exact same answer. 

The way Java works, the programming language, is documented in minute detail in a document called the Java Language Specification. This document contains every excruciating little detail about every Java language feature that you've known and learned, or that you had no idea existed. If it's in the document, it's in Java. If it's not, don't even bother about it. *This is the definitive source.* 

[This is the link] (http://docs.oracle.com/javase/specs/jls/se7/html/index.html) to the latest version of the specification, at the time of making this tutorial. 

That's great, but why am I mentioning this now? Well, if you are writing a JDK, this is the rulebook to follow! If you do not follow it, what you are writing is not a JDK. It might be awesome; a great, innovative and groundbreaking new language development kit. But it isn't JDK. 

Similarly, for JVMs, there is a specification document called the Java Virtual Machine Specification that documents how a JVM should work in fine detail. [This] (http://docs.oracle.com/javase/specs/jvms/se7/html/) is the link to the latest JVM specification if you are interested.

Since all the necessary details of the language are documented as specifications, and every JDK or JVM needs to follow these specifications, you *know* that they work. For the statement `i++`, no JDK or JVM would do anything other than post-increment `i`. Because the specifications say so!

####What, not how!

But then why have so many JDKs and JVMs if they all do exactly the same thing? It's not like they are easy things to implement. 20 years, remember? The reason why we have so many options available is this: The specifications just mention *what* the JDKs and JVMs should do. They do not enforce any rules on *how* to actually implement them! One JVM could choose to perform `i++` by shifting bits. Another could use counters. They all end up doing the same thing. But how they do it could greatly differ from one implementation to another.

This is why the specifications model has worked really well for the Java platform. The two specifications I mentioned are just two of the many many specifications that you'll encounter in your Java learning path. We'll look at more of them later in this course. But I hope the concept of specifications is clear to you now. This is a very important concept to understand Java EE, and also in fact a lot of other areas in Java. 

