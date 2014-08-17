---           
layout: blank
title: Handling Faults
comments: false
redirect_from: 2013/09/handling-faults.html
tags: javaee jaxws
dummy: javaee_jaxws
---

Web services return "Fault" messages to denote error scenarios. In this tutorial, we'll throw an exception, generate and examine a fault message. 

Source code: <a href="https://github.com/koushikkothagal/Testmart/archive/307adc8daa0a5163c8358f418dfa489af9eb0dc2.zip"> <b>Download</b> </a>

We will now look at a third type of message that a web service operation can return. When there is an exception in the code execution, a web service should ideally return a fault message. In JAX-WS, this can be done by having the method declare a checked exception. 

Here's what I do to have our ShopInfoService web service return a fault message. 

1. Create a custom checked exception called InvalidInputException
2. Have the method throw this checked exception, with the necessary declaration.

When the framework sees that a web method throws an exception, it prepares the fault message accordingly.

The exception class that I create is pretty much a standard checked exception, except for a couple of web service specific elements.

```java
public class InvalidInputException extends Exception {

    private String errorDetails;

    public InvalidInputException(String reason, String errorDetails) {
        super(reason);
        this.errorDetails = errorDetails;

    }

    public String getFaultInfo() {
        return errorDetails;
    }

}
```

Notice the `private String errorDetails;` that I use to store a detailed error message with the Exception. This allows whoever throws the exception to give details about the error. This information will be returned in the fault message.

The way the framework gets this message is by calling the method `public String getFaultInfo()`. If your exception has this method, the framework uses it to prepare the SOAP response containing the message.