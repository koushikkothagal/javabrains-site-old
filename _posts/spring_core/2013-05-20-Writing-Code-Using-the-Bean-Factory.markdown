---           
layout: post
title: Writing Code Using the Bean Factory
date: 2011-08-10 00:44:10 UTC
permalink: 2011/08/spring-tutorial-04-writing-code-using.html
updated: 2013-05-20 21:49:22 UTC
comments: false
categories: spring core
course: spring
topic: core
tags: spring_core
---

In this tutorial, we'll write code to implement the BeanFactory concept that we learnt in our previous tutorial. We'll write a Spring XML to configure a Spring bean. Then we'll use the BeanFactory to instantiate our bean in the Spring container. 

{% include youtube.html param="7c6ZTF6cF88" %}

Note: This tutorial uses `XmlBeanFactory` as the implementation of the `BeanFactory` interface As of Spring 3.1, `XmlBeanFactory` has been deprecated. You can use the alternatives mentioned in the java docs here: [http://static.springsource.org/spring/docs/3.1.x/javadoc-api/org/springframework/beans/factory/xml/XmlBeanFactory.html] (http://static.springsource.org/spring/docs/3.1.x/javadoc-api/org/springframework/beans/factory/xml/XmlBeanFactory.html) 

The class has been deprecated in favor of `DefaultListableBeanFactory` and `XmlBeanDefinitionReader`. You might want to use one of those instead.

However, the purpose of this tutorial is just to explain what the Bean factory is. The next tutorial talks about the `ApplicationContext`, which you should be really using, almost always. Never use the BeanFactory unless you know what you are doing, and you really need it. 