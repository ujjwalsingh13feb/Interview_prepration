1.What is event handler and listener?
Note: Event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening.

2.What is event listener and its classes?
Event listeners represent the interfaces responsible to handle events. Java provides various Event listener classes, however, only those which are more frequently used will be discussed. Every method of an event listener method has a single argument as an object which is the subclass of EventObject class.


3.What are the benefits of event listeners?
The benefit of using event listeners is that we can create multiple handlers for the same event on the same target (a DOM element, window , document , or otherwise). This improves our code organization and how easy it is to read and understand, and it also makes our code able to scale well.