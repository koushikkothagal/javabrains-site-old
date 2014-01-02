---           
layout: post
title: Using Web Service Explorer
categories: javaee jaxws
tags: javaee_jaxws

---

In this tutorial, you'll learn about the Web Service Explorer tool that come with Eclipse to test and examine web services. 

{% include youtube.html param="73YeFMmzBts" %}

###Summary

In the previous tutorial, we looked at SoapUI as a tool to test and make calls to external web services without having to write a client program. In this tutorial, we'll learn about a tool that comes as a part of Eclipse to do this. It isn't as powerful as SoapUI, but it's good to know about it since it is already a part of the IDE! And it does get the basic job done.

To launch the tool, click on the "Launch Web Services Explorer" button on the toolbar or choose Run > Launch Web Services Explorer. 

The tool, true to its name, lets us explore web services. Click on the WSDL page button on the right.

<img class="img-responsive" src="/img/courses/javaee/jaxws/01-wsexp.jpg" />

Now click on "WSDL Main", and you can see a page which lets you open a WSDL URL.

<img class="img-responsive" src="/img/courses/javaee/jaxws/02-wsexp.jpg" />

Here you can enter the WSDL URL you want to access. The tool then examines the WSDL, identifies the available operations and lets you call any method by entering input arguments.

<img class="img-responsive" src="/img/courses/javaee/jaxws/03-wsexp.jpg" />

Once you have the WSDL open, you can import it to your project and open it. Or you can click to open the WSDL directly from the Web Services Explorer. This lets you use inbuilt Eclipse plugins to graphically navigate the WSDL. If you are working with a long and complicated WSDL, this could be handy.

<img class="img-responsive" src="/img/courses/javaee/jaxws/04-wsexp.jpg" />