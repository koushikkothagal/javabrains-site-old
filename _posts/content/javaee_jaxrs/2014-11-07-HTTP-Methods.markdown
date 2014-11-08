---
layout: post_only
title: HTTP Methods
categories: content javaee_jaxrs
---

Now that we've identified some important resource URIs, let's work on the operations that can be performed and the data that's exchanged

{% include youtube.html param="AK6TulIASgQ" %}

We saw that a URI like `getMessages.do?id=10` is *action-based* and not RESTful. We chose the URI `/messages/10` to replace it. This is resource based and RESTful and all that good stuff. But here's a problem.

Look at the URI `getMessages.do?id=10`. It has 3 pieces of information. 

1. It refers to messages
2. It refers to ID 10
3. It *gets* that information

Now look at the URI `/messages/10`. There's definitely #1 and #2. But the URI does not have the information in point 3.

You could argue that accessing that URI *gets* the data for message id 10. But what about other operations? We have looked at just getting data so far. You could have URIs that submit data.

For example:
`/submitMessage.do?id=10` lets you submit something to the message ID 10. What would be the REST URI equivalent for that?

Well, equivalent resource based REST URI is:
`/messages/10`

Yes, that's right! It's the same URI.

How about a delete operation? What would be the equivalent of a URI like `/deleteMessage.do?id=10`?

The equivalent is still `/messages/10`!

How is that possible? How can the same URI do all these different operations? *And how does it know when to do what?*

The answer is **HTTP methods**. If you want your API client to perform different operations for message 10, just have them use different HTTP methods to the same URI `/messages/10`! 

The most common HTTP methods are:
1. GET
2. POST
3. PUT
4. DELETE

There are some other methods that are rarely used like HEAD and OPTIONS. But for the most part, we'll focus on the 4 common HTTP methods in this course.

These HTTP methods have specific meanings, and you typically use the right method for the right operation. Also, when using HTTP, like when you are browsing a web page, you are actually using these methods automatically. When you type in a URL in the address bar of your browser, the browser automatically issues a GET request for that URL. When you submit a form, the browser probably uses a POST request to do so. The idea is to use the right methods depending on the operation. Choosing methods for a RESTful API also follows the same idea.

So, for example, in the REST world, you do not make a call to `getProducts`. You make a GET request to the products resource URI. You do not call `deleteOrder`. You make a DELETE request to the order resource URI. The URI tells you what *entity* or resource is being operated upon and the method tells you what the operation is.

## Scenarios

Let us look at some of the common operations in our sample social media application and identify the HTTP methods for each of them.

#### Getting a message
This should be obvious now. The URI is the resource URI that you need to get. the HTTP method is GET, since you are literally *getting* the information

Example: `GET /messages/20` returns the message ID 20.

#### Updating a message
Let's say our social media application lets you make changes to messages you've already submitted. We anticipate this feature of our Messenger application will be very popular  among some  celebrities and politicians who'd sometimes like to retract what they've already posted. 

What's the right method for submitting an updated message. Is it the POST method? This one is not all that obvious. You *can* use POST, and I know some people do, but the standard practice is to use the PUT method. Why PUT and not POST? There is a very important difference between two, and I'll talk about that a bit later. But for now, remember that we'll be using PUT to *update*  or *change* any resource. 

Of course, you'll want the resource to be updated with something. The new content. That content needs to be sent in the body of the PUT request. 

Example: `PUT /messages/20` (with the request body containing the new message content) replaces the message ID 20 with the content in the request body.

#### Deleting a message
This one should be easy. Yes, there is a DELETE method, and that's what you should use here. When you want your clients to delete a resource, just have them issue a DELETE request to the resource URI.  No request body required.

Example: `DELETE /messages/20` deletes message ID 20.

#### Creating a new message
 This one is interesting. Before we talk about the method to use, think about what URI to call to create a new message. To get, change or delete a message, you used the message resource URI `/messages/{messageId}`. How about creating a new message? The message hasn't been created yet, so there is no message ID! And the ID is typically managed by the application, by finding the next unused ID, so the client usually has no idea what the ID will be.

This is why, requests for creating a new resource is always issued to the collection URI for that resource. To create a new message, the request is made to `/messages`. To create a new profile, a request is made to `/profiles`. The application receives this request and creates a new resource and assigns an ID to it.

With that settled, what will be the HTTP method? For creating resources, the practice is to use a POST method. The POST body will should contain the content for creating the resource.

Once the resource is created, the service will need to let the client know what the ID is. Because, unless the client knows the ID, there is no way for it to do anything with the newly created resource. So, in the response for the POST request, the web service sends back the ID of the newly created resource.

Example: `POST /messages` (with the request body containing the new message) creates a new message with the content in the request body. Response to this request contains the message ID that was created.

## Collection URI scenarios

You'll appreciate the elegance and overall awesomeness of REST API practices when you realize how seamlessly these concepts translate to collection URIs.

Imagine what happens when you make a GET request to a collection URI like `/messages`. Yes, you get all messages! Other HTTP methods work the same way too. Here are some examples:

DELETE on `/messages/10/comments` deletes all comments associated with message 10.

POST on `/messages/10/comments` creates a new comment for message ID 10 with the request body containing the new comment information.

PUT on `/messages/20/comments` replaces the list of comments for message ID 20 with a new list of comments in the PUT body. (This kind of API is not commonly used though)

DELETE on `/messages` deletes all messages (Again, not commonly used, and not something you'd want to implement, I think!)

## Summary

There you go. We have identified standard HTTP methods for all the CRUD operations. Whenever you need to provide APIs for creating, deleting, fetching or updating a resource, you know what methods to choose for them.

This, of course, doesn't address all the operations. Very rarely do web applications perform just CRUD operations. What if you need to provide an API for archiving a message? Or run a server-side job? How can we map GET, PUT, POST and DELETE methods to those miscellaneous operations?

The fact is, these methods do not really map to CRUD operations. It does look like that based on what we've seen in this tutorial, but there is more to it. We will talk about this in a later tutorial, so hold on to that thought for a bit!

