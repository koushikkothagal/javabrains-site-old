---           
layout: post_only
title: Understanding Spring Bean Factory
date: 2011-08-10 00:43:10 UTC
unused: 2011/08/spring-tutorial-03-understanding-spring.html
updated: 2013-05-19 18:30:37 UTC
comments: false
tags: spring core
categories: content spring
topic: core
categories: content spring_core
---

In this tutorial, we'll discuss the role of Spring as a bean container. We'll also have a quick discussion on the Factory pattern, and I'll introduce you to the Spring Bean Factory object.

{% include youtube.html param="xlWwMSu5I70" %}

###Summary

The concept of dependency injection that Spring is so popular for is possible because Spring behaves as a container of beans.

You can have instances of your objects in the Spring container, which means that Spring handles the instantiation and the life cycle of the beans.

Spring creates all instances of the objects you need. It also has references to all the objects. This is different from creating an instance yourself by using `new()`. This is what's called a *Factory pattern*.

In the factory pattern, there exists an object that behaves as the *object factory*. Basically, whenever you need an instance of any object, you don't create the instance yourself. Instead, you call a method of this *factory* instance, and that method returns the instance you need. This *factory* might read from a configuration file, which acts as a blueprint, containing guidelines on how to create the object.

Spring has objects of type `BeanFactory` which behave like an object factory. You specify object blueprints in a configuration file, an XML file, and supply it to the `BeanFactory`. Then when you need an instance of any object, you ask the `BeanFactory` for it. It then refers the XML file and constructs the bean as specified. This bean, which is now a *Spring bean* since it has been created by the Spring container, is then returned to whoever asked for it.

In the next tutorial, we'll write code that implements this flow.