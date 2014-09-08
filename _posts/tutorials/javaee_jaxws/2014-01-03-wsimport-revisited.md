---
layout: blank
title: wsimport Revisited
redirect_from: javaee/jaxws/wsimport-revisited.html
tags: javaee jaxws
categories: tutorials javaee_jaxws
---

In this video, we will switch back to the client side and learn more about wsimport, the tool we used to generate client stubs.

{% include youtube.html param="lwXsrcJyjiI" %}

###Back to the client

We did a WSDL import early in this tutorial series, and we used a free external WSDL and web service that was available online. We will now switch to our own web service and write a client for the web service we've written - the TestMart web service!

We've already taken a look at the `wsimport` utility that comes with the JDK. When you run `wsimport` with the WSDL URL, it creates handy classes, called *stubs*, that hide the web-service-calling complexity for you. You just call a method of the generated class, and then it does the complete web service call and gives you the response as a return type. The stubs have one method for every web service operation, so calling any web service operation is literally as simple as calling a method on the generated class.

There are a few things you can do while `wsimport`ing that help in customising how the tool generates these stubs for you. Let's take a look at some of the options now.

Open the command prompt and navigate to a temporary folder. Any folder will do. We are just using it to generate the classes, and then we'll copy them to our Eclipse workspace.

You've already seen the basic command:

```
wsimport [options] <wsdl>
```

The `[options]` here are configuration options to change the way wsimport behaves, but at minimum, you just need to enter the location of the WSDL. The location could be a web address, like `http://webapp.com/webservice?WSDL`. Or it could be a local file on the file system. Both work, but I would recommend using the first approach. Whenever possible, make sure you choose HTTP WSDL URLs as input to `wsimport`. I'll explain why in the next tutorial.

I'll copy the WSDL URL and run `wsimport`. The tool parses the WSDL and generates all the necessary types. Here it has generated two directories containing classes.

Now, let's say you save the WSDL file on your hard drive and run wsimport. Do you think that'll work? I'll save the WSDL file to the local directory, the same directory that I'm already in. Now I'll run

```
wsimport productcatalog.wsdl
```

It still works! Why am I mentioning this? The reason is that the WSDL file, the file I've saved locally, is only a part of the web service definition. If you remember, the WSDL refers to types, which are in a separate XSD file. I didn't save those. But `wsimport` is smart enough to detect that. It starts with your local WSDL file, but looks up any referenced XSD files from their http locations.

###Import options

You've already seen the following three options.

`-d directory`
This lets you specify the directory where you want the generated classes to go.

`-keep`
Tells `wsimport` to save the source files. By default, `wsimport` deletes the `.java` files after compiling them and retains just the `.class` files.


`-s directory`
This tells wsimport where to put the source `.java` files. As you can imagine, using this turns on the `-keep` flag automatically.

Also, a couple of obvious ones:

`-verbose`
Makes the tool give more detailed output
and
`-quiet`
gives out little output. These two do not affect the output classes themselves.


Now, let's look at a couple of options that do affect the output classes.

`-p packageName`
Look at the output classes. They are in the package `org.koushik.javabrains` because that is the package I wrote the web services in. Of course, I did some overrides and they have gone into the `com.testmart` package.  Basically, that's the package that the web service belongs to, and that was automatically picked up into the WSDL as namespaces. Now *that* is again automatically picked up as the package names by `wsimport`. If you need to override this, you can change the package name of the generated classes by using the `-p` option.

For example, this command forces all generated classes to be in the `org.koushik.generated` package.

```
wsimport -p org.koushik.generated productcatalog.wsdl
```

Next, let's look at the `-b` parameter.

Every program that generates Java code carries with it an implicit responsibility. The responsibility that the code it generates has to compile! As we've seen, `wsimport` generates Java code and compiles it. So, can `wsimport` guarantee that the code it generates will compile fine?

Unfortunately, it doesn't! We'll take a look at the code `wsimport` generates later, but as you can imagine, it uses a lot of names like type names and variable names directly from the WSDL. For instance, an XSD type name becomes the corresponding generated class name. Now, in some areas, Java is stricter and XSD is more forgiving. In such cases, we have a problem. Some names that might be valid in XSD might not be valid on the Java side. So when `wsimport` generates code using those names, the resultant code may not compile!

A common problem is type names. You can have multiple schema types with the same name. But when they are converted to corresponding Java classes with the same name, if they end up being in the same package, the compiler will complain.
To avoid this problem, you can use what are called *binding files*.

> Binding files are XML files that let you specify custom overrides to the way code is generated by `wsimport`.

I will not be going into the details of binding files, but I'd encourage you to look them up. You can do  things like configuring a specific XSD type to have a Java class name of your choice instead of the default XSD type name.

You write all these overrides in an xml file and supply that to `wsimport` with the `-b` option.

```
wsimport -b binding_file.xml wsdl_file.wsdl
```

There are a lot of customization you can do here. The `-p` option lets you customize just the package  name, but this `-b` option lets you customize a whole lot more, and it is very handy when you have troublesome WSDL files that lead to Java classes that don't compile.

In the next tutorial, we'll look at two options related to the WSDL location that you should definitely know about. They address a specific problem with the way Java client works, and we'll understand what that is. See you in the next tutorial.


