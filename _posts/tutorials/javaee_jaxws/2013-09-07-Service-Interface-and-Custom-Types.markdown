---           
layout: blank
title: Service Interface and Custom Types
comments: false
redirect_from: 2013/08/service-interface-and-custom-types.html
tags: javaee jaxws
dummy: javaee_jaxws
---

We'll make a couple of changes to the sample web service we've been developing all along. First, we will see what happens when a custom Java data type needs to be exchanged as a part of a web service operation. Then, we'll create a web service endpoint interface that our class implements. 

{% include youtube.html param="QFq4Ue_jExY" %}

**Update:** You cannot take every annotation property in the impl class and include it in the interface. Some annotation properties should be used on the impl class and are not allowed on endpoint interfaces. And vice-versa, some are to be used only on the interface.

Refer to the Java Docs for WebService and WebMethod annotations to find out which to use where.

<a href="http://docs.oracle.com/javase/7/docs/api/javax/jws/WebService.html"> <b> WebService page </b> </a> 

<a href="http://docs.oracle.com/javase/7/docs/api/javax/jws/WebMethod.html"> <b> WebMethod page </b> </a> 

Thanks to Anupama for looking that up and letting me know in the comments. See next tutorial for more details.