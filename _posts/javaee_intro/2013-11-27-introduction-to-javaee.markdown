---
layout: post
title:  "Course Introduction"
date:   2013-11-27 11:30:24
tags: javaee_intro
---

#### Welcome to the course

Hello! My name is Koushik Kothagal. Welcome to this course. This course is an introduction to the Java Enterprise Edition platform, commonly referred to as Java EE. In this course, you will understand what Java EE is, why it exists and what purpose it serves. You'll also learn the various technologies that are available in the platform, and what you can do with them.

But before we get into what Java EE is, let me tell you right away what it is not. 

>  It's not J2EE anymore!

Java EE is not the same as J2EE. I don't think I can emphasize that strongly enough. It's unfortunate that the word J2EE is still being used so often when actually referring to Java EE. 

J2EE is actually verion 2 of the Java EE platform. It was released long, long long ago. December 12, 1999 to be exact. As you might guess, there have been many versions after that. At the time of making this video, we are currenly in Java EE version 7! So, J2EE is a bit outdated, don't you think? 

To be honest, the Java platform has had a history of coming up with bad names. Until version 5 came out, the release names were a complete mess. But hopefully that will not happen again. But the bad names are still in use. So, if there is one thing you take away from this whole course, it is that _J2EE is no longer relevant_. Call it Java EE.

#### Java platforms

Ok, with that out of the way, let's talk about Java platforms. There are three main types of Java platforms. Each platform consists different technologies and APIs, but the primary reason for splitting them into three platforms is because of the intended use.

<img class="img-responsive pull-right" src="img/courses/javaee/intro/01.jpg" />
Most of us are familiar with the traditional desktop environment for running programs. In case of Java programs, you have a JVM running on a machine, acting as a runtime environment for your Java programs.  It's a container for your programs. And most commonly, the whole program lives and dies on a single machine. To achieve this setup, you would use a Java platform called Java SE. SE stands for *Standard Edition*. 

The fact that it is called "Standard" should give you a clue. This is probably the most widely used Java platform ever. This platform runs on desktops, servers, embedded systems... well, that's almost everywhere! But the idea is that this platform contains just the basics you'd need to run Java on a machine. Any machine. I know word "basics" is vague here. But things will be a bit clearer as you progress along this course. 

So that's Java SE. 

Next, there's Java ME (Java Micro Edition) that's meant for "micro" devices - small devices like mobile phones and PDAs where resources are critical. After reading that, these two thoughts should occur to you.

1. Today's mobile phones come with great processors and RAM, and so aren't *short of resources* in any way.
2. What the heck is a PDA?

That definition is a decade old, and it shows. But still, think of Java ME as the platform that is ideal for small devices that run Java: like TVs, set top boxes and microwave ovens.
 
And finally we come to the third platform, Java EE, the reason for this course.

#### Java EE

What exactly is Enterprise Edition? It's a platform that's ideal for developing Enterprise software. Well, what is enterprise software then?  

Here's a Wikipedia definition:

> Enterprise software, also known as enterprise application software (EAS), is purposed-designed computer software used to satisfy the needs of an organization rather than individual users.

The difference is the target audience. This is not software for a single user on a single machine. This is for an organization, that consists of multiple employees working on multiple systems and communicating with each other using data. 

The HR department needs to share employee data with the Payroll department. Which needs to share data with Finance. It's way more complicated than a simple desktop application that a single user uses. 

To write an application of this complexity, you'll need to tackle a different set of problems than when writing a desktop application or a set top box application. This is what Java EE, as a platform, does. It provides the platform for writing such enterprise applications.

In this course we will be looking at the Java EE platform in more detail, understand what it is made of, how it works, *why* it works and how you can use it.
