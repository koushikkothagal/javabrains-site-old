---
layout: post_only
title: Using Endpoint
unused: javaee/jaxws/Using-Endpoint.html
tags: javaee jaxws
category: javaee_jaxws

---

There is an alternative way of publishing and running web services without having to use any app servers. In this tutorial, we'll use the Endpoint class to publish our web service.

{% include youtube.html param="ExGgevg3i94" %}

###Summary

So far, we've used the Glassfish application server to deploy and run our web service application. While this works just fine, there are alternative ways to deploy and run web services. In fact, you can run a web service application without using any servers!

Every JDK, at least the latest version, comes with support for JAX-WS. You can write a simple Java class that publishes and runs your web services!

Create a new Java class with a main method. Add the following code:

``` java

public static void main(String[] args) {

    Endpoint.publish("http://localhost:1234/productcatalog", new ProductCatalog());

}

```

That's all it takes to run a web service! The `Endpoint.publish()` is an overloaded method, but the one we are using here takes two arguments.

The first argument is a `String` where you can specify the URL for your web service. Note that I'm using `localhost` as the host name since I intend to run this on my computer only. The port can be any arbitrary port that you know is not in use by any other program on your computer. I'm using port `1234` here. The `productcatalog` part of the URL can be any arbitrary name that you want the web service to be exposed at.

The second argument is an instance of the `ProductCatalog` class. Basically it has to be an instance of any class that has the `@WebService` annotation. This is the web service that you want to publish at the URL you've specified in the first argument.

Run the main method and you are done. You can access the web service page at `http://localhost:1234/productcatalog`. You get the WSDL generated at `http://localhost:1234/productcatalog?WSDL`. This web service is able to receive and respond to SOAP requests!

### How it works

We are not using Glassfish here. Who is handling the responsibilities of running the web service and responding to requests? The answer is an implementation called **Metro**.

<a href="https://metro.java.net" target="_blank">Metro</a> is a reference implementation of the JAX-WS standard that we've been learning so far. The JAX-WS specification tells us how to write web services. It tells us what annotations to use, what conventions to follow and so on. Once you write a web service that follows this specification, you'll need something to run it!

This is where JAX-WS implementations come in. The implementations pick up any code that is written following the specification, and they actually run them exactly like the specification promises they would.

Metro is bundled with Glassfish. When a web service application is deployed in Glassfish, it is actually Metro doing all the work behind the scenes. Interestingly, Metro is also bundled with the JDK, which is why we could run a web service using just the `Endpoint` class in the JDK, without using any app servers.

Of course, there are some limitations to running this using `Endpoint.publish()` approach. For instance, web services published using `Endpoint` are single threaded. They cannot run multiple threads by default and needs further tweaking to make them more useful.

When deploying web services in a production environment, you need a decent application server. But for other purposes, when you don't need a heavy weight Java EE application server, you can use this approach. Especially when you are developing web services and need to run something quickly and easily.
