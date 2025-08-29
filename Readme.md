What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 
getElementById finds one element by ID. 
getElementsByClassName finds many elements by class, returns a live list.
querySelector finds the first element using any CSS selector.
querySelectorAll finds all matching elements, returns a static list.
querySelector methods are more flexible and getElementById is faster for IDs.


How do you create and insert a new element into the DOM?
Answer: 
To create and insert a new element in the DOM, I use JavaScript document.createElement() method. First create the elemnet (e.g.; div, p, li). Then I can add content using innerText or innerHTML, and style or add atributes if needed. Finaly place it in the document using methods like appendChild().

What is Event Bubbling and how does it work?
Answer:
Event bubbling is a concept in JavaScript where an event triggered on a child element automatically propagates (moves) up through its parent elements until it reaches the document root. For example, if I click a button inside a div, the click event first runs on the button, then on the div, then on higher parent elements. This behavior is useful for event delegation, where instead of adding event listeners to many child elements, I add one listener to a parent, and it handles events for its children. Bubbling goes from the innermost element outward, unless stopped with event.stopPropagation().


What is Event Delegation in JavaScript? Why is it useful?
Answer:
Event delegation is a JavaScript technique where instead of adding event listeners to multiple child elements, you attach a single listener to their parent element. Because of event bubbling, when a child element is interacted with (like clicked), the event bubbles up to the parent, and the parent’s listener can handle it. This is useful because it improves performance (fewer listeners in memory), makes code cleaner, and allows handling dynamically added elements without re-adding listeners. For example, instead of attaching a click event to every list item, you attach one to the ul and detect which li was clicked.

What is the difference between preventDefault() and stopPropagation() methods?
Answer: In JavaScript, preventDefault() and stopPropagation() serve different purposes in event handling. The preventDefault() method prevents the browser’s default action for an event. For example, clicking a link normally navigates to another page, but with preventDefault(), that navigation is stopped. On the other hand, stopPropagation() prevents the event from bubbling up (or capturing down) through parent elements in the DOM tree. For instance, if a button is inside a div, clicking it would normally trigger both button and div handlers. Using stopPropagation() ensures only the button’s handler runs. Together, they give precise event control.