---           
layout: blank
title: ApplicationContext and Property Initialization
date: 2011-08-10 00:45:10 UTC
redirect_from: 2011/08/spring-tutorial-05-applicationcontext.html
updated: 2013-05-20 21:56:56 UTC
comments: false
tags: spring core
dummy: spring
topic: core
dummy: spring_core
---

We'll first replace the BeanFactory with the more powerful ApplicationContext. We'll then make Spring initialize a property of an object by specifying the value in the configuration XML. 

{% include youtube.html param="ZxLaEovze3M" %}

###Summary

In the previous video, you used the `BeanFactory` instance to initialize the Spring container. In this tutorial, we will use a similar but more powerful class class called `ApplicationContext`. 

Just like the `BeanFactory`, the `ApplicationContext` is an interface, and there are many implementation classes. But what these set of classes do is similar to the `BeanFactory` in that they act as a factory object for your Spring instances. It also has additional features like event notification, AOP etc. You will learn more about these features later in this course. But `ApplicationContext` does all that the `BeanFactory` does and more, so you should be using `ApplicationContext` almost always.

The way to instantiate the `ApplicationContext` is:

```java
ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
```
assuming here that spring.xml is the Spring configuration XML in the classpath. If the file is not in the class path, you'll need to provide the path to the file *from* the class path.

Once you have the instance of the context, you get a bean by calling the `getBean()` method on it. Like this:

```java
Triangle triangle = (Triangle) context.getBean("triangle");
```

You pass in a `String` that's the name of the bean that's defined in the Spring configuration XML file. Note that the return type is `Object`, so you'll need to cast it to the type you want.

The cast can be avoided by using a different signature of the `getBean()` as shown below:

```java
Triangle triangle = context.getBean("triangle", Triangle.class);
```

Note that by passing the class of the type as a second parameter, you get the object that's already of that type, making the explicit cast unnecessary. I highly recommend using this approach wherever possible.

###property Tag

Next, we use the property tag in the Spring XML to pre-initialize the value of a member variable of our Spring bean.

Here is the property tag to initialize the `type` member variable with a String value `"Equilateral"`.

```xml
<bean id="triangle" class="org.koushik.javabrains.Triangle">
   <property name="type" value="Equilateral" />
</bean>
```

This configuration will set the `type` member variable of the `triangle` bean with the configured value automatically.    