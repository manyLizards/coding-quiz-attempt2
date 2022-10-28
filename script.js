//create global variables
var question = document.querySelector("#question");
var answers = document.querySelector("#answers");
var startBtn = document.querySelector("#start");

//create array with questions and answers
var quiz = [
    {
        question: "Which of the following pseudo-classes would you use in CSS to change the class of an element while the mouse is on it?",
        choices: ["___:active", "___:hover", "___:focus", "___:not(_)"],
        correct: 1
    }
    {
        question: "Which HTML element contains the text that goes on the tab above the webpage?",
        choices: ["!DOCTYPE", "body", "div", "title"],
        correct: 3
    }
    {
        question: "How do you halt event bubbling?",
        choices: ["Domain Object Model (DOM)", "JSON.parse___", ".trim()", "event.stopPropagation"],
        correct: 3
    }
    {
        question: "Which of the following is a way to store groups of data into a single variable?",
        choices: ["Arrays", "Functions", "Objects", "Conditional Statements"],
        correct: 0
    }
]