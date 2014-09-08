---           
layout: post_only
title: Understanding Dependency Injection
date: 2011-08-10 00:41:10 UTC
unused: 2011/08/spring-tutorial-01-understanding.html
updated: 2013-06-15 00:41:10 UTC
comments: false
tags: spring core
categories: content spring_core
---

In this tutorial, we'll understand the concept of Dependency Injection and how it simplifies managing dependencies between objects.

{% include youtube.html param="GB8k2-Egfv0" %}

###Summary

Here is the Wikipedia definition for dependency injection:

> Dependency injection is a software design pattern that allows the removal of hard-coded dependencies and makes it possible to change them, whether at run-time or compile-time.

Given two objects that are dependent on each other, the idea is to decouple the dependencies between two objects. 

If every class were to instantiate every object it needs by using the `new` operator, would it work? Yes, it would! but that also means that the dependencies are tightly coupled. Every time the object is instantiated, it has the exact same set of dependencies. If you need the object to work with a different instance of any dependency, you'll need to modify the code of the class.

Instead, if the object were to only deal with interfaces, and have the actual object instances supplied to it by setter methods, it opens the class up to a lot of possibilities. The same class could do different things depending on what instance is supplied to it. And the whole time, the class itself doesn't need to be modified since the class works at the interface level. So, as long as the supplied objects implement the interface, no changes to the class itself are necessary.

This is the concept of dependency injection, and Spring provides a framework that simplifies writing code that uses this concept.