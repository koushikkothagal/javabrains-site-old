---           
layout: blank
title: Using JAXB Annotations Part 2
comments: false
redirect_from: 2013/09/using-jaxb-annotations-part-2.html
tags: javaee jaxws
dummy: javaee_jaxws
---

Let's now add some JAXB annotations to our Model class to customize the resulting XML. 

**Source code:** <a href="https://github.com/koushikkothagal/Testmart/archive/990865dbabbfdeeb5dd0271a6c163a03091a8c2e.zip"> <b>Download</b> </a> 

{% include youtube.html param="k5GbEwDFIl8" %}

JAXB conversions do not need a lot of inputs by default. When converting the Java object to XML, every field becomes an XML element with the field name. If there are collections or other complex types as member variables, they get converted to XML the same way, and their XML elements are nested in the parent XML. If we need to override any of the defaults, JAXB annotations can be used.

Here, I use `@XmlRootElement` and `@XmlType` to annotate the class itself. I provide a name to the root element. Then I configure the order in which the elements show up using the propOrder property of `@XmlType`.

```java
@XmlRootElement(name="Product")
@XmlType(propOrder={"price", "sku", "name"} )
public class Product {
...
```

The `@XmlElement` annotation can be used to configure individual attributes. I use this annotation to change the name of the "name" property to "ProductName". Notice that I am annotating the getter of the property.

```java
@XmlElement(name="ProductName")
public String getName() {
    return name;
}
```

I also annotate the method in the endpoint interface with `@WebResult` to customize the result name in the XML.

```java
@WebMethod
@WebResult(name="Product")
public abstract List<Product> getProductsv2(String category);
```

Finally, I'll need to create a public no-args constructor. ***Any class annotated with JAXB annotations needs to have such a constructor because JAXB uses it to initialize objects.*** You wouldn't typically need to do this, but it's required here because I have explicitly provided a constructor with args. 

Having made these changes, when I redeploy the project and make a SOAP request from the tester page, the resulting XML has the structure I've configured.