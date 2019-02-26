---
title: Big Uh O!
date: '2019-02-24'
---

Oh, Big O. Big O is one of those concepts that I've always said "yeah, sure I get that" but every time I revisit it, I'm like BUT WHY.

![alt text](https://media.giphy.com/media/CPskAi4C6WLHa/giphy.gif)

As I've gotten older, I've been able to understand it a little better. I say "as I've gotten older" because with some experience behind my belt I've been able to grasp why we use Big O to determine the efficiency of an algorithm

![alt text](https://media.giphy.com/media/he8aSdri52ZnW/giphy.gif)

I'll try my best to explain it and hopefully it'll make more sense to those that are still confused by the topic.

One graph I really appreciate is this one:

![alt text](bigograph.png)
(The graph is from Jose Portilla's course on Data Structures and algorithms on Udemy)

What exactly are we looking at? We see that the x-axis of the graph is labeled `n` and the y-axis is labeled 'relative runtime.'

That means, as `n` increases, so does their runtime, for the most part.

With Big O, we are measuring how fast an algorithm _grows_. That can sound confusing at first so let's go through some examples of the most common Big O's.

### `O(1)`

`O(1)`, also known as _constant_ runtime means that no matter how big `n` is, the runtime will remain well, constant.

Here is an example of a `O(1)` runtime:

```
def constant_bigo(elements):
    result = elements[0] * elements[0]
    print()

constant_bigo([4, 5, 6, 8])
```

This piece of code runs in `O(1)` time because we are multiplying `items[0] * items[0]` and then printing the value. It doesn't matter how big the list of items is because we will always multiply the first item by itself. In this case `4 * 4` which is `16`.

### `O(n)`

```
def linear_bigo(elements):
    for i in elements:
        print(i)
linear_bigo([1,2,3,4,5,6,7,8,9,10])
```

This piece of code is `O(n)` because depending on however many elements are in the input, will be however many times our for loop executes. If there are 10 elements in the elements array, the for loop will execute 10 times. If there are 1,000,000 elements in the elements array, the for loop will execute 1,000,000 times.

Let's quickly take a look at the graph I presented earlier in this post. Our code for `O(n)` takes in some arbitrary amount of elements. For our example, let's say the input is 10 elements in some array. If we look at the graph, if `n` is equal to 10 then the relative runtime or the amount of operations is also 10. This is why we say that the function increases _linearly_ with direct proportion to the number of inputs.
