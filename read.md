What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: getElementById selects the element by the id.
    getElementsByClassName selects the element by classname.
    querySelector selects the item the first matches the element   
    querySelectorall selects all the item  matches the element   


How do you create and insert a new element into the DOM?

ans : we use the createElement to create a new element in the DOM and appendChild(newChild) add them in the DOM

What is Event Bubbling and how does it work?

ans :When you click on something in a webpage, the event doesn’t just happen on that element — it also travels upward through its parents one by one.

What is Event Delegation in JavaScript? Why is it useful?

ans: when add the addeventlistener to the parent instead all the child, it is useful because if we give it to the parent instead of the child we can add or subtract as many children we need and all the function will stay. 

What is the difference between preventDefault() and stopPropagation() methods?

ans :  preventDefault() Stops the default action of the element.
        stopPropagation() Stops the event from bubbling up to parent elements