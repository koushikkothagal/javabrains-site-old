---
layout: post_only
title: Designing Resource URIs
categories: content javaee_jaxrs
---

In this tutorial, we’ll start designing a sample RESTful API for our sample social media application. And through the process, we’ll understand how RESTful URIs are designed.

{% include youtube.html param="NjpKwiRORI4" %}

## Designing Resource URIs


In this tutorial, we’ll start designing a sample RESTful API for our sample social media application. And through the process, we’ll understand how RESTful URIs are designed.

Note that the next few tutorials are going to be all about design. We will understand what a good API looks like. We will start coding much later, so if you want to get started with the implementation, you can skip these API design tutorials. But remember, an important thing that makes good REST APIs is how well its designed. So, in my opinion, understanding REST API design is more important than learning how to actually implement them.

The app we are building in this course is gonna be called Messenger. It's a social media application that lets people post messages as status updates. They can also write comments on other messages or like other messages ala Facebook. Users also have user profile information that they can create and update.

A very simple application with a very simple ER diagram. You have a USER table with user information. And a MESSAGES table that contains all messages anyone ever posted, each row referring to a USER who posted it. And finally, COMMENTS and LIKES tables which refer to the message that's being commented or liked. And the user who has entered the comment or hit 'like'.

This is going to be the core of the Messenger application. Let's look at what URIs you'd design for this application. We want to design RESTful "resource based" URIs. How do we do that?

If this were to be a web application, I’m sure you already know what to do. Say we need a page to view a message. It takes in a message ID and it displays that message. The URL could be anything of your choice. It could even depend on the framework you use. Let’s say you use Struts. The URI to get post ID 10 could be something like this:
`/MyApp/getMessages.do?id=10`

Or it could be:
`/MyApp/retrieveMessages.action?postId=10`

These are perfectly valid URIs. And honestly, when developing web applications, what URI you use doesn't matter. Because, as long as you provide the links to the user in your web app, the user is just going to click on the link and retrieve the message. They rarely have to worry about the URL itself.

However, when writing REST APIs, the consumers _have_ to be aware of the URIs. This is because, the consumer of your RESTful API is a developer who has to write code to make HTTP calls to the URI. What would really help is have a common URI convention for entities like this. That’s where the RESTful concept of resource URIs come in.

Before I start explaining the best practices for forming these URIs, I should tell you, that's what this is: best practice. Like we've seen before, there is no right or wrong way to create URIs. But if you are writing a REST API, it's better you follow these best practices to keep both you, and the API client from going completely insane.

## URIs, retro style!

Let’s pause for a minute and step back in time to the late 1980s and early 1990s. The time when bright colors were in fashion everywhere, not just in clothes, but also in web pages. A typical website at that time would most likely be a set of web pages. Static HTML web pages. Imagine one such site now. To access the pages of the site, you would enter the URL that consists of the path to the page ending with the page name. Every page has a specific URI that uniquely identifies that HTML page. There is no ambiguity there. This is exactly the concept behind resource based URIs. Every _thing_ or _entity_ has a URL that’s unique and standard.

I've found the best way to design RESTful URIs is to think of them as static pages. Take the profile pages on a site like Facebook for example. If you had to design profile pages as static HTML, think of how you'd create them. You would create one HTML for every profile. So, if my profile name is koushik, the name of the page would be koushik.html. Let's say there are 4 users for this website: koushik, raj, sid and jane. So, I have 4 static HTML pages, the names of the files being the names of the profile. Now that I have a bunch of these profile HTML files on my site, I'll group all the profile pages in a profiles folder. So, the path to my profile page would be something like:

`/profiles/koushik.html`

Drop the .html extension, and you have the RESTful URI.

`/profiles/koushik`

Making it generic, the URI for any profile page is:

`/profiles/{profileName}`

There you have your first RESTful resource based URIs. Think of resources and create a unique URI for them.

Let's look at some more examples. How about posts or messages? Let's say every message has an ID. Then you could design URIs like this:

`/messages/{messageId}`

So, the URI `/messages/1` shows you message ID 1 and `/messages/10` shows message ID 10 and so on.

Notice two things with the URIs. First, the URI contains **nouns** and not **verbs**. Things in the system like documents, persons, products or accounts are resources. You don't have URIs like *getMessages* or *fetchMessages*. It's just *messages*. When you are designing RESTful URIs, keep an eye out for any verbs in your URI. There typically shouldn't be any. Just nouns. And typically the nouns are the resource names themselves, like posts or profiles. Again, using the static web pages example, you'd never name a directory as getProfiles or fetchMessages. The directory names would be profiles or messages respectively.

Secondly, notice the resource name is plural in both cases. It's not `/message/{messageId}`. Again, this is a good practice, because it makes it clear there are multiple message under `/messages`, not just one.

So, here's the very first step to designing a REST API for any system.

> Identify the *things* or *nouns* or *entities* in your system. They are your *resources*. Then assign resource URIs for each resource.

The advantage of using such resource based URIs is that they are really not dependent of the framework you use. So, no `.do` or `.action` in the URIs. And no `?id=` query params. These details are of no significance to your clients, so there is no reason to have them in the URI. Also, this makes URI resistant to changes in your application design or technology. As W3C says, [cool URIs don't change!](http://www.w3.org/Provider/Style/URI.html.en)

Let's look at some other *nouns* in our Messenger application. There's comments, likes and shares. Each one can be a resource. Let's start with comments. What would be a good restful URI for a comment with ID 20? Well, it could be `/comments/20`. That's correct. But there is one more thing you can do here.

## Resource relations

When designing URIs for resources, you'll often encounter some resources that are dependent on each other. Take the example of messages and comments. Someone posts a message and then other people comment on it. A message can have multiple comments, and each comment has its own IDs. A message has a one-to-many relationship with comments. We've designed the URI for posts to be `/messages/{messageId}`. Could the URI for comments be `/comments/{commentId}`?

Well, it could, but that treats messages and comments as two independent resources, and not acknowledge the relationship between them.

Say we have two messages, message 1 and message 2. Message 1 has comments ID 1, 2 and 3. Message 2 has comments 4 and 5. If I were designing this as static HTML pages, I wouldn't want to create one comments folder and put all comments pages in it! I would lose the relationship information that comments have to the messages. To convey that relationship, I could create a folder for each message and put all comments pages related to that message in that folder.

So, the URI for comment 2 is:
`/messages/1/comments/2`

Notice how the message ID is a part of the URI, which is then followed by `comments`  and the comment ID.

The generic URI for a comment is:
`/messages/{messageId}/comments/{commentId}`

Is this URI better than `/comments/{commentId}`? Well, it depends. This makes it clear that the comment belongs to a particular message, so the relationship between resources is well established. But on the other hand, to get to a comment, you need to know the comment ID as well as the message ID. You know the URI for message ID 20. But what's the URI for comment ID 300? You'd need to know what the message ID is to access any comment. So, it depends on what you expect your client to know when they need to access this.

This structure can be applied to other related resources too. For example, message can be shared, and each share has a unique ID. So, the URI for likes could be:

`/messages/{messageId}/likes/{likeId}`

A share could be:

`/messages/{messageId}/shares/{shareId}`

So, typically, when there is a one-to-many relationships, you could choose to have the "one" side of the relationship to be the root resource, and then the resource on the "many" side follow that.

How about many-to-many? Or one-to-one? Let's set that aside for now. We will revisit relationships later in this course, and for now, let's limit ourselves to one-to-many.

## Summary

So, what are the resources in our system? We have profiles, messages, comments, likes and shares. We have identified resource URIs for each. We'll treat profiles and messages as first level entities, and comments, likes and shares as second level entities in relation to messages.

Now you might wonder why messages are not related to profiles. Why are they both first level entities? Messages are posted by someone who has a profile. There is a one to many relationship between profile and messages! So, couldn't you have message URIs like this?

`/profiles/{profileId}/messages/{messageId}`

You could! In this case, I decided to have messages independent of profiles because I felt they weren't as tightly coupled together as messages and comments are. But this is something that you should decide when designing the API for your system.

I hope the concept of resource based URIs makes sense. One other important consideration is a concept of collection URIs, which we'll learn about in the next tutorial.
