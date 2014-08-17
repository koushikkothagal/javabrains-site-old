---           
layout: blank
title: Using JAXB Annotations Part 1
comments: false
redirect_from: 2013/09/using-jaxb-annotations-part-1.html
tags: javaee jaxws
dummy: javaee_jaxws
---

In this tutorial we'll understand how an XML binding framework like JAXB works to help convert our object instances to XML. 

{% include youtube.html param="wireYD00xkw" %}

**Update:** You cannot take every annotation property in the impl class and include it in the interface. Some annotation properties should be used on the impl class and are not allowed on endpoint interfaces. And vice-versa, some are to be used only on the interface.

Refer to the Java Docs for WebService and WebMethod annotations to find out which to use where.

<a href="http://docs.oracle.com/javase/7/docs/api/javax/jws/WebService.html"> <b> WebService page </b> </a> 

<a href="http://docs.oracle.com/javase/7/docs/api/javax/jws/WebMethod.html"> <b> WebMethod page </b> </a> 

Thanks to Anupama for looking that up and letting me know in the comments.