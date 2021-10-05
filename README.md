# Alchemy Bootstrap Template

### Magic 8 ball
* random number
    * between 1 and 20
    Math.floor(Math.random() * 20) + 1
         1 - 20
    Math.floor(Math.random() * 20) + 1
        0 - 19
    --or--
    Math.ceil(Math.random() * 20)
     1 - 20
    * Ceiling always rounds up, floor always rounds down.

* arrays
const colors = ['red', 'white', 'blue']
                0         1       2

* random color from array
    Math.floor(Math.Random()*3)
        between 0 - 2

* What happens if another item is added to the array?
color.push('purple')
Array will be ['red', 'white', 'blue', 'purple']

* pull from array length, not a set number incase there is a push of new array item
Math.floor(Math.random()*colors.length)

colors[Math.floor(Math.random()*colors.length)]

###  Magic 8 Ball plan
## What HTML Elements do I need
* Text Area for the question -- static
* Button -- static
* Paragraph to hold the answer -- dynamic

## What state do I need?
* answer 
* RandomIndex

## What events am I lisetning for? What happens when those events are fired?
* Button click
    * Generate a random index
    * Get the value of the answer
    * Display the answer on the page

## Making a plan

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass