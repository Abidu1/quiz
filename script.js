const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Computer Style Sheet",
        b: "Cascading Style Sheets",
        c: "Computer Stylius System",
        d: "Color Sequence Sheet",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const questions = document.getElementById("question");
const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit-btn")

let currentQuiz = 0;
let score = 0;


loadingQuiz();

function loadingQuiz (){
    deselectAnswers();
    // in the beginning of the game all the answers that a user has chosen before will all be deselected meaning the form will reset 
    const currentQuestion = quizData[currentQuiz]
    questions.innerText = currentQuestion.question
    a_text.innerText = currentQuestion.a
    b_text.innerText = currentQuestion.b
    c_text.innerText = currentQuestion.c
    d_text.innerText = currentQuestion.d
}

// function notSubmit(){
//     submit.textContent = "Submit"
//     submit.addEventListener("click", function(){
//         alert("you are finished")
//     })
// }

    
// submit.addEventListener("click" , function(){
//     currentQuiz++;

//     // if(currentQuiz < quizData.length){
//     //     loadingQuiz();
//     // } else {
//     //     notSubmit();
//     // }
// });

function getSelected() {
let answer = undefined;

answersEls.forEach((answerEL) => {
    if (answerEL.checked) {
        answer = answerEL.id;
        // answer is undefined but when user clicks the submit button when answering a question then we get the id of the answer they selected such as if they selected d the answerEL.id would get the id of "d"
    }
});

return answer;
// else return undefined if they do not select anything
}

function deselectAnswers() {
answersEls.forEach((answerEl) => {
    answerEl.checked = false;
});
// this means that each answer that was selected from a previous will be false meaning it will be checked off
}

submit.addEventListener("click", () => {
// check to see the answer
const answer = getSelected();

if (answer) {
    if (answer === quizData[currentQuiz].correct) {
        // if user selects the answer as the same as the correct one on the quizdata then their score will increase
        score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
        // if current question is not the same length as the quizData then load more question
        loadingQuiz();
    } else {
        // if its the end of the quiz show score the quizdata length
        quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload</button>
        `;
    }
}
});