---
layout: post_only
title: Anatomy of an Interceptor
date: 2013-04-15 00:42:35 UTC
updated: 2013-04-15 00:42:35 UTC
redirect_from: 2013/04/struts2-18.html
comments: false
tags: struts2
category: struts2_intro
---

In this tutorial, we'll learn what the Struts 2 interceptor class contains. We'll understand how the flow of control is achieved, and how the framework makes the flexible "plug-anywhere" configuration of interceptors possible.

{% include youtube.html param="qefvF2Y0A8Y" %}

###Summary

Notes

1. Interceptors typically contain pre- and post-processing logic.
2. An ActionInvocation object manages the overall flow of control.
3. Every interceptor has a method called intercept() that contains the necessary logic.
4. The interceptor calls the invoke() method of the ActionInvocation object to continue further processing.

Interceptors can execute code before and after an Action is invoked. And since they can be configured in any order for any Action, it's not possible for the interceptor to figure out where the flow of control needs to go next.

The way Struts 2 manages the flow of control is by giving the responsibility to a separate framework class called the ActionInvocation.

Here is a short snippet of the ActionInvocation interface. Read through the Java docs. Most of it should now make sense.

{% highlight java %}
package com.opensymphony.xwork2;

public interface ActionInvocation extends Serializable {


    /**
     * Invokes the next step in processing this ActionInvocation.
     * <p/>
     * If there are more Interceptors, this will call the next one. If Interceptors choose not to short-circuit
     * ActionInvocation processing and return their own return code, they will call invoke() to allow the next Interceptor
     * to execute. If there are no more Interceptors to be applied, the Action is executed.
     * If the {@link ActionProxy#getExecuteResult()} method returns <tt>true</tt>, the Result is also executed.
     *
     * @throws Exception can be thrown.
     * @return the return code.
     */
    String invoke() throws Exception;

...

}
{% endhighlight %}

The ActionInvocation contains a method called invoke() that the framework uses to kickstart the flow. Once the method starts,

1. ActionInvocation invoke() refers to the configuration to identify what interceptors need to run and calls the intercept() method of the first interceptor.
2. The pre-processing logic of the interceptor runs, and then calls the ActionInvocation's invoke() again.
3. The invoke() looks for the next interceptor to call intercept() on, or if all interceptors are done, calls the Action's execute() method.
4. When the methods return, the post-processing logic of all the Interceptors run in the reverse order.
