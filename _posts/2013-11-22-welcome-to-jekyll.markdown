---
layout: post
title:  "Welcome to Jekyll!"
date:   2013-11-22 11:30:24
categories: spring core
course: spring
topic: core
---

You'll find this post in your `_posts` directory - edit this post and re-build (or run with the `-w` switch) to see your changes!
To add new posts, simply add a file in the `_posts` directory that follows the convention: YYYY-MM-DD-name-of-post.ext.

Jekyll also offers powerful support for code snippets:

{% highlight java %}
public interface ShoppingCart<T> {
        
        public String createCart();
        
        public void saveToCart(String cartId, T item);
        
        public Object getCartValue(String cartId);
        
        public T getCartValue(String cartId, Class<T> valueClass);

        public void clearCart(String cartId);


}
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll's GitHub repo][jekyll-gh].

[jekyll-gh]: https://github.com/mojombo/jekyll
[jekyll]:    http://jekyllrb.com
