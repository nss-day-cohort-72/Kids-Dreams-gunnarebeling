# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > the code for the child clickEvent should be in the Kids.js module because that is where the function that builds the  HTML for the list of childern lives. This makes the code more organized and easier to follow because everything that has to do with those elements are in the same module.Also it is easier to reference datasets when you are working in the same module.
   The Way the logic works for the clickEvent is the document.addEventListener() method with "click" as the first argument listens for a click on any element in the DOM  and invokes the function that is passed in as the second argument. the function in this case first targets the specific element clicked with clickEvent.target and puts it into a variable. To make sure the element being clicked is the one we want to invoke the function on we have an if statement comparing "===" the datset.type to string "child" if this boolean statement is true then we loop through the celebrities array of Objects and use another if statement to compare the value of a different dataset key "celebrityId" (foriegn key) of the targeted element and the itarations "id" key value (primary key) if  the statement is true then we invoke the window.alert method that creates a pop up window displaying the string `${nameOfKid} will be making memories with ${celebrity.name}`
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > In the pairing function we are creating a HTML element for each kid so we have to loop through each Obj in the kids array and invoke the findCelebrityMatch()function for each itaration and passing in the itaration as an argument. the findcelebrityMatch() function returns the matching celebrity of that iteration. then the remainder of the pairing function creates an interpolated HTML string showing which celebrity is paired with each kid.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > Your answer here
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > Your answer here
